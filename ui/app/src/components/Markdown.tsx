import ReactMarkdown from "react-markdown";
import reactGfm from "remark-gfm";

const remarkPlugins = [reactGfm];

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={remarkPlugins}>{children}</ReactMarkdown>
  );
}
