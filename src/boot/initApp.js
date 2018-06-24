import React from 'react';
import { Root } from 'native-base';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Register from '../screens/signin-signup/register';
import SignIn from '../screens/signin-signup/signin';
import MainTime from '../screens/main-time';
import Clock from '../screens/clock-watch';
import GWmap from '../screens/gmap';

const AppNavigator = createStackNavigator(
    {
		RegisterStack: { screen: Register },
		SignInStack: { screen: SignIn },
		MainTimeStack: { screen: MainTime },
		ClockStack: { screen: Clock },
		GmapWeatherStack: { screen: GWmap }
    },
    {
		initialRouteName: 'SignInStack',
		// headerMode: 'none',
		title: 'App_Main_Nav'
    }
);

export default () =>
	<Root>
		<AppNavigator />
	</Root>;
