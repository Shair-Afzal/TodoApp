import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.maincontainer}>
      <ActivityIndicator
      size={"large"}
      color={"aqua"}
      />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:0,
        left:0,
        bottom:0,
        right:0,
        zIndex:1000,
        
    }
})