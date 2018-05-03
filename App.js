import moment, { weekdays } from 'moment';
import 'moment/min/moment-with-locales';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayItem from './src/day-item';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}>
					Hello World.
        		</Text>
				<Text>
					WeekDays:
        		</Text>
				{this.SevenDays()}
				<Text>
					Today is: {moment().format('dddd')}
				</Text>
			</View>
		);
	};

	SevenDays() {
		const WeekDays = [];
		for (let i = 0; i < 7; i++) {
			const day = moment().add(i, 'days').format('dddd');
			WeekDays.push(
				<DayItem key={i} theDay={day} />
			);
		}
		return WeekDays;
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,// width: 100%; and height: 100%;
		backgroundColor: '#fff',
		// flexDirection: 'row',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',// horizonal center, if flexDirection: column
		// alignItems: 'flex-start',// horizonal left, if flexDirection: column
		// justifyContent: 'flex-end'//vertical-align: bottom, if flexDirection: column
	},
	textStyle: {
		fontSize: 30
	}
});
