import React, { useRef , useEffect } from 'react';
import { Text, View, Image, Animated } from 'react-native';

export default function LoadingPage() {

    const fallAnim = useRef(new Animated.Value(-180)).current;
    const rotateAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        const fall = Animated.spring(fallAnim, {
            toValue : 0,
            duration: 1400,
            useNativeDriver : true,
            friction : 3,
            tension : 0,
        });

        Animated.parallel([fall]).start();
;
    }, []);

    const trans = {
        transform : [
            {
                translateY : fallAnim
            }
        ]
    }

    return (
        <View className="flex-1 items-center justify-center bg-black">
            <View className="flex h-2/3 w-full justify-center items-center">
                <Animated.View style={[trans]} className="flex h-1/2 w-full justify-center items-center">
                    <Image style={{resizeMode: "contain"}} className='h-5/6 w-5/6 mt-10'   source={require('../assets/slylogo.png')}/>
                </Animated.View>
            </View>
            <View className="flex h-1/3 w-full">
                <Text className="text-black">Just test</Text>
            </View>
        </View>        
    )
}