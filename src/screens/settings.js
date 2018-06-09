import React, { Component } from 'react';
// import { Text, View, Button } from 'react-native';
import { Container, Header, Title, Content, Button, Footer, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export class Settings extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Text>
                    Settings Screen
                </Text>
                <Button onPress={() => navigate('MainTimeStack')} full>
                    <Text>
                        Go Main-Time Screen
                    </Text>
                </Button>
            </Container>
        )
    }
};

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
    }
});

export default Settings;