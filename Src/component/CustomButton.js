import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from '../../App'

const CustomButton = ({setModalVisible}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={()=>setModalVisible(true)}>
       <Text style={styles.txt}>Add button</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        padding:10,
        backgroundColor:"red"
    },
    txt:{
       fontSize:14,

    }
})