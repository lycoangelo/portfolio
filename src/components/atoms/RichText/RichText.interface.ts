import { Options } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

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
export interface RichTextProps {
  alignment?: 'Left' | 'Center';
  background?: 'White' | 'Black';
  contentBody: ContentBody;
  isDark?: boolean;
  isFull?: boolean;
  options?: (_args: ContentBody) => Options;
}
