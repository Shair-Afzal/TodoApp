import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const State = () => {
    const [count,setcount]=useState(0)
    console.log("rendering")
  return (
    <View>
      <Text>{count}</Text>
      <Button title="add"onPress={()=>setcount(c=>c+1)}/>
    </View>
  )
}

export default State

const styles = StyleSheet.create({})