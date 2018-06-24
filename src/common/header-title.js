import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Body, Text } from 'native-base';

export default class HeaderTitle extends Component {
	render() {
		return (
			<Header>
				<Body>
					<Title>
						<Text>
							{ this.props.titletext }
						</Text>
					</Title>
				</Body>
			</Header>
		)
	}
};

const headerStyle = StyleSheet.create({});