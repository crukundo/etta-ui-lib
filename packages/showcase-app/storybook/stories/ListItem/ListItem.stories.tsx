import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { ArtBoard } from '../ArtBoard';
import {
  Text,
  Switch,
  ListSection,
  ListSubheader,
  ListItem,
  ListIcon,
  Divider,
} from '@ettawallet/react-native-kit';

const renderDivider = () => <Divider linePosition="bottom" />;

storiesOf('ListItem', module)
  .addDecorator(getStory => <ArtBoard>{getStory()}</ArtBoard>)

  .add('Lists (Lined)', () => (
    <ScrollView>
      <ListSection>
        <ListSubheader>Single line</ListSubheader>
        <ListItem
          left={props => <ListIcon {...props} icon="icon-block-2" />}
          title="List item 1"
        />
        <ListItem
          left={props => <ListIcon {...props} icon="icon-bitcoin-circle-2" />}
          title="List item 2"
        />
        <ListItem
          title="List item 3"
          left={props => <ListIcon {...props} icon="icon-clock-2" />}
          right={props => <ListIcon {...props} icon="icon-copy" />}
        />
      </ListSection>
      <Divider linePosition="bottom" />
      <ListSection>
        <ListSubheader>Two line list</ListSubheader>
        <ListItem
          left={props => <ListIcon {...props} icon="icon-clock-2" />}
          title="List item 1"
          description="Describes item 1"
        />
        <ListItem
          left={props => <ListIcon {...props} icon="icon-clock-2" />}
          right={props => <ListIcon {...props} icon="icon-bitcoin-circle-2" />}
          title="List item 2"
          description="Describes item 2"
        />
      </ListSection>
      <Divider linePosition="bottom" />
      <ListSection>
        <ListSubheader>Three line list</ListSubheader>
        <ListItem
          left={props => <ListIcon {...props} icon="icon-clock-2" />}
          title="List item 1"
          description="Describes item 1. Example of a very very long description."
        />
        <ListItem
          left={props => <ListIcon {...props} icon="icon-clock-2" />}
          right={props => <ListIcon {...props} icon="icon-gear" />}
          title="List item 2"
          description="Describes item 2. Example of a very very long description."
        />
      </ListSection>
    </ScrollView>
  ));
