import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function SettingsPage() {

  const [selected, setSelected] = useState('');

  const data = [
    { key : '1', value:'Toutes' },
    { key : '2', value:'Streamers Like' },
    { key : '3', value:'Aucunes' },
  ]

  return (
    <View className="bg-black h-full flex-1 px-4">
      <Text className='color-white text-3xl mt-12 font-bold ml-6 mb-6'>
          Réglages
      </Text>
      <Text className='color-white text-xl font-bold ml-6 mb-6'>
          Notifications
      </Text>
      <SelectList 
        className = 'text-white'
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        search={false}
        inputStyles={{'color' : 'white'}}
        dropdownTextStyles={{'color' : 'white'}}
      />
    </View>
  );
}