import React from 'react';

import { INLINE_STYLE, BLOCK_TYPE, ENTITY_TYPE } from '../../lib';

import DocumentSource from '../sources/DocumentSource';
import LinkSource from '../sources/LinkSource';
import ImageSource from '../sources/ImageSource';
// // import EmbedSource from '../sources/EmbedSource';

import Link from '../entities/Link';
import Document from '../entities/Document';

// import EmbedBlock from '../blocks/EmbedBlock';
import ImageBlock from '../blocks/ImageBlock';

import FontIcon from '../components/FontIcon';

export const DOCUMENT_ICON = <FontIcon icon="document" />;
export const EMBED_ICON = <FontIcon icon="embed" />;

export const BR_ICON =
    'M.436 633.471l296.897-296.898v241.823h616.586V94.117h109.517v593.796H297.333v242.456z';

export const INLINE_CONTROL = {
    BOLD: { type: INLINE_STYLE.BOLD, },
    ITALIC: { type: INLINE_STYLE.ITALIC, },
    UNDERLINE: { type: INLINE_STYLE.UNDERLINE, },
    STRIKETHROUGH: { type: INLINE_STYLE.STRIKETHROUGH, },
    MARK: { type: INLINE_STYLE.MARK, },
    QUOTATION: { type: INLINE_STYLE.QUOTATION, },
};

export const BLOCK_CONTROL = {
    // UNSTYLED: { type: BLOCK_TYPE.UNSTYLED },
    // HEADER_ONE: { type: BLOCK_TYPE.HEADER_ONE },
    // HEADER_TWO: { type: BLOCK_TYPE.HEADER_TWO },
    // HEADER_THREE: { type: BLOCK_TYPE.HEADER_THREE },
    // HEADER_FOUR: { type: BLOCK_TYPE.HEADER_FOUR },
    // HEADER_FIVE: { type: BLOCK_TYPE.HEADER_FIVE },
    // HEADER_SIX: { type: BLOCK_TYPE.HEADER_SIX },
    UNORDERED_LIST_ITEM: { type: BLOCK_TYPE.UNORDERED_LIST_ITEM, },
    ORDERED_LIST_ITEM: { type: BLOCK_TYPE.ORDERED_LIST_ITEM, },
    BLOCKQUOTE: { type: BLOCK_TYPE.BLOCKQUOTE, },
    CODE: { type: BLOCK_TYPE.CODE },
};

export const ENTITY_CONTROL = {
    LINK: {
        type: ENTITY_TYPE.LINK,
        // icon: '#icon-link',
        source: LinkSource,
        decorator: Link,
        attributes: ['url'],
        whitelist: {
            href: '^(?![#/])',
        },
    },
    IMAGE: {
        type: ENTITY_TYPE.IMAGE,
        description: 'Image',
        // icon: '#icon-image',
        source: ImageSource,
        block: ImageBlock,
        attributes: ['src', 'alt'],
        whitelist: {
            src: '^(?!(data:|file:))',
        },
    },
    // EMBED: {
    //     type: 'EMBED',
    //     description: 'Embed',
    //     icon: EMBED_ICON,
    //     source: EmbedSource,
    //     block: EmbedBlock,
    //     attributes: ['url', 'title', 'thumbnail'],
    // },

    DOCUMENT: {
        type: 'DOCUMENT',
        icon: DOCUMENT_ICON,
        description: 'Document',
        source: DocumentSource,
        decorator: Document,
        attributes: ['url'],
    },
};
