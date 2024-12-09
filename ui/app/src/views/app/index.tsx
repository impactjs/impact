import { VStack } from "@impacts/styled-system/jsx";
import { Tabs } from "../../components/Tabs";
import { example } from "../../assets/example";
import { Fragment } from "react/jsx-runtime";
import { Card } from "../../components/Card";

export function App() {
  return (
    <VStack
      backgroundColor="interface.100"
      padding="md"
      size="full"
      overflow="hidden"
    >
      <Tabs.Root
        size="full"
        lazyMount
        orientation="vertical"
        defaultValue={example.entrypoints[0].id}
      >
        {example.entrypoints.map((summary) => (
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
