import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { progInfo } from '../utils/ApiUtils';
export default function ProgPage() {
  
  const [ watchMoreProg, setWatchMoreProg ] = useState(false);
  const [ progData, setProgData ] = useState(progInfo);


  let ProgContent;

  

  return (
      <View className="bg-black h-full flex-1 px-4">
        <ScrollView className="bg-black relative flex-1">
          {ProgContent}
        </ScrollView>      
      </View>
    );
}