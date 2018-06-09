import React, { Component } from 'react';
import { Text } from 'react-native';

class DayItem extends Component {
	// state = {  }
	render() {
		return (
			<Text style={this.dynamicStyle()}>
				{this.props.theDay}
			</Text>
		);
	};
	dynamicStyle() {
		return {
			color: this.setColor(),
			fontWeight: this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		}
	};
	setColor() {
		const opacity = 1 / this.props.dayIdx;
		return `rgba(6,86,214,${opacity})`;
	};
	fontWeight() {
		const weight = 7 - (this.props.dayIdx - 1);
		return String(weight * 100);
	};
	fontSize() {
		return 50 - 4 * this.props.dayIdx;
	};
	lineHeight() {
		return 60 - 4 * this.props.dayIdx;
	};
}

export default DayItem;
