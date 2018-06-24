import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Footer, FooterTab, Text } from 'native-base';

export default class FooterToMain extends Component {
	render() {
		return (
			<Footer>
				<FooterTab>
					<Button success onPress={() => this.props.navi('MainTimeStack')}>
						<Text style={footerStyle.textColor}>
							Main-Time
						</Text>
					</Button>
					<Button warning onPress={() => this.props.navi('SignInStack')}>
						<Text>
							Sign_In
						</Text>
					</Button>
					<Button danger onPress={() => this.props.navi('RegisterStack')}>
						<Text>
							Register
						</Text>
					</Button>
				</FooterTab>
			</Footer>
		)
	}
};

const footerStyle = StyleSheet.create({
	textColor: {
		color: '#c91867'
	}
});