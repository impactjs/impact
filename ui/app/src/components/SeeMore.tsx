import { Dialog, Portal } from "@ark-ui/react";
import { sva } from "@impacts/styled-system/css";
import { Fragment, useState, type ReactNode } from "react";
import { Markdown } from "./Markdown";
import reactGfm from "remark-gfm";
import { Button } from "./Button";
import { center } from "@impacts/styled-system/patterns";
import type { ImpactResultSummaryUpdate } from "@impacts/types/results";
import { UpdateId } from "./UpdateId";
import { Box, Flex } from "@impacts/styled-system/jsx";
import { Tabs } from "./Tabs";
import { Icon } from "./Icon";

type SeeMoreProps = {
  children: ReactNode;
} & ImpactResultSummaryUpdate;

export function SeeMore({ children, main, references }: SeeMoreProps) {
  const classes = styles();
  const [contentElement, setContentElement] = useState<HTMLElement | null>(
    null,
  );
  return (
    <Dialog.Root lazyMount>
      {/* open={main.id === "FRONT-2085"}> */}
      <Dialog.Trigger asChild className={classes.trigger}>
        {children}
      </Dialog.Trigger>
      <Portal container={{ current: document.getElementById("root") }}>
        <Dialog.Backdrop className={classes.backdrop} />
        <Dialog.Positioner className={classes.positioner}>
          <Dialog.Content className={classes.content}>
            <Dialog.Title className={classes.title}>
              {main.title} <UpdateId {...main} />
            </Dialog.Title>
            <Flex
              flex="1"
              width="100%"
              overflow="auto"
              flexDirection="column"
              ref={setContentElement}
            >
              <Tabs.Root
                orientation="horizontal"
                defaultValue={main.id.toString()}
                onValueChange={(details) => {
                  const element = document.getElementById(
                    `content-${details.value}`,
                  );
                  if (element) {
                    contentElement?.scrollTo({
                      top: contentElement.scrollHeight,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {[main, references].flat().map((reference) => {
                  return (
                    <Fragment key={reference.id}>
                      <Tabs.Trigger
                        value={reference.id.toString()}
                        key={reference.id}
                      >
                        <Icon origin={reference.origin} />{" "}
                        {reference.id.toString().slice(0, 8)}
                      </Tabs.Trigger>
                      <Tabs.Content
                        id={`content-${reference.id.toString()}`}
                        key={reference.id}
                        value={reference.id.toString()}
                      >
                        <Markdown>
                          {`# ${reference.title}\n${reference.description}`}
                        </Markdown>
                      </Tabs.Content>
                    </Fragment>
                  );
                })}
              </Tabs.Root>
            </Flex>
            <Dialog.CloseTrigger className={classes.closeTrigger} asChild>
              <Button variant="linear">Close</Button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

const styles = sva({
  slots: [
    "root",
    "trigger",
    "backdrop",
    "positioner",
    "content",
    "closeTrigger",
    "title",
    "description",
  ],
  base: {
    positioner: center.raw({
      top: 0,
      left: 0,
      size: "full",
      zIndex: 100,
      position: "absolute",
    }),
    backdrop: {
      zIndex: 99,
      position: "absolute",
      size: "full",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      size: "70%",
      overflow: "hidden",
      gap: "md",
      padding: "md",
      display: "flex",
      boxShadow: "md",
      borderRadius: "md",
      flexDirection: "column",
      backgroundColor: "interface.100",
    },
    title: {},
    description: {
      width: "full",
      overflow: "auto",
      padding: "md",
      borderRadius: "md",
      height: "fit-content",
      border: "1px solid token(colors.interface)",
    },

    closeTrigger: {
      alignSelf: "flex-end",
    },
  },
});
