import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ArtBoard } from '../ArtBoard';
import { BottomMenu, Icon, Text, Button } from '@ettawallet/react-native-kit';
import styled from '@emotion/native';
import { Pressable } from 'react-native';

storiesOf('BottomMenu', module)
  .addDecorator(getStory => <ArtBoard>{getStory()}</ArtBoard>)
  .add('BottomMenu', () => <Component />);

const Component = () => {
  const [selected, setSelected] = React.useState(1);

  function renderText(text: string): React.ReactNode {
    return <Text typography={'label'}>{text}</Text>;
  }

  return (
    <>
      <Text>Tab bar with labels</Text>
      <BottomMenu selected={selected} onSelect={value => setSelected(value)}>
        <BottomMenu.Item
          value={1}
          labelElement={renderText('Home')}
          icon={{
            name: 'icon-home',
            size: 'mega',
          }}
        />
        <BottomMenu.Item
          value={2}
          labelElement={renderText('Send')}
          icon={{
            name: 'icon-send',
            size: 'mega',
          }}
        />
        <BottomMenu.Item
          value={3}
          labelElement={renderText('Receive')}
          icon={{
            name: 'icon-receive',
            size: 'mega',
          }}
        />
        <BottomMenu.Item
          value={4}
          labelElement={renderText('Settings')}
          icon={{
            name: 'icon-gear',
            size: 'mega',
          }}
        />
      </BottomMenu>
    </>
  );
};

const Container = styled.View`
  justify-content: center;
  height: 100%;
`;
