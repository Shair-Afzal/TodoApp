import React, {useContext, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { MyContext } from '../../App';

let userSchema = Yup.object().shape({
  name: Yup.string().required(),
  lastname: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
const CustomModal = ({setModalVisible}) => {
    const {data,setdata}=useContext(MyContext)
    
  

  return (
    <Formik
    initialValues={{ email: '',name:'',lastname:'',password:'',confirmPassword:'' }}
    validationSchema={userSchema}

const onSubmit = {async (values) => {
  try {
    // Get existing data from AsyncStorage
    const existingData = await AsyncStorage.getItem('TASKS');
    
    // Parse existing data or initialize an empty array if null
    const tasks = existingData ? JSON.parse(existingData) : [];

    // Update the state and AsyncStorage
    const updatedTasks = [values, ...tasks];

    // Store updated data back in AsyncStorage
    await AsyncStorage.setItem('TASKS', JSON.stringify(updatedTasks));

    // Update state
    setdata(updatedTasks);
    setModalVisible(false);
  } catch (error) {
    console.error('Error storing tasks:', error);
  }}
}
    
  >
    {({ handleChange, handleBlur, handleSubmit, values ,errors,touched}) => (
        
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Enter data in form !</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:15}}>
              <TextInput style={[styles.inputcontainer,touched.name&&errors.name?{borderColor:'red'}:null]} placeholder='Enter FirstName..' value={values.name} onChangeText={handleChange('name')} onBlur={handleBlur('name')}/>
              <TextInput style={[styles.inputcontainer,touched.lastname&&errors.lastname?{borderColor:'red'}:null]} placeholder='Enter LastName..'value={values.lastname} onChangeText={handleChange('lastname')} onBlur={handleBlur('lastname')}/>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:15}}>
              <TextInput style={[styles.inputcontainer,touched.password&&errors.password?{borderColor:'red'}:null]} placeholder='Enter Password..' value={values.password} onChangeText={handleChange('password')} onBlur={handleBlur('password')}/>
              <TextInput style={[styles.inputcontainer,touched.confirmPassword&&errors.confirmPassword?{borderColor:'red'}:null]} placeholder='ConfirmPassword..'value={values.confirmPassword} onChangeText={handleChange('confirmPassword')} onBlur={handleBlur('confirmPassword')}/>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:15}}>
                <TextInput style={[styles.inputcontainer,touched.email&&errors.email?{borderColor:'red'}:null]} placeholder='Enter Email..' value={values.email} onChangeText={handleChange('email')} onBlur={handleBlur('email')}/>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={handleSubmit}>
                
                <Text style={styles.textStyle}>Sumbit</Text> 
                 
                
              </TouchableOpacity>
              </View>
            </View>
          </View>
       
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
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
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

export default CustomModal;