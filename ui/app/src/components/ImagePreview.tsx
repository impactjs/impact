import { Dialog, Portal } from "@ark-ui/react";
import { sva } from "@impacts/styled-system/css";
import { Eye } from "lucide-react";
import type { ComponentProps } from "react";

type ImagePreviewProps = ComponentProps<"img">;

export function ImagePreview(props: ImagePreviewProps) {
  const classes = styles();
  return (
    <div className={classes.root}>
      <img {...props} alt={props.alt} className={classes.image} />
      <Dialog.Root>
        <Dialog.Trigger className={classes.trigger}>
          <Eye />
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop className={classes.backdrop} />
          <Dialog.Positioner className={classes.positioner}>
            <Dialog.Content className={classes.content}>
              <img
                {...props}
                alt={props.alt}
                className={classes.imagePreview}
              />
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  );
}

const styles = sva({
  slots: [
    "root",
    "image",
    "imagePreview",
    "trigger",
    "content",
    "positioner",
    "backdrop",
  ],
  base: {
    root: {
      position: "relative",
      width: "fit-content",
      overflow: "hidden",
    },
    positioner: {
      top: "0",
      left: "0",
      position: "fixed",
      inset: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      maxHeight: "400px",
      objectFit: "contain",
      borderRadius: "md",
      height: "100%",
    },
    trigger: {
      position: "absolute",
      top: "xs",
      right: "xs",
      padding: "xs",
      backgroundColor: "interface.700",
      color: "interface.100",
      borderRadius: "md",
    },
    backdrop: {
      inset: "0",
      position: "fixed",
      size: "full",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      padding: "xs",
      borderRadius: "md",
      maxWidth: "80%",
    },
    imagePreview: {},
  },
});
