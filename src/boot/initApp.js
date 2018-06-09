import React from 'react';
import { Root } from 'native-base';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import MainTime from '../screens/main-time';
import Settings from '../screens/settings';

const AppNavigator = createStackNavigator(
    {
		MainTimeStack: { screen: MainTime },
		SettingsStack: { screen: Settings }
    },
    {
		initialRouteName: 'MainTimeStack',
		headerMode: 'none',
		title: 'App_Main_Nav'
    }
);

export default () =>
	<Root>
		<AppNavigator />
	</Root>;
