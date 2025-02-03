import { css } from "@impacts/styled-system/css";
import ReactMarkdown from "react-markdown";
import reactGfm from "remark-gfm";
import { ImagePreview } from "./ImagePreview";

const remarkPlugins = [reactGfm];

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        img: ImagePreview,
      }}
      remarkPlugins={remarkPlugins}
      className={markdownCss}
    >
      {children}
    </ReactMarkdown>
  );
}

const markdownCss = css({
  "& h1": {
    fontSize: "lg",
    fontWeight: "bold",
  },
  "& h2": {
    fontSize: "md",
    fontWeight: "bold",
  },
  "& h3": {
    fontSize: "sm",
    fontWeight: "bold",
  },
  "& p": {
    marginBottom: "1em",
    lineHeight: 1.5,
    fontSize: "xs",
  },
  "& a": {
    color: "interface.700",
  },
  "& hr": {
    marginBlockStart: "md",
    marginBlockEnd: "md",
  },
  "& code": {
    fontSize: "xs",
    color: "interface.700",
    padding: "xs",
    borderRadius: "sm",
    backgroundColor: "interface.200",
    border: "1px solid interface.300",
  },
  "& pre": {
    marginBottom: "1em",
    padding: "sm",
    borderRadius: "sm",
    backgroundColor: "interface.200",
    border: "1px solid interface.300",
  },
  "& ul": {
    paddingLeft: "md",
  },
  "& ol": {
    paddingLeft: "md",
  },
  "& li": {
    lineHeight: 1.5,
    fontSize: "xs",
  },
  "& ol > li": {
    _marker: {
      content: "counter(list-item) '.'",
      color: "interface.700",
    },
  },
  "& blockquote": {
    padding: "md",
    borderLeft: "4px solid interface.200",
    backgroundColor: "interface.100",
  },
});
