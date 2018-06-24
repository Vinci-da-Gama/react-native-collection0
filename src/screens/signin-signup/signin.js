import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base';
import Parse from 'parse/react-native';
// import ParseReact from 'parse-react/react-native';

import FooterToMain from '../../common/footerToMain';
import RsBtn from '../../common/rs-btn';
import HeaderTitle from '../../common/header-title';

export default class SignIn extends Component {
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
				<HeaderTitle titletext={'Sign_In_Title'} />
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>
								<Icon active name='ios-checkmark-circle' />
								Username
							</Label>
							<Input value={this.state.username} 
								onChangeText={ (text) => {
									this.setState({username: text});
								}}
							/>
						</Item>
						<Item floatingLabel last>
							<Label>
								<Icon active name='swap' />
								Password
							</Label>
							<Input secureTextEntry={true} 
								value={this.state.password}
								onChangeText={(pswd) => {
									this.setState({
										password: pswd
									})
								}}
							/>
						</Item>
						<RsBtn bt={'Sign_In'} onBtnPress={this.onSignIn.bind(this)} />
					</Form>
					<Button bordered rounded onPress={() => navigate('RegisterStack')}>
						<Icon name='cog' />
						<Text>
							Go Register
						</Text>
					</Button>
				</Content>
                <FooterToMain navi={ navigate } />
			</Container>
		)
	};
	onSignIn = () => {
		const { navigate } = this.props.navigation;
		// username: tester0, passwored: abc123
		Parse.User.logIn(this.state.username, this.state.password, {
			success: (user) => {
				// Do stuff after successful login, like a redirect.
				console.log('71 -- ', user);
				this.setState({
					username: '',
					password: '',
					errorMsg: ''
				});
				navigate('WelcomeStack');
			},
			error: (errData, error) => {
				console.error("80 -- The login failed with error: " + error.code + " " + error.message);
			}
		});
	}
};

const signinStyle = StyleSheet.create({
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
});