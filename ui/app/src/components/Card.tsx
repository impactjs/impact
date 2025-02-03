import { Accordion, accordionAnatomy } from "@ark-ui/react";
import { sva } from "@impacts/styled-system/css";
import { HStack, VStack, styled } from "@impacts/styled-system/jsx";
import { hstack } from "@impacts/styled-system/patterns";
import type { ImpactResultSummaryUpdate } from "@impacts/types/results";
import { ChevronDownIcon } from "lucide-react";

import { Icon } from "./Icon";
import { Markdown } from "./Markdown";
import { UpdateId } from "./UpdateId";

type CardProps = ImpactResultSummaryUpdate;

export function Card({ main, references }: CardProps) {
  const classes = styles();
  return (
    <Accordion.Item value={main.id.toString()} className={classes.item}>
      <Accordion.ItemTrigger className={classes.itemTrigger}>
        <div className={classes.itemTitle}>
          <Icon origin={main.origin} />
          <styled.span fontWeight="bold">
            {main.title} <UpdateId {...main} />
          </styled.span>
        </div>
        <Accordion.ItemIndicator className={classes.itemIndicator}>
          <ChevronDownIcon />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent className={classes.itemContent}>
        <VStack width="full" alignItems="start">
          <div>
            {"description" in main && <Markdown>{main.description}</Markdown>}
          </div>
          <HStack>
            {references.map((reference) => {
              return (
                <HStack key={reference.id} gap="xs">
                  <Icon origin={reference.origin} />
                  <UpdateId {...reference} />
                </HStack>
              );
            })}
          </HStack>
        </VStack>
      </Accordion.ItemContent>
    </Accordion.Item>
  );
}

const styles = sva({
  slots: accordionAnatomy.extendWith("itemTitle").keys(),
  base: {
    item: {
      width: "full",
      border: "1px solid transparent",
      borderRadius: "sm",
      padding: "xs",
      _open: {
        borderColor: "interface.200",
      },
      _focusWithin: {
        borderColor: "interface.400",
      },
    },
    itemTitle: hstack.raw({}),
    itemTrigger: hstack.raw({
      outline: "none",
      width: "full",
      justifyContent: "space-between",
    }),
    itemIndicator: {
      _open: {
        transform: "rotate(180deg)",
      },
    },
    itemContent: {
      _open: {
        animation: "accordionIn 0.3s",
      },
      _closed: {
        animation: "accordionOut 0.3s",
      },
    },
  },
});
