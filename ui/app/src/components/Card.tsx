import { VStack, HStack, styled } from "@impacts/styled-system/jsx";
import type { ImpactResultSummaryUpdate } from "@impacts/types/results";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { SeeMore } from "./SeeMore";
import { UpdateId } from "./UpdateId";

type CardProps = ImpactResultSummaryUpdate;

export function Card({ main, references, ...rest }: CardProps) {
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
          <SeeMore main={main} references={references} {...rest}>
            <Button variant="linear">See more</Button>
          </SeeMore>
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
