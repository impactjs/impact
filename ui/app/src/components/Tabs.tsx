import {
  Tabs as ArkTabs,
  tabsAnatomy,
  type TabsRootProps as ArkTabsRootProps,
} from "@ark-ui/react";
import { composition } from "../utils/composition";
import { cx, sva } from "@impacts/styled-system/css";
import { cloneElement } from "react";
import { styled } from "@impacts/styled-system/jsx";

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
      <ArkTabs.List
        className={classes.list}
        style={{
          gridTemplateColumns: `repeat(${trigger.length}, 1fr)`,
        }}
      >
        {trigger.map((trigger) =>
          cloneElement(trigger, { className: classes.trigger }),
        )}
        <ArkTabs.Indicator className={classes.indicator} />
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
      size: "full",
      display: "flex",
    },
    list: {
      gap: "xs",
      display: "flex",
    },
    trigger: {
      padding: "xs",
      display: "flex",
      alignItems: "center",
      gap: "xs",
      textAlign: "start",
      color: "interface.700",
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
          width: "full",
          flexDirection: "row",
          borderTopRadius: "sm",
          backgroundColor: "interface.200",
          border: "1px solid token(colors.interface.300)",
        },
        indicator: {
          position: "absolute",
          backgroundColor: "primary",
          width: "var(--width)",
          height: "1px",
          bottom: 0,
        },
        content: {
          borderTopRadius: 0,
          borderTop: "none",
        },
      },
      vertical: {
        root: {
          gap: "sm",
          flexDirection: "row",
        },
        list: {
          flexDirection: "column",
          padding: "sm",
          borderRadius: "sm",
          backgroundColor: "interface.200",
          border: "1px solid token(colors.interface.300)",
        },
        indicator: {
          display: "none",
        },
        trigger: {
          width: "full",
          borderRadius: "sm",
          border: "1px solid",
          borderColor: "interface",
          _selected: {
            backgroundColor: "interface.300",
          },
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
