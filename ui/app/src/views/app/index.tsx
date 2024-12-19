import { css } from "@impacts/styled-system/css";
import { VStack } from "@impacts/styled-system/jsx";
import { impactResultSchema } from "@impacts/types/results";
import { Fragment } from "react/jsx-runtime";
import { Card } from "../../components/Card";
import { Tabs } from "../../components/Tabs";

declare global {
  const result: string;
}

const parsed = impactResultSchema.safeParse(JSON.parse(result));

export function App() {
  if (!parsed.success) {
    return (
      <VStack
        backgroundColor="interface.100"
        padding="md"
        size="full"
        overflow="hidden"
      >
        <pre>{parsed.error.message}</pre>
      </VStack>
    );
  }

  return (
    <VStack
      backgroundColor="interface.100"
      padding="md"
      size="full"
      overflow="hidden"
    >
      <Tabs.Root
        lazyMount
        orientation="vertical"
        className={css({ size: "full" })}
        defaultValue={parsed.data.entrypoints[0].id}
      >
        {parsed.data.entrypoints.map((summary) => (
          <Fragment key={summary.id}>
            <Tabs.Trigger key={summary.id} value={summary.id}>
              {summary.description} ({Object.values(summary.updates).length})
            </Tabs.Trigger>
            <Tabs.Content key={summary.id} value={summary.id}>
              <VStack
                gap="xs"
                alignItems="start"
                color="interface.600"
                size="full"
              >
                {summary.updates
                  .sort((a, b) => b.timestamp - a.timestamp)
                  .map((update) => (
                    <Card key={update.main.id} {...update} />
                  ))}
              </VStack>
            </Tabs.Content>
          </Fragment>
        ))}
      </Tabs.Root>
    </VStack>
  );
}
