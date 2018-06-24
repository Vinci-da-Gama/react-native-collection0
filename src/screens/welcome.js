import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Footer, FooterTab, Text } from 'native-base';
import Parse from 'parse/react-native';

export default class WelcomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currUser: ''
		};
	};
	componentWillMount = () => {
		Parse.User.currentAsync()
		.then((user) => {
			console.log('16 -- user: ', user);
			this.setState({
				currUser: user.id
			});
		});
	};
	render() {
		if (!this.state.currUser) {
			return <Text>Loading...</Text>
		}
		const { navigate } = this.props.navigation;
		const currentUser = this.state.currUser;
		
		return (
			<Container>
				<Content>
					<Text>Welcome Back! userid is: { this.state.currUser }</Text>
					<Text>
						Check here for Query User name -- https://www.back4app.com/docs/parse-server-live-query-example
					</Text>
				</Content>
				<Footer>
					<FooterTab>
						<Button onPress={() => navigate('ClockStack')}>
							<Text>
								Set_Time
							</Text>
						</Button>
						<Button info onPress={() => navigate('GmapWeatherStack')}>
							<Text>
								GMap_N_Weather
							</Text>
						</Button>
						<Button warning onPress={() => navigate('MainTimeStack')}>
							<Text>
								Main_Time
							</Text>
						</Button>
						<Button danger onPress={() => navigate('RegisterStack')}>
							<Text>
								Register
							</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		)
	}
}

const welcomeStyel = StyleSheet.create({

})
