import { VStack, HStack, styled } from "@impact/styled-system/jsx";
import type {
  ImpactPluginResultEntry,
  ImpactResultSummaryUpdate,
} from "@impact/types/results";
import { flex } from "@impact/styled-system/patterns";
import Markdown from "react-markdown";
import TruncatedSection from "./Truncate";
import reactGfm from "remark-gfm";
import { useMemo } from "react";
import { Icon } from "./Icon";
import { Button } from "./Button";

type CardProps = ImpactResultSummaryUpdate;

function UpdateId({ origin, id, url }: ImpactPluginResultEntry) {
  const label = useMemo(() => {
    switch (origin) {
      case "github":
        return `(#${id})`;
      case "linear":
        return `[${id}]`;
      case "git":
        return `(${id.toString().slice(0, 7)})`;
      default:
        return "";
    }
  }, [origin, id]);

  if (url) {
    return (
      <styled.a href={url} target="_blank" rel="noreferrer">
        {label}
      </styled.a>
    );
  }
  return <styled.span>{label}</styled.span>;
}

export function Card({ main, references }: CardProps) {
  return (
    <VStack
      gap="xs"
      alignItems="start"
      width="full"
      border="1px solid token(colors.interface)"
      borderRadius="sm"
      padding="sm"
    >
      <VStack width="full" alignItems="start">
        <HStack>
          <Icon origin={main.origin} />
          <styled.span fontWeight="bold">
            {main.title} <UpdateId {...main} />
          </styled.span>
        </HStack>
        <HStack width="full" justifyContent="space-between">
          <Button variant="linear">See more</Button>
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
        </HStack>
      </VStack>
    </VStack>
  );
}
