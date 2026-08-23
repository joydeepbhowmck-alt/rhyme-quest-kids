import React,{useState} from 'react';
import {SafeAreaView,View,Text,TextInput,Pressable,StyleSheet,Alert} from 'react-native';
import {Link} from 'expo-router';

export default function Parents(){
 const [answer,setAnswer]=useState(''); const [ok,setOk]=useState(false);
 return <SafeAreaView style={s.safe}><View style={s.box}>
  <Text style={s.lock}>🔒</Text><Text style={s.title}>Grown-ups Area</Text>
  <Text style={s.sub}>A simple parent gate keeps settings away from little fingers.</Text>
  {!ok ? <><Text style={s.question}>What is 7 + 5?</Text>
   <TextInput keyboardType="number-pad" value={answer} onChangeText={setAnswer} style={s.input} placeholder="Answer"/>
   <Pressable style={s.primary} onPress={()=>answer==='12'?setOk(true):Alert.alert('Try again','Please solve the sum.')}>
    <Text style={s.primaryText}>Continue</Text>
   </Pressable></> :
   <><Text style={s.success}>✓ Parent access unlocked</Text>
    <Text style={s.item}>🔊 Narration settings</Text><Text style={s.item}>🌙 Bedtime playlist</Text>
    <Text style={s.item}>🌐 Language: English</Text><Text style={s.item}>⭐ Child progress</Text>
   </>}
  <Link href="/" asChild><Pressable style={s.back}><Text style={s.backText}>Back to Kids Home</Text></Pressable></Link>
 </View></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#F4F0FF',justifyContent:'center',padding:22},box:{backgroundColor:'#fff',borderRadius:26,padding:24},lock:{fontSize:48,textAlign:'center'},title:{fontSize:28,fontWeight:'900',color:'#4D3572',textAlign:'center',marginTop:8},sub:{color:'#777080',textAlign:'center',lineHeight:20,marginVertical:15},question:{fontSize:20,fontWeight:'900',textAlign:'center',color:'#40354A',marginBottom:10},input:{borderWidth:1,borderColor:'#DDD2EA',borderRadius:14,padding:14,fontSize:18,textAlign:'center'},primary:{backgroundColor:'#7657D9',borderRadius:15,padding:15,alignItems:'center',marginTop:12},primaryText:{color:'#fff',fontWeight:'900'},success:{fontSize:18,fontWeight:'900',color:'#2C8A56',textAlign:'center',marginVertical:12},item:{padding:15,backgroundColor:'#F7F3FB',borderRadius:13,marginTop:8,fontWeight:'800',color:'#4C4054'},back:{alignItems:'center',padding:16,marginTop:12},backText:{color:'#5B3E84',fontWeight:'900'}});
