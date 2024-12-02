import reactGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import ReactMarkdown from "react-markdown";

const remarkPlugins = [reactGfm];

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={remarkPlugins}>{children}</ReactMarkdown>
  );
}
