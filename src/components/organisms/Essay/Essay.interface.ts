import { Document } from "@contentful/rich-text-types";
import { HTMLAttributes, Ref } from "react";

export interface EssayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  essay: {
    json: Document;
  };
  ref?: Ref<HTMLDivElement>;
}
