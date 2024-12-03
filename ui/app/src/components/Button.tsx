import { cva } from "@impacts/styled-system/css";
import { styled } from "@impacts/styled-system/jsx";

const styles = cva({
  base: {
    padding: "xs",
    borderRadius: "sm",
    cursor: "pointer",
    border: "none",
    outline: "none",
  },
  variants: {
    variant: {
      linear: {
        backgroundColor: "inherit",
        color: "interface.600",
        border: "1px solid token(colors.interface)",
        transition: "all 0.2s",
        _hover: {
          scale: "1.05",
          boxShadow: "sm",
        },
      },
    },
  },
});

export const Button = styled("button", styles);
