import { Link, Slot, Stack } from 'expo-router'
import { View, Text, Pressable } from 'react-native';
import { Logo } from '../components/Logo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout(){
    return (
        <View className="flex-1 bg-black">
            {/* <Slot /> */}
            <Stack 
                screenOptions={{
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "yellow",
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                    headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable>                    
                                {/* <CircleInfoIcon /> */}
                                <FontAwesome name="info-circle" size={24} color="white"/>
                                {/* <Text className='text-white'>Ir about</Text> */}
                            </Pressable>
                        </Link>
                    )
                }}
            />
        </View>
    )
}