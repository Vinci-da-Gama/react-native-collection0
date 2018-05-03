import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#0000FF'
	}
});

class DayItem extends Component {
	// state = {  }
	render() {
		return (
			<Text style={styles.day}>
				{this.props.theDay}
			</Text>
		);
	}
}

export default DayItem;
