import moment, { weekdays } from 'moment';
import 'moment/min/moment-with-locales';
import { Container, Content, Button, Footer, FooterTab, Icon, Text, Header, Title } from 'native-base';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import DayItem from '../components/day-item';

export class MainTime extends Component {
	render() {
        const { navigate } = this.props.navigation;
		return (
			<Container style={styles.container}>
                <Header>
                    <Title>
                        Complete Tutorial -- later drawer navigation
                    </Title>
                </Header>
				<Content>
					<Text style={styles.textStyle}>
						MainTime&nbsp;&nbsp;&nbsp;
						<Icon name="ios-book" style={styles.iconStyle} />
					</Text>
					<Text>
						WeekDays:
					</Text>
					{this.SevenDays()}
					<Text>
						Today is: {moment().format('dddd')}
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
						<Button warning onPress={() => navigate('SignInStack')}>
							<Text>
								Sign_In
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
		);
	};
	SevenDays() {
		const WeekDays = [];
		for (let i = 1; i <= 7; i++) {
			const day = moment().add((i - 1), 'days').format('dddd');
			WeekDays.push(
				<DayItem key={i} dayIdx={i} theDay={day} />
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
		fontSize: 30,
		fontWeight: '900'
    },
    iconStyle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'orange'
	}
});

export default MainTime;
