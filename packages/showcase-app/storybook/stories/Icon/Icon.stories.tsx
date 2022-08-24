import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { BitcoinCircle, Block } from '@ettawallet/rn-bitcoin-icons/dist/filled';
import {
  BitcoinCircle as BitcoinCircleOutline,
  Block as BlockOutline,
} from '@ettawallet/rn-bitcoin-icons/dist/outline';
import { ArtBoard } from '../ArtBoard';

storiesOf('Icon', module)
  .addDecorator(getStory => <ArtBoard>{getStory()}</ArtBoard>)

  .add('Filled', () => (
    <>
      <BitcoinCircle width={200} height={200} color="#000000" />
      <Block width={200} height={200} color="#000000" />
    </>
  ))
  .add('Outline', () => (
    <>
      <BitcoinCircleOutline width={200} height={200} color="#000000" />
      <BlockOutline width={200} height={200} color="#000000" />
    </>
  ));
