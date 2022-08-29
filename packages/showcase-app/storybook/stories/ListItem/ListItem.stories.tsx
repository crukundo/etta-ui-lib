import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { ArtBoard } from '../ArtBoard';
import {
  Text,
  Switch,
  ListItem,
  ListItemFeedback,
  Divider,
} from '@ettawallet/react-native-kit';
import { data } from './stories.data';

storiesOf('ListItem', module)
  .addDecorator(getStory => <ArtBoard>{getStory()}</ArtBoard>)

  .add('Selection Feedback', () => <SelectionFeedback />)

  .add('With Dividers', () => <ListWithDividers />)

  .add('Feedback Ripple', () => (
    <ArtBoard>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            feedback="ripple"
            onPress={() => console.log('I was pressed')}
          >
            <View style={{ padding: 16 }}>
              <Text>{item.title}</Text>
            </View>
          </ListItem>
        )}
      />
    </ArtBoard>
  ));

export const SelectionFeedback = () => {
  const [check, setCheck] = useState(false);

  const renderItem = ({ item }) => {
    const listItemProps = {
      feedback: 'selection' as ListItemFeedback,
      selected: item.key === check,
      ...(item.unreleased ? {} : { onPress: () => setCheck(item.key) }),
    };

    return (
      <ListItem {...listItemProps}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}
        >
          <Text>{item.title}</Text>
          <Switch active={check} onChange={setCheck} />
        </View>
      </ListItem>
    );
  };

  return (
    <ArtBoard>
      <FlatList
        ItemSeparatorComponent={Divider}
        data={data}
        renderItem={renderItem}
        extraData={check}
      />
    </ArtBoard>
  );
};

export const ListWithDividers = () => {
  const renderExtraInfo = extraInfo => {
    if (!extraInfo) return null;

    const extraInfoData = Object.keys(extraInfo).map((item, index) => (
      <View key={extraInfo[item].key} style={{ backgroundColor: '#fafafa' }}>
        <ListItem>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 32,
              paddingVertical: 16,
            }}
          >
            <Text>{item}</Text>
            <Text>{extraInfo[item]}</Text>
          </View>
        </ListItem>
        {index < Object.keys(extraInfo).length - 1 ? (
          <Divider linePosition="bottom" />
        ) : null}
      </View>
    ));

    return extraInfoData;
  };

  return (
    <ArtBoard>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <FlatList
          ItemSeparatorComponent={Divider}
          data={data}
          renderItem={({ item }) => (
            <>
              <ListItem onPress={() => console.log('I was pressed')}>
                <View style={{ padding: 16 }}>
                  <Text>{item.title}</Text>
                </View>
              </ListItem>
              {renderExtraInfo(item.extraInfo)}
            </>
          )}
        />
      </View>
    </ArtBoard>
  );
};
