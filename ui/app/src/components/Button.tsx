import { cva } from "@impact/styled-system/css";
import { styled } from "@impact/styled-system/jsx";

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
      },
    },
  },
});

export const Button = styled("button", styles);
