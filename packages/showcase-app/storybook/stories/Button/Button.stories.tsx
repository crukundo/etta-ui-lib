import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Text, Button } from '@ettawallet/react-native-kit';
import React from 'react';
import { ArtBoard } from '../ArtBoard';

storiesOf('Button', module)
  .addDecorator(getStory => <ArtBoard>{getStory()}</ArtBoard>)

  .add('Default', () => (
    <Button
      variant={select('variant', ['filled', 'outlined', 'text'], 'filled')}
      onPress={() => console.log('Ouch!')}
    >
      <Text fontWeight="bold" fontColor="light">
        This is a button
      </Text>
    </Button>
  ))
  .add('Clickable text', () => (
    <Button
      color="primary"
      variant="text"
      tone="orange"
      onPress={() => console.log('Clicked text buttton')}
    >
      <Text fontWeight="bold" fontColor="dark">
        I am a button too
      </Text>
    </Button>
  ))
  .add('Disabled', () => (
    <Button
      color="primary"
      variant="filled"
      tone="neutral4"
      onPress={() => console.log('Ouch, I am disabled!')}
    >
      <Text fontWeight="bold" fontColor="dark">
        A disabled button
      </Text>
    </Button>
  ));
