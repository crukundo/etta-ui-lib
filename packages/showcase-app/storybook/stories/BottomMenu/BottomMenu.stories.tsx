import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ArtBoard } from '../ArtBoard';
import { BottomMenu, Icon, Text, Button } from '@ettawallet/react-native-kit';
import styled from '@emotion/native';
import { Pressable } from 'react-native';

storiesOf('BottomMenu', module)
  .addDecorator(getStory => <ArtBoard>{getStory()}</ArtBoard>)
  .add('BottomMenu', () => (
    <Container>
      <Component />
    </Container>
  ));

const Component = () => {
  const [selected, setSelected] = React.useState(1);

  function renderText(text: string): React.ReactNode {
    return <Text typography={'sub'}>{text}</Text>;
  }

  return (
    <>
      <Text>Labelled with label prop</Text>
      <BottomMenu selected={selected} onSelect={value => setSelected(value)}>
        <BottomMenu.Item
          value={1}
          label={'Home'}
          icon={{
            type: 'filled',
            name: 'Home',
          }}
        />
        <BottomMenu.Item
          value={2}
          label={'Agenda'}
          icon={{
            type: 'font-awesome-5',
            name: 'calendar-alt',
          }}
        />
        <BottomMenu.Item
          value={3}
          label={'User'}
          icon={{
            type: 'font-awesome-5',
            name: 'user',
          }}
        />
        <BottomMenu.Item
          value={4}
          label={'???'}
          icon={{
            type: 'font-awesome-5',
            name: 'tachometer-alt',
          }}
        />
        <BottomMenu.Item
          value={5}
          label={'Menu'}
          icon={{
            type: 'font-awesome-5',
            name: 'bars',
          }}
        />
      </BottomMenu>

      <Text>Labelled with custom label element</Text>
      <BottomMenu selected={selected} onSelect={value => setSelected(value)}>
        <BottomMenu.Item
          value={1}
          labelElement={renderText('Home')}
          icon={{
            type: 'font-awesome-5',
            name: 'home',
          }}
        />
        <BottomMenu.Item
          value={2}
          labelElement={renderText('Agenda')}
          icon={{
            type: 'font-awesome-5',
            name: 'calendar-alt',
          }}
        />
        <BottomMenu.Item
          value={3}
          labelElement={renderText('User')}
          icon={{
            type: 'font-awesome-5',
            name: 'user',
          }}
        />
        <BottomMenu.Item
          value={4}
          labelElement={renderText('???')}
          icon={{
            type: 'font-awesome-5',
            name: 'tachometer-alt',
          }}
        />
      </BottomMenu>

      <Text>Icon only</Text>
      <BottomMenu selected={selected} onSelect={value => setSelected(value)}>
        <BottomMenu.Item
          value={1}
          icon={{
            type: 'font-awesome-5',
            name: 'home',
          }}
        />
        <BottomMenu.Item
          value={2}
          icon={{
            type: 'font-awesome-5',
            name: 'calendar-alt',
          }}
        />
        <BottomMenu.Item
          value={3}
          icon={{
            type: 'font-awesome-5',
            name: 'user',
          }}
        />
      </BottomMenu>

      <Text>Custom element</Text>
      <BottomMenu selected={selected} onSelect={value => setSelected(value)}>
        <BottomMenu.Item value={1}>
          <Pressable onPress={() => setSelected(1)}>
            <Text colorVariant={selected === 1 ? 'primary' : 'secondary'}>
              1
            </Text>
          </Pressable>
        </BottomMenu.Item>
        <BottomMenu.Item value={2}>
          <Pressable onPress={() => setSelected(2)}>
            <Text colorVariant={selected === 2 ? 'primary' : 'secondary'}>
              2
            </Text>
          </Pressable>
        </BottomMenu.Item>
      </BottomMenu>
    </>
  );
};

const Container = styled.View`
  justify-content: flex-end;
  height: 100%;
`;
