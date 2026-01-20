import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TodoList from './todoList';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TodoList} />
      
    </Tab.Navigator>
  );
};

export default TabNavigator;
