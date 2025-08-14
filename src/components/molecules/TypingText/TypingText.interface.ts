import { AnimationEvent, HTMLAttributes } from "react";

export type TypographyComponentProp =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "div";

export interface TypingTextProps {
  className: string;
  divProps?: HTMLAttributes<HTMLDivElement>;
  duration?: number;
  hideCursor?: boolean;
  layout?: "left" | "right";
  tag?: TypographyComponentProp;
  text: string;
  textProps?: AnimationEvent<HTMLSpanElement>;
}
