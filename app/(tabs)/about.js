import { ScrollView, Text, Pressable } from "react-native";
import { Link } from 'expo-router';
import { HomeIcon } from '../../components/Icons'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Screen } from "../../components/Screen";

export default function About() {
    return (
        <Screen>
            <ScrollView>
                <Link asChild href="/">
                    <Pressable>
                        {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} /> }
                        <FontAwesome name="home" size={24} color="white" />
                        <Text className='text-white'>Ir al home</Text>
                    </Pressable>
                </Link>
                <Text className="text-white font-bold mb-8 text-2xl">Sobre el proyecto</Text>
                <Text className="text-white text-white/90 mb-4">
                    Sed in est ut ipsum pulvinar mollis a quis dui. Aenean fringilla vehicula tortor et fermentum. Donec feugiat nisi et ultricies tristique. Maecenas fermentum vehicula ante, nec molestie urna egestas sit amet. Pellentesque facilisis vel ligula sed venenatis. Praesent et est ornare, vulputate erat sit amet, ultricies magna. Morbi quis dapibus ex.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Sed in est ut ipsum pulvinar mollis a quis dui. Aenean fringilla vehicula tortor et fermentum. Donec feugiat nisi et ultricies tristique. Maecenas fermentum vehicula ante, nec molestie urna egestas sit amet. Pellentesque facilisis vel ligula sed venenatis. Praesent et est ornare, vulputate erat sit amet, ultricies magna. Morbi quis dapibus ex.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Sed in est ut ipsum pulvinar mollis a quis dui. Aenean fringilla vehicula tortor et fermentum. Donec feugiat nisi et ultricies tristique. Maecenas fermentum vehicula ante, nec molestie urna egestas sit amet. Pellentesque facilisis vel ligula sed venenatis. Praesent et est ornare, vulputate erat sit amet, ultricies magna. Morbi quis dapibus ex.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Sed in est ut ipsum pulvinar mollis a quis dui. Aenean fringilla vehicula tortor et fermentum. Donec feugiat nisi et ultricies tristique. Maecenas fermentum vehicula ante, nec molestie urna egestas sit amet. Pellentesque facilisis vel ligula sed venenatis. Praesent et est ornare, vulputate erat sit amet, ultricies magna. Morbi quis dapibus ex.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Sed in est ut ipsum pulvinar mollis a quis dui. Aenean fringilla vehicula tortor et fermentum. Donec feugiat nisi et ultricies tristique. Maecenas fermentum vehicula ante, nec molestie urna egestas sit amet. Pellentesque facilisis vel ligula sed venenatis. Praesent et est ornare, vulputate erat sit amet, ultricies magna. Morbi quis dapibus ex.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Sed in est ut ipsum pulvinar mollis a quis dui. Aenean fringilla vehicula tortor et fermentum. Donec feugiat nisi et ultricies tristique. Maecenas fermentum vehicula ante, nec molestie urna egestas sit amet. Pellentesque facilisis vel ligula sed venenatis. Praesent et est ornare, vulputate erat sit amet, ultricies magna. Morbi quis dapibus ex.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Sed in est ut ipsum pulvinar mollis a quis dui. Aenean fringilla vehicula tortor et fermentum. Donec feugiat nisi et ultricies tristique. Maecenas fermentum vehicula ante, nec molestie urna egestas sit amet. Pellentesque facilisis vel ligula sed venenatis. Praesent et est ornare, vulputate erat sit amet, ultricies magna. Morbi quis dapibus ex.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Sed in est ut ipsum pulvinar mollis a quis dui. Aenean fringilla vehicula tortor et fermentum. Donec feugiat nisi et ultricies tristique. Maecenas fermentum vehicula ante, nec molestie urna egestas sit amet. Pellentesque facilisis vel ligula sed venenatis. Praesent et est ornare, vulputate erat sit amet, ultricies magna. Morbi quis dapibus ex.
                </Text>
            </ScrollView>
        </Screen>
    )
}