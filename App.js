import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, Button,SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Todolist from './Src/Todolist'
import Modal from './Src/component/CustomModal'
import CustomModal from './Src/component/CustomModal'


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)
 
  const adddata = (value) => {
    setdata([...data, value])
    setModalVisible(false)
    
  }
  
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#Fedbd0" }}>
      {/* <StatusBar/> */}
      {/* <Todolist/> */}
      <Text style={{ fontSize: 18, color: 'black', textAlign: "center" }}>Please Enter Form data </Text>
      <TouchableOpacity style={{ paddingVertical: 19, backgroundColor: '#442c2e', borderRadius: 10, width: "40%", justifyContent: "center", alignItems: "center", marginTop: 10, }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ fontSize: 16, color: "white" }}>Enter data</Text>
      </TouchableOpacity>
    
      <CustomModal visible={modalVisible} 
        loading={loading}  onSubmit={adddata} />
      <View style={{marginTop:10}}>
      <TouchableOpacity  style={{flexDirection:"row",borderWidth:1,paddingHorizontal:10,}}>
            
            <Text style={{...styles.txt,fontWeight:"700"}}>name</Text>
            <Text style={{...styles.txt,fontWeight:"700"}}> lastname</Text>
            <Text style={{...styles.txt,fontWeight:"700"}}>pass</Text>
            <Text style={{...styles.txt,fontWeight:"700"}}>conf Pass</Text>
            <Text style={{...styles.txt,fontWeight:"700",borderRightWidth:0}}>email</Text>
          </TouchableOpacity>
      {
        data.map((x, ind) => (
          <TouchableOpacity key={ind} style={{flexDirection:"row",borderWidth:1,paddingHorizontal:10,}}>
            
            <Text style={styles.txt}>{x.name}</Text>
            <Text style={styles.txt}>{x.lastname}</Text>
            <Text style={styles.txt}>{x.password}</Text>
            <Text style={styles.txt}>{x.confirmPassword}</Text>
            <Text style={{...styles.txt,borderRightWidth:0}}>{x.email}</Text>
          </TouchableOpacity>
        ))
      }
      </View>
    </View>
  )
}
export default App;
const styles = StyleSheet.create({
  imgcontainer: {
    height: 25,
    width: 25,
  },
  img: {
    height: '100%',
    width: "100%",
    resizeMode: "cover"
  },
  txt:{
    fontsize:18,
    color:'black',
    // fontWeight:"700",
    width:"20%",
    borderRightWidth:1,
    textAlign:"center",
    paddingVertical:5
    
  }
})