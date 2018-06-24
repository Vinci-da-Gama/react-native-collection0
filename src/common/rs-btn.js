import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon, Text } from 'native-base';

export default class RsBtn extends Component {
	render() {
		return (
			<Button style={rsbtnStyle.btn} onPress={this.props.onBtnPress}>
				<Text style={rsbtnStyle.btnText}>
					{this.props.bt}
				</Text>
			</Button>
		)
	}
};

const rsbtnStyle = StyleSheet.create({
	btn: {
		marginTop: 20
	},
	btnText: {
		flex: 1,
		fontSize: 20,
		alignSelf: 'center'
	}
});