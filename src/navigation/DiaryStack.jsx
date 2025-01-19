import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Diary from '../screens/Diary';
import WriteDiary from '../screens/WriteDiary';

const Stack = createNativeStackNavigator();

const DiaryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="DiaryMain" 
        component={Diary}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen 
        name="WriteDiary" 
        component={WriteDiary}
        options={{ animation: 'slide_from_right' }}
      />
    </Stack.Navigator>
  );
};

export default DiaryStack;