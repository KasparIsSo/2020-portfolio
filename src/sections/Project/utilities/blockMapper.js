import React from 'react';

import {
  blockEnum,
  blockSplitSubtypeEnum,
  blockTextSubtypeEnum,
  blockImageSubtypeEnum,
  blockListSubtypeEnum,
  blockQuoteSubtypeEnum,
} from '../enums';
import {
  BlockImageCallout,
  BlockImageFull,
  BlockImageHalf,
  BlockListFull,
  BlockListHalf,
  BlockQuoteFull,
  BlockSplitPrimary,
  BlockSplitSecondary,
  BlockTextFull,
  BlockTextHalf,
  BlockWrapper,
} from '../components';

export function BlockMapper({ blocks, Wrapper = null }) {
  if (Wrapper) {
    return <Wrapper>{mapBlocks()}</Wrapper>;
  }
  return <BlockWrapper>{mapBlocks()}</BlockWrapper>;

  function mapBlocks() {
    return blocks.map((block, index) => {
      const Block = determineBlock(block.type, block.subtype);
      return <Block key={index} content={block.content} />;
    });
  }

  function determineBlock(blockType, blockSubtype) {
    switch (blockType) {
      case blockEnum.SPLIT:
        if (blockSubtype === blockSplitSubtypeEnum.PRIMARY) {
          return BlockSplitPrimary;
        } else if (blockSubtype === blockSplitSubtypeEnum.SECONDARY) {
          return BlockSplitSecondary;
        } else {
          return;
        }
      case blockEnum.TEXT:
        if (blockSubtype === blockTextSubtypeEnum.FULL) {
          return BlockTextFull;
        } else if (blockSubtype === blockTextSubtypeEnum.HALF) {
          return BlockTextHalf;
        } else {
          return;
        }
      case blockEnum.IMAGE:
        if (blockSubtype === blockImageSubtypeEnum.FULL) {
          return BlockImageFull;
        } else if (blockSubtype === blockImageSubtypeEnum.HALF) {
          return BlockImageHalf;
        } else if (blockSubtype === blockImageSubtypeEnum.CALLOUT) {
          return BlockImageCallout;
        } else {
          return;
        }
      case blockEnum.LIST:
        if (blockSubtype === blockListSubtypeEnum.FULL) {
          return BlockListFull;
        } else if (blockSubtype === blockListSubtypeEnum.HALF) {
          return BlockListHalf;
        } else {
          return;
        }
      case blockEnum.QUOTE:
        if (blockSubtype === blockQuoteSubtypeEnum.FULL) {
          return BlockQuoteFull;
        } else if (blockSubtype === blockQuoteSubtypeEnum.HALF) {
          return BlockQuoteFull;
        } else {
          return;
        }
      default:
        break;
    }
  }
}
