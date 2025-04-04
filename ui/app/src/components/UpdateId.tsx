import { styled } from "@impacts/styled-system/jsx";
import type {
  ImpactPluginResultEntry,
  ImpactPluginResultEntryReference,
} from "@impacts/types/results";
import { useMemo } from "react";

export function UpdateId(
  entry: ImpactPluginResultEntry | ImpactPluginResultEntryReference,
) {
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

  if ("url" in entry) {
    return (
      <styled.a href={entry.url} target="_blank" rel="noreferrer">
        {label}
      </styled.a>
    );
  }
  return <styled.span>{label}</styled.span>;
}
