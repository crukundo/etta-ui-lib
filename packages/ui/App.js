import React from 'react';
import { lightTheme, ThemeProvider } from '@ettawallet/react-native-kit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SanityCheck from './src/screens/SanityCheckScreen';
import Backup from './src/screens/BackUpScreen';
import ImproveSecurity from './src/screens/ImproveSecurityScreen';
import FundWallet from './src/screens/FundWalletScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="SanityCheck" component={SanityCheck} />
          <Stack.Screen name="Backup" component={Backup} />
          <Stack.Screen name="ImproveSecurity" component={ImproveSecurity} />
          <Stack.Screen name="FundWallet" component={FundWallet} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
