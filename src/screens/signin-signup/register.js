import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Form, Item, Input, Body, Label, Icon, Text } from 'native-base';
import FooterToMain from '../../common/footerToMain';
import HeaderTitle from '../../common/header-title';
import RsBtn from '../../common/rs-btn';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			errorMsg: ''
		};
	};
	render() {
        const { navigate } = this.props.navigation;
		return (
			<Container>
				<HeaderTitle titletext={'Register_Title'} />
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>
								Username
							</Label>
							<Input 
								value={this.state.username}
								onChangeText={(un) => {
									this.setState({
										username: un
									})
								}}
							/>
						</Item>
						<Item floatingLabel last>
							<Label>
								Username
							</Label>
							<Input 
								value={this.state.username}
								onChangeText={(un) => {
									this.setState({
										username: un
									})
								}}
							/>
						</Item>
					</Form>
				</Content>
                <FooterToMain navi={ navigate } />
			</Container>
		)
	}
};

const registerStyle = StyleSheet.create({
	input: {
		// padding: 4,
		height: 40,
		// borderColor: 'gray',
		// borderWidth: 1,
		// borderRadius: 5,
		// margin: 5,
		// width: 200,
		alignSelf: 'center'
	}
})