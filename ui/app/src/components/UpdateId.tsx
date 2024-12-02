import { styled } from "@impacts/styled-system/jsx";
import type { ImpactPluginResultEntry } from "@impacts/types/results";
import { useMemo } from "react";

export function UpdateId({ origin, id, url }: ImpactPluginResultEntry) {
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
