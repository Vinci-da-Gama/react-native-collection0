import React, { Component } from 'react';
const formatTime = require('minutes-seconds-milliseconds');
import { Container, Header, Title, Content, Button, Footer, FooterTab, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeElapsed: null,
            running: false,
            startTime: null,
            laps: []
        };
    }
    render() {
        return (
            <Container style={clockStyle.container}>
                <Container style={[clockStyle.header]}>
                    <Container style={[clockStyle.timmerWrapper]}>
                        <Text style={{fontSize: 60}}>
                            { formatTime(this.state.timeElapsed) }
                        </Text>
                    </Container>
                    <Content contentContainerStyle={[clockStyle.btnWrapper]}>
                        <Grid style={[clockStyle.btnspace]}>
                            <Col style={[clockStyle.colvertical]}>
                                {this.startstopBtn()}
                            </Col>
                            <Col style={[clockStyle.colvertical]}>
                                {this.lapBtn()}
                            </Col>
                        </Grid>
                    </Content>
                </Container>
                <Container style={[clockStyle.footer]}>
                    { this.listLaps() }
                </Container>
                <Button onPress={this.resetContent.bind(this)} full success>
                    <Text>
                        Go Main-Time
                    </Text>
                </Button>
            </Container>
        )
    };
    startstopBtn() {
        if (this.state.running) {
            return <Button danger rounded style={[clockStyle.btnSelf]} onPress={ this.handleStartPress.bind(this) }>
                <Text>
                    Stop
                </Text>
            </Button>
        } else {
            return <Button success rounded style={[clockStyle.btnSelf]} onPress={ this.handleStartPress.bind(this) }>
                <Text>
                    Start
                </Text>
            </Button>
        }
    };
    lapBtn() {
        return <Button rounded style={[clockStyle.btnSelf]} onPress={ this.handlelaps.bind(this) }>
            <Text>
                Lap
            </Text>
        </Button>
    };
    handleStartPress() {
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({
                running: false
            })
            return;
        }

        this.setState({
            startTime: new Date()
        });
        this.interval = setInterval(() => {
            this.setState({
                timeElapsed: new Date() - this.state.startTime,
                running: true
            });
        }, 30);
    };
    handlelaps() {
        const lap = this.state.timeElapsed;

        this.setState({
            startTime: new Date(),
            laps: this.state.laps.concat([lap])
        });
    };
    listLaps() {
        return this.state.laps.map((time, idx) => {
            return <View style={[clockStyle.lapContainer]} key={ idx+1 }>
                <Text style={[clockStyle.lapText]}>
                    lap #{ idx + 1 }
                </Text>
                <Text style={[clockStyle.lapText]}>
                    { formatTime(time) }
                </Text>
            </View>
        });
    };
    resetContent() {
        const { navigate } = this.props.navigation;
        this.setState({
            timeElapsed: null,
            running: false,
            startTime: null,
            laps: []
        });
        navigate('MainTimeStack');
    }
};

const clockStyle = StyleSheet.create({
	container: {
		flex: 1,// width: 100%; and height: 100%;
        alignItems: 'stretch' // horizonal left, if flexDirection: column
    },
    header: {
        flex: 1
    },
    footer: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'blue'
    },
    timmerWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnWrapper: {
        flex: 1
    },
    btnspace: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    colvertical: {
        justifyContent: 'center'
    },
    btnSelf: {
        width: 76,
        height: 76,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    lapContainer: {
        height: 36,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    lapText: {
        fontSize: 30
    }
});

export default Clock;