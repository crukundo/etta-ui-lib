import { storiesOf } from '@storybook/react-native';
import { ScrollView } from 'react-native';
import React from 'react';
import { BitcoinCircle, Block } from '@ettawallet/rn-bitcoin-icons/dist/filled';
import { Icon } from '@ettawallet/react-native-kit';
import {
  BitcoinCircle as BitcoinCircleOutline,
  Block as BlockOutline,
} from '@ettawallet/rn-bitcoin-icons/dist/outline';
import { ArtBoard } from '../ArtBoard';
import glyphMap from '@ettawallet/rn-bitcoin-icons/src/static/unicodesMap.json';
import styled from '@emotion/native';

const IconWrapper = styled.View<Partial<any>>`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

storiesOf('Icon', module)
  .addDecorator(getStory => (
    <ScrollView>
      <ArtBoard>{getStory()}</ArtBoard>
    </ScrollView>
  ))

  .add('Default', () => <Icon name="icon-bitcoin-circle-2" size="mega" />)

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
  ))

  .add('All Icons', () => {
    return (
      <>
        <IconWrapper>
          {Object.keys(glyphMap).map((icon, i) => (
            <>
              <Icon style={{ flexBasis: '20%' }} name={icon} size="mega" />
            </>
          ))}
        </IconWrapper>
      </>
    );
  });
