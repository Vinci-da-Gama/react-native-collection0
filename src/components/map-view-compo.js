import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import MapView from 'react-native-maps';

export class MapViewCompo extends Component {
	render() {
		return (
			<Text>
				Map view would be delay.
			</Text>
		)
	};
};
const mvStyle = StyleSheet.create({
	container: {
		flex: 1,// width: 100%; and height: 100%;
        	alignItems: 'stretch' // horizonal left, if flexDirection: column
    	},
    	mapContainer: {
		height: 400,
		marginTop: 80
    	}
});

export default MapViewCompo;
