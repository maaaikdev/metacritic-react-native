import {useEffect, useState} from 'react';
import { 
    StyleSheet,
    View, 
    ScrollView, 
    ActivityIndicator,
    FlatList,
    Pressable,
    Text
} from 'react-native';
import { Link } from 'expo-router';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';
//import { CircleInfoIcon } from './Icons';
import { Screen } from './Screen';


//Import Image
const icon = require('../assets/icon.png')

export function Main() {
	const [timesPressed, setTimesPressed] = useState(0);
	//To API
	const [ games, setGamnes ] = useState([]);
    const insets = useSafeAreaInsets();

	useEffect(() => {
		getLatestGames().then((games) => {
			setGamnes(games)
		})
	}, [])

	let textLog = '';
	if (timesPressed > 1) {
		textLog = timesPressed + 'x onPress';
	} else if (timesPressed > 0) {
		textLog = 'onPress';
	}
  	return (
        <Screen>     
            {games.length === 0 ? (
                <ActivityIndicator color={"#fff"} size={"large"}/>
            ) : (
                <FlatList 
                data={games}
                keyExtractor={(game) => game.slug}
                renderItem={({item, index}) => (
                    <AnimatedGameCard game={item} index={index}/>
                )}
                />
            )}		
        </Screen>
  	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 42,
	},
});