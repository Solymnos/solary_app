import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { teamsInfo } from '../utils/ApiUtils';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Players from '../components/Players';
import Results from '../components/Results';

let focusTeamId;

function TeamHomeScreen({navigation})
{
  const [ teamsData, setTeamsData ] = useState(teamsInfo);

  return (
    <View className="bg-black h-full flex-1 px-4">
      <Text className='color-white text-3xl mt-12 font-bold ml-6 mb-6 '>
          Les équipes Solary
      </Text>
      <ScrollView className="bg-black relative flex-1">
      {
        teamsData.map((data) => (
          <View className="w-full my-3">
              <View className="bg-black absolute border border-gray-600 rounded-xl z-20 h-28 w-28 items-center justify-center">
                <Image style={{resizeMode:"contain"}}  source={ { uri :  data.icon } } className='h-28 w-28'/>  
              </View>
            <TouchableHighlight onPress={() => {
              focusTeamId = data.id ;
              navigation.navigate('TeamDetails');
              }} >  
              <View className="border border-gray-600 w-max rounded-xl h-24 ml-8 mt-8 z-10">
                  <View className='ml-20 w-max h-full flex flex-row'>
                      <View className='border w-3/4'>
                          <Text className='color-white text-2xl mt-2 ml-2 font-bold'>
                              {data.name}
                          </Text>
                      </View> 
                      <View className='w-1/4 items-center pt-5'>
                          <View>
                              <MaterialCommunityIcons name="heart" color={'#ffffff'} size={35}/>
                          </View>                         
                      </View>  
                  </View>
              </View>
            </TouchableHighlight>
          </View>
        ))
      }    
      </ScrollView>
    </View>
  )
}

function TeamDetails({navigation})
{
  const [ teamsData, setTeamsData ] = useState(teamsInfo);
  const [ selectCompetition, setSelectCompetition ] = useState('');
  const [ selectContent, setSelectContent ] = useState('results');

  let focusTeam = teamsData.find(x => x.id == focusTeamId);
  let Content;

  if (selectContent == 'results')
  {
    console.log(focusTeam)
    Content = (
        <Results results={focusTeam.results}/>
    )
  } else if (selectContent == 'classements')
  {
    Content = (
      <Text>
        classements
      </Text>
    )
  } else if (selectContent == 'equipe')
  {
    Content = (
        <Players staffs={focusTeam.staffs} players={focusTeam.players}/>
    )
  }

  return (
    <View className="bg-black h-full flex-1 px-4">
      <View className="flex-row mt-12 mb-6 justify-content text-center items-center">
        <Image style={{resizeMode:"contain"}}  source={ { uri :  focusTeam.icon } } className='w-12 h-12'/>
        <Text className='color-white text-3xl font-bold ml-6 '>
            {focusTeam.name}
        </Text>
      </View>
      <View className="flex flex-grow">
        {Content}
      </View>
      <View className="flex-row h-16 justify-center items-center pt-4"> 
        <TouchableHighlight className="h-full w-28 items-center mx-auto" onPress={() => { setSelectContent('results')}}>
          <View className="border border-gray-600 flex flex-row rounded-xl h-2/3 w-full justify-center items-center">
            <Text className="text-white">
              Résultats
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight className="h-full mx-auto w-28" onPress={() => { setSelectContent('classements')}}>
          <View className="border border-gray-600 flex flex-row rounded-xl h-2/3 w-full justify-center items-center">
            <Text className="text-white">
              Classements
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight className="h-full w-28 mx-auto" onPress={() => { setSelectContent('equipe')}}>
          <View className="border border-gray-600 flex flex-row rounded-xl h-2/3 w-full justify-center items-center">
            <Text className="text-white">
              L'équipe
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

/*function TeamScreen({navigation})
{
  const [ teamsData, setTeamsData ] = useState(teamsInfo);
  const [ selectCompetition, setSelectCompetition ] = useState('');

  let focusTeam = teamsData.find(x => x.id == focusTeamId);
  const competitions = [];

  for(let i = 0; i < focusTeam.competitions.length; i++)
  {
    competitions.push({key : i.toString(), value : focusTeam.competitions[i].name})
  }
  console.log(competitions);
  console.log(competitions.length)

  const data = [
    { key : '1', value:'Toutes' },
    { key : '2', value:'Streamers Like' },
    { key : '3', value:'Aucunes' },
  ]

  console.log(data);
  return (
    <View className="bg-black h-full flex-1 px-4">
      <View className="flex-row mt-12 mb-6 justify-content text-center items-center">
        <Image style={{resizeMode:"contain"}}  source={ { uri :  focusTeam.icon } } className='w-12 h-12'/>
        <Text className='color-white text-3xl font-bold ml-6 '>
            {focusTeam.name}
        </Text>
      </View>
      <SelectList
        setSelected={(val) => setSelectCompetition(val)} 
        data={competitions} 
        inputStyles={{'color' : 'white'}} 
        dropdownTextStyles={{'color' : 'white'}}
        save='value'
        search={false}
        />
    </View>
  )
}*/

const rootStack = createStackNavigator();

export default function EsportPage() 
{
  return (
      <NavigationContainer independent={true}>
        <rootStack.Navigator screenOptions={{ headerShown : false}}>
          <rootStack.Group>
            <rootStack.Screen name="Home" component = { TeamHomeScreen }/>
          </rootStack.Group>
          <rootStack.Group screenOptions={{ presentation : 'modal'}}>
            <rootStack.Screen name="TeamDetails"  component={TeamDetails} />
          </rootStack.Group>
        </rootStack.Navigator>
      </NavigationContainer>
      
    );
}