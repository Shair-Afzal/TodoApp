import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
// import Tablelist from './Src/component/Tablelist'
import CustomButton from './Src/component/CustomButton'
import Tablelist from './Src/component/Tablelist'
import TodoModel from './Src/component/todo-model'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Src/component/Loader'
import Toast from 'react-native-toast-message';
export const MyContext=createContext()
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEdit,setIsEdit]=useState(null)
  const [data,setdata]=useState([])
  const [search,setsearch]=useState('')
  const [loader,setloader]=useState(false)
  const [clear,setclear]=useState(false)
  
  useEffect(()=>{
    setTimeout(()=>{
      setloader(false)
      if(clear){
      Toast.show({
        type:"success",
        text1:"your data is clear ",
        text2:"you clear all data from the storage",
        visibilityTime:1500
      })
    }
    setclear(false)
    },3000)
  },[loader,clear])
  const searchdata=(txt)=>{
    setsearch(txt)
    if(txt){
    let newdata=data.filter((item)=>
      item.name.toLowerCase().includes(txt.toLowerCase()))
    setdata(newdata)
    setloader(true)
    
    } else {
      setdata(data)
       
      
    }
   }
   const handleclear=async()=>{
    
    try {
      setloader(true)
      
      await AsyncStorage.clear(); 
      setdata([]); 
      setclear(true)
    } catch (error) {
      console.log('Error clearing storage:', error);
      setloader(false)
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
      <TodoModel setModalVisible={setModalVisible} modalVisible={modalVisible} setloader={setloader}loader={loader} />
      {loader&&<Loader/>
      }
      <Toast/>
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