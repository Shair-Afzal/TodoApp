import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image} from 'react-native'
import React, { useState } from 'react'

const Todolist = () => {
    const [data, setdata] = useState([])
         const [value, setvalue] = useState("")
         const [editi,setediti]=useState(false)
         const [isedit,setisedit]=useState(null)
         const handleClick=(txt)=>{
           setvalue(txt)
         }
         const add=()=>{
           if (editi) {
             const updatedData = data.map((item, index) => 
               index === isedit ? value : item 
             );
             setdata(updatedData);
             setediti(false); 
             setisedit(null);
           } else {
             setdata([...data, value]); 
           }
           setvalue("");
         }
         const del=(index)=>{
            const d= data.filter((item,i)=>i!=index)
            setdata(d)
     
         }
         const edit=(index)=>{
           const e=data.find((i,ind)=>ind == index)
           setvalue(e)
           setediti(true)
           setisedit(index)
           
         }
     return(
       <View style={{ flex: 1, backgroundColor: "white",padding:10 }}>
                   <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" ,marginTop:10}}>
                       <TextInput
                           style={{ padding:12,width:"70%", borderWidth: 1,borderRadius:10 }}
                           value={value}
                           onChangeText={handleClick}
                       />
                       <TouchableOpacity style={{ padding:12, backgroundColor: "red",paddingHorizontal:25,borderRadius:10}}
                       onPress={add}
                       >
                           <Text style={{ fontSize: 15, color: 'black' }}>{editi?"update":"Add"}</Text>
                       </TouchableOpacity>
                   </View>
                   <View style={{marginTop:10,justifyContent:"center",alignItems:"center"}}>
                   {
                       data.map((item,index)=>(
                           <View key={index}style={{Width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10}}>
                           <Text style={{fontSize:24,color:"green"}}>{item}</Text>
                           <TouchableOpacity style={styles.imgcontainer}
                           onPress={()=>edit(index)}
                           >
                               <Image source={require("./assets/edit.png")} style={styles.img}/>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.imgcontainer}
                           onPress={()=>del(index)}
                           >
                               <Image source={require("./assets/delete.png")} style={styles.img}/>
                           </TouchableOpacity>
                           </View>
                       )
                       )
                   }
                   </View>
               </View>
    )
}

export default Todolist

const styles = StyleSheet.create({
    imgcontainer:{
        height:25,
        width:25,
    },
    img:{
        height:'100%',
        width:"100%",
        resizeMode:"cover"
    }
})