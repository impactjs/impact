import { defineGlobalStyles } from "@pandacss/dev";

export const globalStyles = defineGlobalStyles({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },
  "#root": {
    backgroundColor: "var(--colors-interface-100)",
    height: "100vh",
    width: "100vw",
  },
  body: {
    position: "relative",
  },
  a: {
    textDecoration: "underline",
  },
  h1: {
    fontSize: "xl",
    fontWeight: "bold",
  },
  h2: {
    fontSize: "lg",
    fontWeight: "bold",
  },
  h3: {
    fontSize: "md",
    fontWeight: "bold",
  },
  h4: {
    fontSize: "sm",
    fontWeight: "bold",
  },
});
