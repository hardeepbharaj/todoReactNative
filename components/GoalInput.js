import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setenteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText)
  }

  return (
    <Modal visible={props.isAddMode}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={() => {setenteredGoal(''); props.goalHandler(enteredGoal)}}/>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10 
  },
})

export default GoalInput;