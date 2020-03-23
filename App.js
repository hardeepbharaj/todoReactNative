import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoal, setcourseGoal] = useState([])
  const [isAddMode, setisAddMode] = useState(false)

  const goalHandler = (enteredGoal) => {
    setcourseGoal(courseGoal => [
        ...courseGoal,
        { key: Math.random().toString(), value: enteredGoal}
      ])
  }

  const deleteGoal = (goalId) => {
    setcourseGoal(courseGoal => {
      return courseGoal.filter(x => x.key != goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={sho} />
      <GoalInput goalHandler={goalHandler} isAddMode={isAddMode} /> 
      <FlatList data={courseGoal} renderItem={itemData => <GoalItem id={itemData.item.key} deleteGoal={deleteGoal} title={itemData.item.value}/> } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50 
  }
})