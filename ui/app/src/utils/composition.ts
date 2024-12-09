/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Children,
  type JSXElementConstructor,
  isValidElement,
  type ComponentProps,
  type ReactElement,
  type ReactNode,
  Fragment,
} from "react";

type MapSingleChildrenEntry<T> = {
  type: "single";
  required?: boolean;
  component: JSXElementConstructor<T>[];
};

type MapMultipleChildrenEntry<T> = {
  type: "multiple";
  required?: boolean | number;
  component: JSXElementConstructor<T>[];
};

type MapChildrenEntry<T> =
  | MapSingleChildrenEntry<T>
  | MapMultipleChildrenEntry<T>;

type MapChildrenOptions = {
  // biome-ignore lint/suspicious/noExplicitAny: we need to use any here to allow for dynamic keys
  [k: string]: MapChildrenEntry<any>;
};

type MapChildrenResult<T extends MapChildrenOptions> = {
  [K in keyof T]: T[K] extends { type: "single" }
    ? ReactElement<
        ComponentProps<T[K]["component"][number]>,
        T[K]["component"][number]
      >
    : Array<
        ReactElement<
          ComponentProps<T[K]["component"][number]>,
          T[K]["component"][number]
        >
      >;
} & {
  rest: Array<ReactNode>;
};

export const composition = {
  has<T>(
    children: ReactNode,
    component: JSXElementConstructor<T> | JSXElementConstructor<T>[],
  ): boolean {
    return Children.toArray(children).some((child) => {
      if (isValidElement(child)) {
        return Array.isArray(component)
          ? component.some((c) => c === child.type)
          : component === child.type;
      }
      return false;
    });
  },
  single<T>(
    component: JSXElementConstructor<T> | JSXElementConstructor<T>[],
    options: { required?: boolean } = {},
  ): MapSingleChildrenEntry<T> {
    return {
      component: Array.isArray(component) ? component : [component],
      type: "single",
      required: options.required,
    };
  },
  multiple<T>(
    component: JSXElementConstructor<T> | JSXElementConstructor<T>[],
    options: { required?: boolean | number } = {},
  ): MapMultipleChildrenEntry<T> {
    return {
      component: Array.isArray(component) ? component : [component],
      type: "multiple",
      required: options.required,
    };
  },
  split<T extends MapChildrenOptions>(
    children: ReactNode,
    options: T,
  ): MapChildrenResult<T> {
    const composition = Children.toArray(children)
      .flatMap((child) => {
        const isFragment = (
          child: ReactNode,
        ): child is ReactElement<ComponentProps<typeof Fragment>> => {
          return isValidElement(child) && child.type === Fragment;
        };
        if (isFragment(child)) {
          return child.props.children;
        }
        return child;
      })
      .reduce(
        (acc: MapChildrenResult<T>, child) => {
          const found = Object.entries(options).find(([, { component }]) => {
            if (
              isValidElement(child) &&
              component.some((c) => c === child.type)
            ) {
              return true;
            }
            return false;
          });

          if (!found) {
            acc.rest.push(child);
            return acc;
          }
          const [key, { type }] = found;
          if (type === "single") {
            if (acc[key]) {
              throw new Error(
                `Expected single ${key} but found multiple ${key}`,
              );
            }
            Object.assign(acc, { [key]: child });
            return acc;
          }
          const list = acc[key] ?? [];
          if (!Array.isArray(list)) {
            throw new Error(`Expected multiple ${key} but found single ${key}`);
          }
          // @ts-expect-error -- we know list is an array
          list.push(child);
          Object.assign(acc, { [key]: list });
          return acc;
        },
        Object.create({ rest: [] }),
      );
    for (const [key, config] of Object.entries(options)) {
      if (composition[key]) {
        continue;
      }
      switch (config.type) {
        case "single": {
          if (config.required) {
            throw new Error(`Missing required ${key}`);
          }
          Object.assign(composition, { [key]: null });
          break;
        }
        case "multiple": {
          if (config.required) {
            throw new Error(`Missing required ${key}`);
          }
          Object.assign(composition, { [key]: [] });
          break;
        }
      }
    }
    return composition;
  },
};
