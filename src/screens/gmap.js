import React, { Component } from 'react';
// import MapView from 'react-native-maps';
import { Container, Content, Button, Footer, FooterTab, Body, View, Icon, Text } from 'native-base';
// import { Col, Row, Grid } from 'react-native-easy-grid';
import MapViewCompo from '../components/map-view-compo';
import { StyleSheet } from 'react-native';
import { getTodayWeatherNByLatLng } from '../crud/crud';

import FooterToMain from '../common/footerToMain';

export class GWmap extends Component {
    constructor(props) {
		super(props);
		this.state = {
			pin: {
				latitude: 0,
				longitude: 0
			},
			city: '',
			temperature: '',
			description: ''
		}
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={gwStyle.container}>
				<MapViewCompo style={gwStyle.mapContainer} />
                <Body>
					<Text>
						The default design is about using google map to change position, then pass lat and lng to getTodayWeatherNByLatLng function, then get weather, since google map is hard to applied, it would be later, then although it the onPositionChange for map would be applied still, But at this moment, we only detect weather for padstow station.
					</Text>
					<View style={gwStyle.textWrapper}>
						<Text style={gwStyle.text}>
							{this.state.city}
						</Text>
						<Text style={gwStyle.text}>
							{this.state.temperature}
						</Text>
						<Text style={gwStyle.text}>
							{this.state.description}
						</Text>
					</View>
					<Button onPress={this.onPositionChangedComplete.bind(this)}>
						<Icon name="book" style={gwStyle.iconStyle} />
						<Text>
							get Weather, del this btn later.
						</Text>
					</Button>
                </Body>
                <FooterToMain navi={ navigate } />
            </Container>
        )
	};
	// this function suppose to use in Map Component, Since map is delayed, then just applied it.
	// onPositionChangedComplete(region) {
	onPositionChangedComplete() {
		// padstow station:  lat: -33.874755, lng: 151.200889
		// when map works, region will has value, then use pass in value, otherwise, test padstow
		/* if (region !== null && region !== undefined && Object.keys(region).length > 1 && !isNaN(region.latitude) && !isNaN(region.longitude)) {
			this.setState({
				pin: {
					latitude: region.latitude,
					longitude: region.longitude
				}
			});
		} else {
			this.setState({
				pin: {
					latitude: -33.874755,
					longitude: 151.200889
				}
			});
		}; */
		this.setState({
			pin: {
				latitude: -33.874755,
				longitude: 151.200889
			}
		});
		getTodayWeatherNByLatLng(this.state.pin.latitude, this.state.pin.longitude)
		.then((res) => {
			this.setState(res);
		});
	}
};

const gwStyle = StyleSheet.create({
	container: {
		flex: 1,// width: 100%; and height: 100%;
        alignItems: 'stretch' // horizonal left, if flexDirection: column
    },
    mapContainer: {
        flex: 2
    },
    textWrapper: {
		flex: 1,
		alignItems: 'stretch',
		backgroundColor: '#6fa3f7'
    },
    text: {
		fontSize: 30,
		color: 'red'
    },
    iconStyle: {
        fontSize: 20,
        fontWeight: '600',
		color: 'orange'
	}
});

export default GWmap;