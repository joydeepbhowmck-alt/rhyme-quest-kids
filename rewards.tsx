import React from 'react';
import {SafeAreaView,View,Text,Pressable,StyleSheet,ScrollView} from 'react-native';
import {Link} from 'expo-router';

export default function Rewards(){
 return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.container}>
  <Link href="/" asChild><Pressable><Text style={s.back}>‹ Home</Text></Pressable></Link>
  <Text style={s.title}>⭐ My Story Stars</Text><Text style={s.sub}>Every story is a little achievement!</Text>
  <View style={s.hero}><Text style={s.big}>⭐ ⭐ ⭐</Text><Text style={s.score}>12 Stars</Text><Text style={s.small}>Keep exploring to unlock more badges.</Text></View>
  <Text style={s.heading}>Badges</Text>
  {['🐰 First Rhyme','📚 Story Explorer','🌙 Bedtime Hero','🚀 Adventure Buddy','🌈 Rainbow Reader'].map((x,i)=><View style={s.badge} key={x}><Text style={s.badgeText}>{x}</Text><Text>{i<2?'✓':'🔒'}</Text></View>)}
 </ScrollView></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#FFF8EE'},container:{padding:20,paddingBottom:50},back:{color:'#5B3E84',fontWeight:'900',fontSize:16,marginBottom:18},title:{fontSize:30,fontWeight:'900',color:'#4D3572'},sub:{color:'#84798C',marginTop:5},hero:{backgroundColor:'#7657D9',borderRadius:24,padding:25,alignItems:'center',marginTop:18},big:{fontSize:30},score:{fontSize:30,fontWeight:'900',color:'#fff',marginTop:10},small:{color:'#EEE9FF',marginTop:5},heading:{fontSize:21,fontWeight:'900',color:'#40354A',marginVertical:18},badge:{backgroundColor:'#fff',padding:17,borderRadius:16,marginBottom:10,flexDirection:'row',justifyContent:'space-between'},badgeText:{fontWeight:'900',color:'#4B3B55'}});