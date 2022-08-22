import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ArtBoard } from '../ArtBoard';
import { Text } from '@ettawallet/react-native-kit';
import { StyleSheet, ScrollView } from 'react-native';

const lightPrimaryColors = {
  orange: '#F7931A',
  red: '#EB5757',
  green: '#27AE60',
  blue: '#2D9CDB',
  purple: '#BB6BD9',
};

const lightNeutralColors = {
  white: '#FFFFFF',
  neutral1: '#F8F8F8',
  neutral2: '#F4F4F4',
  neutral3: '#EDEDED',
  neutral4: '#DEDEDE',
  neutral5: '#BBBBBB',
  neutral6: '#999999',
  neutral7: '#777777',
  neutral8: '#404040',
  black: '#000000',
};

const darkPrimaryColors = {
  orange: '#F89B2A',
  red: '#EC6363',
  green: '#36B46B',
  blue: '#3CA3DE',
  purple: '#C075DC',
};

const darkNeutralColors = {
  black: '#000000',
  neutral1: '#1A1A1A',
  neutral2: '#2D2D2D',
  neutral3: '#444444',
  neutral4: '#5C5C5C',
  neutral5: '#787878',
  neutral6: '#949494',
  neutral7: '#B0B0B0',
  neutral8: '#CCCCCC',
  white: '#FFFFFF',
};

// Light theme
const mappedLightPrimaryColors = Object.entries(lightPrimaryColors);
const mappedLightNeutralColors = Object.entries(lightNeutralColors);

// Dark theme
const mappedDarkPrimaryColors = Object.entries(darkPrimaryColors);
const mappedDarkNeutralColors = Object.entries(darkNeutralColors);

storiesOf('Themed Palettes', module)
  .addDecorator(getStory => (
    <ScrollView>
      <ArtBoard>{getStory()}</ArtBoard>
    </ScrollView>
  ))

  .add('Light theme primary', () =>
    React.Children.toArray(
      mappedLightPrimaryColors.map(([key, value]) => (
        <>
          <ArtBoard backgroundColor={value}></ArtBoard>
          <Text style={styles.colorText} fontWeight="regular" fontColor="dark">
            {key}: {value}
          </Text>
        </>
      ))
    )
  )

  .add('Light theme neutral', () =>
    React.Children.toArray(
      mappedLightNeutralColors.map(([key, value]) => (
        <>
          <ArtBoard key={key} backgroundColor={value}></ArtBoard>
          <Text style={styles.colorText} fontWeight="regular" fontColor="dark">
            {key}: {value}
          </Text>
        </>
      ))
    )
  )

  .add('Dark theme primary', () =>
    React.Children.toArray(
      mappedDarkPrimaryColors.map(([key, value]) => (
        <>
          <ArtBoard key={key} backgroundColor={value}></ArtBoard>
          <Text style={styles.colorText} fontWeight="regular" fontColor="dark">
            {key}: {value}
          </Text>
        </>
      ))
    )
  )

  .add('Dark theme neutral', () =>
    React.Children.toArray(
      mappedDarkNeutralColors.map(([key, value]) => (
        <>
          <ArtBoard key={key} backgroundColor={value}></ArtBoard>
          <Text style={styles.colorText} fontWeight="regular" fontColor="dark">
            {key}: {value}
          </Text>
        </>
      ))
    )
  );

const styles = StyleSheet.create({
  colorText: {
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
});
