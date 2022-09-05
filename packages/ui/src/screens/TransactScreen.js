import React, { useState } from 'react';
import { Text, IconTextButton } from '@ettawallet/react-native-kit';
import { View, StyleSheet } from 'react-native';
import VirtualKeyboard from 'react-native-virtual-keyboard';

const Transact = ({ navigation }) => {
  const [satsAmount, setSatsAmount] = useState(0);

  const updateAmount = newAmount => {
    setSatsAmount(newAmount);
  };
  return (
    <View style={styles.container}>
      <Text
        style={{ textAlign: 'center', marginBottom: 10 }}
        typography="h1"
        fontWeight="regular"
        fontColor="dark"
        fontStack="default" // should be mono. Fix error on numeric font fontFamily
      >
        {satsAmount} sats
      </Text>
      <VirtualKeyboard
        color="#48484a"
        pressMode="string"
        decimal="true"
        onPress={val => updateAmount(val)}
        rowStyle={{ marginTop: 50 }}
      />
      <View style={styles.btnGroup}>
        <IconTextButton
          style={styles.button}
          variant="filled"
          color="primary"
          tone="orange"
          size="small"
          label={'Request'}
        />
        <IconTextButton
          style={styles.button}
          variant="filled"
          color="primary"
          tone="neutral4"
          size="small"
          label={'Pay'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50, // kill this once we have headers
  },
  text: {
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 18,
    color: '#777777',
  },
  button: {
    minWidth: 150,
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default Transact;
