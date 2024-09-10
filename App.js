import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Main } from './components/Main';

//Import Image
const icon = require('./assets/icon.png')

export default function App() {
	const [timesPressed, setTimesPressed] = useState(0);

	let textLog = '';
	if (timesPressed > 1) {
		textLog = timesPressed + 'x onPress';
	} else if (timesPressed > 0) {
		textLog = 'onPress';
	}
  	return (
		<SafeAreaProvider>
			<View style={styles.container}>				
				<StatusBar style="dark" />
				<Main />	
			</View>
		</SafeAreaProvider>		
  	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 12
	}
});
