import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { progInfo } from '../utils/ApiUtils';
import Prog from '../components/Prog';
export default function ProgPage() {
  
  const [ watchMoreProg, setWatchMoreProg ] = useState(false);
  const [ progData, setProgData ] = useState(progInfo);


  let ProgContent;
  let currentDate = new Date();
  let nextWeekDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
  
  console.log(progData);

  if (progData.length < 1)
  {
    ProgContent = (
      <Text className="text-white text-xl font-bold">
        Rien de prévu pour le moment !
      </Text>
    )
  } else {
    ProgContent = (
        progData.map((prog) =>
          <Prog prog={prog}/>
        )
    )
  }

  return (
      <View className="bg-black h-full flex-1 px-4">
        <ScrollView className="bg-black relative flex-1">
          {ProgContent}
        </ScrollView>      
      </View>
    );
}