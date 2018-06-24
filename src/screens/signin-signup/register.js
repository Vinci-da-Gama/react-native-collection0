import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Label, Icon, Text } from 'native-base';
import Parse from 'parse/react-native';

import FooterToMain from '../../common/footerToMain';
import HeaderTitle from '../../common/header-title';
import RsBtn from '../../common/rs-btn';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			confirmPswd: '',
			pswdNoMatch: '',
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
								<Icon name="ios-add" />
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
								<Icon name="beer" />
								Password
							</Label>
							<Input 
								value={this.state.password}
								onChangeText={(pswd) => {
									this.setState({
										password: pswd
									})
								}}
							/>
						</Item>
						<Item floatingLabel last>
							<Label>
								<Icon name="people" />
								Confirm Password
							</Label>
							<Input 
								value={this.state.confirmPswd}
								onChangeText={(cpswd) => {
									this.setState({
										confirmPswd: cpswd
									})
								}}
							/>
						</Item>
						<Text>
							{ this.state.pswdNoMatch }
						</Text>
						<RsBtn bt={'Register'} onBtnPress={this.onRegister.bind(this)} />
					</Form>
					<Button bordered rounded onPress={() => navigate('SignInStack')}>
						<Icon name='cog' />
						<Text>
							Sign_In
						</Text>
					</Button>
				</Content>
                <FooterToMain navi={ navigate } />
			</Container>
		)
	};
	onRegister = () => {
        const { navigate } = this.props.navigation;

		if (this.state.password !== this.state.confirmPswd) {
			this.setState({
				pswdNoMatch: 'Your passwrods are not matched!!!'
			});
		} else {
			this.setState({
				pswdNoMatch: 'Your passwrods are matched'
			});
		}

		const user = new Parse.User();
		user.set("username", this.state.username);
		user.set("password", this.state.password);
		user.set("email", "randomEmail3@gmail.com");

		// other fields can be set just like with Parse.Object
		// user.set("phone", "415-392-0202");

		user.signUp(null, {
			success: (user) => {
				console.log('109 -- User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
				this.setState({
					username: '',
					password: '',
					confirmPswd: '',
					pswdNoMatch: '',
					errorMsg: ''
				});
				navigate('WelcomeStack');
			},
			error: (errData, error) => {
				// Show the error message somewhere and let the user try again.
				// It is likely that the user is trying to sign with a username or email already taken.
				console.error("114 -- Error: " + error.code + " " + error.message);
			}
		});
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