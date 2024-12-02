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
  a: {
    textDecoration: "underline",
  },
});
