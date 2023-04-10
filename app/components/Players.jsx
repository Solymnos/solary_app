import React from "react";
import { Text, View } from 'react-native';

export default function Players({staffs, players}) {

    console.log(staffs);
    console.log(players);
    return (
        <View>
            {
                staffs.map((staff) => {
                    <Text className="text-black">{staff.name}</Text>
                })
            }
        </View>
    )
}