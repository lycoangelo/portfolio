import { Options } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { HTMLAttributes, Ref } from 'react';

export interface ContentBody {
  json: Document;
  links?: {
    assets: {
      hyperlink?: {
        sys: {
          id: string;
        };
        url: string;
      }[];
      block: {
        sys: {
          id: string;
        };
        contentType?: string;
        url: string;
        title: string;
        description: string;
        width: number;
        height: number;
      }[];
    };
  };
}

export interface RichTextProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  contentBody: ContentBody;
  options?: (_args: ContentBody) => Options;
  ref?: Ref<HTMLDivElement>;
}
