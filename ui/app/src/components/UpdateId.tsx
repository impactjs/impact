import { styled } from "@impacts/styled-system/jsx";
import type { ImpactPluginResultEntry } from "@impacts/types/results";
import { useMemo } from "react";

export function UpdateId(entry: ImpactPluginResultEntry) {
  const label = useMemo(() => {
    switch (entry.origin) {
      case "github":
        return `(#${entry.id})`;
      case "linear":
        return `[${entry.id}]`;
      case "git":
        return `(${entry.id.toString().slice(0, 7)})`;
      default:
        return "";
    }
  }, [entry.origin, entry.id]);

  switch (entry.origin) {
    case "github":
    case "linear":
      return (
        <styled.a href={entry.url} target="_blank" rel="noreferrer">
          {label}
        </styled.a>
      );
    default:
      return <styled.span>{label}</styled.span>;
  }
}
