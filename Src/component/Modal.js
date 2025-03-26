import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { object, string, number, date, InferType } from 'yup';
import { Formik } from 'formik';

let userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});
const Custo = ({visible,Press,loading,FNvalue,LNValue,PValue,Cvalue,Evalue,FNChange,LNChange,Pchange,CCHANGE,Echange}) => {

  return (
    <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
         >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Enter data in form !</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:15}}>
              <TextInput style={styles.inputcontainer} placeholder='Enter FirstName..' value={FNvalue} onChangeText={FNChange}/>
              <TextInput style={styles.inputcontainer} placeholder='Enter LastName..'value={LNValue} onChangeText={LNChange}/>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:15}}>
              <TextInput style={styles.inputcontainer} placeholder='Enter Password..' value={PValue} onChangeText={Pchange}/>
              <TextInput style={styles.inputcontainer} placeholder='ConfirmPassword..'value={Cvalue}onChangeText={CCHANGE}/>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:15}}>
                <TextInput style={styles.inputcontainer} placeholder='Enter Email..' value={Evalue} onChangeText={Echange}/>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={Press}>
                { loading?
                <ActivityIndicator size={"small"} color={"aqua"}/>:
                <Text style={styles.textStyle}>Sumbit</Text> 
                 
                }
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        )}
   </Formik>
     
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    padding:10
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    width:"100%",
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    elevation: 2,
    width:"45%",
    paddingVertical:15,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
  },
  inputcontainer:{
    width:"45%",
    paddingVertical:8,
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:10
  }
});

export default Custom;