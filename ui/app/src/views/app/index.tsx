import { HStack, styled, VStack } from "@impacts/styled-system/jsx";
import { sva } from "@impacts/styled-system/css";
import { Tabs } from "../../components/Tabs";
import { example } from "../../assets/example";
import { flex } from "@impacts/styled-system/patterns";
import { Fragment } from "react/jsx-runtime";
import { FaGithub, FaGitAlt } from "react-icons/fa"; // Import specific icons
import { SiLinear } from "react-icons/si"; // For Linear
import Markdown from "react-markdown";
import TruncatedSection from "../../components/Truncate";
import reactGfm from "remark-gfm";
import { Card } from "../../components/Card";

function Icon({ icon }: { icon: string }) {
  switch (icon) {
    case "github":
      return <FaGithub />;
    case "git":
      return <FaGitAlt />;
    case "linear":
      return <SiLinear />;
    default:
      return null;
  }
}

function renderId(origin: string, id: string | number) {
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
}

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

const styles = sva({
  slots: ["root", "title"],
  base: {},
});
