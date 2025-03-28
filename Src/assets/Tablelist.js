import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { MyContext } from '../../App';

const Tablelist = () => {
  const [tableHead, setTableHead] = useState(['Head', 'Head2', 'Head3', 'Head4','Action']);
  const {data}=useContext(MyContext)
  const formattedData = data?.map(item => [item.email, item.name, item.lastname, item.password,item.confirmPassword]);   
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={formattedData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

export default Tablelist;
