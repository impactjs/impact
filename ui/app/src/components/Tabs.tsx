import {
  Tabs as ArkTabs,
  tabsAnatomy,
  type TabsRootProps as ArkTabsRootProps,
} from "@ark-ui/react";
import { composition } from "../utils/composition";
import { cx, sva } from "@impact/styled-system/css";
import { cloneElement } from "react";
import { styled } from "@impact/styled-system/jsx";

type TabsRootProps = ArkTabsRootProps;
function TabsRoot(props: TabsRootProps) {
  const classes = styles({
    orientation: props.orientation,
  });

  const { trigger, content } = composition.split(props.children, {
    trigger: composition.multiple(ArkTabs.Trigger),
    content: composition.multiple(ArkTabs.Content),
  });

  return (
    <ArkTabs.Root {...props} className={cx(props.className, classes.root)}>
      <ArkTabs.List className={classes.list}>
        {trigger.map((trigger) =>
          cloneElement(trigger, { className: classes.trigger }),
        )}
      </ArkTabs.List>
      {content.map((content) =>
        cloneElement(content, { className: classes.content }),
      )}
    </ArkTabs.Root>
  );
}

const styles = sva({
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      gap: "sm",
      size: "full",
      display: "flex",
    },
    list: {
      gap: "xs",
      padding: "sm",
      display: "flex",
      borderRadius: "sm",
      backgroundColor: "interface.200",
      border: "1px solid token(colors.interface.300)",
    },
    trigger: {
      padding: "xs",
      width: "full",
      textAlign: "start",
      borderRadius: "sm",
      color: "interface.700",
      border: "1px solid",
      borderColor: "interface",
      _selected: {
        backgroundColor: "interface.300",
      },
    },
    content: {
      padding: "sm",
      borderRadius: "sm",
      flex: 1,
      backgroundColor: "interface.200",
      border: "1px solid",
      borderColor: "interface.300",
      height: "full",
      overflow: "auto",
    },
  },
  variants: {
    orientation: {
      horizontal: {
        root: {
          flexDirection: "column",
        },
        list: {
          flexDirection: "row",
        },
      },
      vertical: {
        root: {
          flexDirection: "row",
        },
        list: {
          flexDirection: "column",
        },
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const Tabs = {
  Root: styled(TabsRoot),
  Trigger: ArkTabs.Trigger,
  Content: ArkTabs.Content,
};
