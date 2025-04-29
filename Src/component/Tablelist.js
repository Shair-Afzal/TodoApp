import React, { useContext, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Table, Row, Rows, Cell } from 'react-native-table-component';
import { MyContext } from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tablelist = () => {
  const [tableHead, setTableHead] = useState(['Email', 'Fname', 'Lname', 'pasw', 'Cpasw']);
  const { data,setdata,setModalVisible,setIsEdit } = useContext(MyContext);
  const handleEdit=(index)=>{
    console.log(index,'sas')
    setModalVisible(true)
    setIsEdit(index)
  }
  
  const handleDelete = async (index) => {
    
     
      const realdata = await AsyncStorage.getItem("TASKS");
      let datas = realdata ? JSON.parse(realdata) : [];
      const d = data.filter((_, i) => i !== index);
      await AsyncStorage.setItem("TASKS", JSON.stringify(d));
      setdata(d);
    
  };
  

  const actionButtons = (index) => (
    <View style={styles.actionContainer}>
      <TouchableOpacity style={styles.editButton} onPress={()=>handleEdit(index)}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(index)}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
  
  const formattedData = data?.map((item, index) => [
    item.email, 
    item.name, 
    item.lastname, 
    item.password, 
    item.confirmPassword, 
    actionButtons(index)
  ]);   
  
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {formattedData.map((rowData, index) => (
          <Row key={index} data={rowData} textStyle={styles.text} />
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30,  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  actionContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  editButton: { backgroundColor: '#4CAF50', padding: 2, marginRight: 5, borderRadius: 3 },
  deleteButton: { backgroundColor: '#F44336', padding: 2, borderRadius: 3 },
  buttonText: { color: '#fff', textAlign: 'center' ,fontSize:9}
});

export default Tablelist;
