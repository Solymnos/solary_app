import React from "react";
import { Text } from 'react-native';

export default function Prog({prog}) {
    console.log(prog)
    return (
        <Text className='text-white'>
            {prog.id}
        </Text>
    )
}