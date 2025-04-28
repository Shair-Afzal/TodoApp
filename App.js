import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { createContext, useState } from 'react'
// import Tablelist from './Src/component/Tablelist'
import CustomButton from './Src/component/CustomButton'
import Tablelist from './Src/assets/Tablelist'
import TodoModel from './Src/component/todo-model'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const MyContext=createContext()
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEdit,setIsEdit]=useState(null)
  const [data,setdata]=useState([])
  const [search,setsearch]=useState('')
  
  const searchdata=(txt)=>{
    setsearch(txt)
    if(txt){
    let newdata=data.filter((item)=>
      item.name.toLowerCase().includes(txt.toLowerCase()))
    setdata(newdata)
    
    
    } else {
      setdata(data)
       
      
    }
   }
   const handleclear=async()=>{
    
    try {
      await AsyncStorage.clear(); // clear all AsyncStorage
      setdata([]); // clear local data state
    } catch (error) {
      console.log('Error clearing storage:', error);
    }
   }
  return (
    <MyContext.Provider value={{data,setdata,setModalVisible,isEdit,setIsEdit}}>
    <View style={{flex:1}}>
      <CustomButton setModalVisible={setModalVisible}/>
      <View style={styles.btncontainer}>
        <TextInput style={styles.input}
        value={search}
        onChangeText={searchdata}
        />
        <TouchableOpacity style={styles.btn} onPress={handleclear}>
          <Text style={styles.txt}>Clear</Text>
        </TouchableOpacity>
      </View>
      <Tablelist setModalVisible={setModalVisible} />
      <TodoModel setModalVisible={setModalVisible} modalVisible={modalVisible}  />

    </View>
    </MyContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({
  btncontainer:{
    width:"100%",
paddingHorizontal:18,
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
marginTop:10
  },
  input:{
    width:"65%",
    borderWidth:1,
    paddingVertical:10,
    borderRadius:10

  },
  btn:{
    backgroundColor:'black',
    width:"30%",
    paddingVertical:15,
    borderRadius:10
  },
  txt:{
    textAlign:"center",
    fontSize:14,
    color:'white'
  }
})