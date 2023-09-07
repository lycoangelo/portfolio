import Image from 'next/image';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS, BLOCKS, INLINES, Node } from '@contentful/rich-text-types';
import React, { forwardRef, LegacyRef, ReactNode } from 'react';

import { ContentBody, RichTextProps } from './RichText.interface';
import styles from './RichText.styles';

const richTextOptions = (content: ContentBody) => {
  const assetMap = new Map();
  content?.links?.assets?.block?.map((asset) =>
    assetMap.set(asset.sys.id, asset)
  );

  const inlineAssetMap = new Map();
  content?.links?.assets?.hyperlink?.map((link) =>
    inlineAssetMap.set(link.sys.id, link)
  );

  return {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => (
        <strong className={styles.strong}>{text}</strong>
      ),
      [MARKS.ITALIC]: (text: ReactNode) => (
        <em className={styles.em}>{text}</em>
      ),
      [MARKS.UNDERLINE]: (text: ReactNode) => (
        <u className={styles.u}>{text}</u>
      ),
      [MARKS.SUBSCRIPT]: (text: ReactNode) => (
        <sub className={styles.sub}>{text}</sub>
      ),
      [MARKS.SUPERSCRIPT]: (text: ReactNode) => (
        <sup className={styles.sup}>{text}</sup>
      )
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node: Node, children: ReactNode) => (
        <h1 className={styles.h1}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: Node, children: ReactNode) => (
        <h2 className={styles.h2}>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: Node, children: ReactNode) => (
        <h3 className={styles.h3}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: Node, children: ReactNode) => (
        <h4 className={styles.h4}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: Node, children: ReactNode) => (
        <h5 className={styles.h5}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: Node, children: ReactNode) => (
        <h6 className={styles.h6}>{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node: Node, children: ReactNode) => (
        <p className={styles.p}>{children}</p>
      ),
      [BLOCKS.LIST_ITEM]: (node: Node, children: ReactNode) => (
        <li>{children}</li>
      ),
      [BLOCKS.OL_LIST]: (node: Node, children: ReactNode) => (
        <ol className={styles.ol}>{children}</ol>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: ReactNode) => (
        <ul className={styles.ul}>{children}</ul>
      ),
      [BLOCKS.QUOTE]: (node: Node, children: ReactNode) => (
        <blockquote className={styles.blockquote}>{children}</blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const asset = assetMap.get(node.data.target.sys.id);

        return (
          asset && (
            <figure className={styles.figure}>
              <Image
                className={styles.image}
                src={asset.url}
                alt={asset.title}
                width={asset.width}
                height={asset.height}
              />
            </figure>
          )
        );
      },
      [BLOCKS.TABLE]: (node: Node, children: ReactNode) => (
        <table className={styles.table}>
          <tbody>{children}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (node: Node, children: ReactNode) => (
        <tr className={styles.tr}>{children}</tr>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node: Node, children: ReactNode) => (
        <th className={styles.th}>{children}</th>
      ),
      [BLOCKS.TABLE_CELL]: (node: Node, children: ReactNode) => (
        <td className={styles.td}>{children}</td>
      ),
      [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => (
        <a
          className={styles.a}
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    },
    renderText: (text: string) =>
      text
        .split('\n')
        .reduce((children: ReactNode[], textSegment: string, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, [])
  };
};

const RichText = forwardRef(
  ({ className = '', contentBody, options }: RichTextProps, ref) => {
    const renderOptions = options
      ? options(contentBody)
      : richTextOptions(contentBody);

    return (
      <div
        className={styles.richtext(className)}
        ref={ref as LegacyRef<HTMLDivElement>}
      >
        {documentToReactComponents(contentBody?.json, renderOptions)}
      </div>
    );
  }
);

RichText.displayName = 'RichText';

export default RichText;
