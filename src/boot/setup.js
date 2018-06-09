import * as Expo from "expo";
import React, { Component } from "react";
import { Container/*, StyleProvider*/ } from "native-base";

import InitApp from "./initApp";
/* Check this -- https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/CRNA/src/boot/setup.js */
// theme means custom defined components, Now donot has theme.
// import getTheme from "../theme/customCompos";
// once get theme, pass custom style to it
// import themeStyleVariable from "../theme/variables/commonColor";
// later add style={getTheme(themeStyleVariable)} to <StyleProvider>, if you want to apply.

export default class Setup extends Component {
	constructor() {
		super();
		this.state = {
			isReady: false
		};
	}
	componentWillMount() {
		this.loadFonts();
	}
	async loadFonts() {
		await Expo.Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
		});
		this.setState({
			isReady: true
		});
	}
	render() {
		if (!this.state.isReady) {
			return <Expo.AppLoading />;
		}
		return (
			<Container>
				<InitApp />
			</Container>
		);
	}
}