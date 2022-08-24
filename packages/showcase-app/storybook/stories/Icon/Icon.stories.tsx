import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { BitcoinCircle } from '@ettawallet/rn-bitcoin-icons/dist/filled';
import { ArtBoard } from '../ArtBoard';

storiesOf('Icon', module)
  .addDecorator(getStory => <ArtBoard>{getStory()}</ArtBoard>)

  .add('Filled', () => (
    <BitcoinCircle width={200} height={200} color="#000000" />
  ));
