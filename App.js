import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
// import Tablelist from './Src/component/Tablelist'
import CustomButton from './Src/component/CustomButton'
import Tablelist from './Src/assets/Tablelist'
import TodoModel from './Src/component/todo-model'
export const MyContext=createContext()
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data,setdata]=useState([])
  return (
    <MyContext.Provider value={{data,setdata}}>
    <View style={{flex:1}}>
      <CustomButton setModalVisible={setModalVisible}/>
      <Tablelist/>
      <TodoModel setModalVisible={setModalVisible} modalVisible={modalVisible}  />
    </View>
    </MyContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({})