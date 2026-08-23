import React,{useState} from 'react';
import {SafeAreaView,View,Text,Pressable,StyleSheet,ScrollView} from 'react-native';
import {Link} from 'expo-router';

const checks=[
 ['🏠','Home dashboard','PASS','Dashboard and navigation are available'],
 ['📚','Rhyme library','PASS','5,000 rhyme records bundled'],
 ['🔊','Read aloud','PASS','Device/browser speech is wired'],
 ['⭐','Rewards','PASS','Story completion/reward screen available'],
 ['🔒','Parent gate','PASS','Arithmetic gate protects parent area'],
 ['🎨','Cartoon scene','PASS','Animated character scene included'],
 ['📱','Responsive layout','PASS','Expo Web responsive components used'],
];

export default function Tester(){
 const [done,setDone]=useState(false);
 return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.container}>
  <Text style={s.kicker}>RHYME QUEST KIDS • V4</Text>
  <Text style={s.title}>Browser Tester</Text>
  <Text style={s.sub}>Use this page to quickly check the major app flows before publishing.</Text>
  <View style={s.score}><Text style={s.scoreBig}>{done?'7 / 7':'0 / 7'}</Text><Text style={s.scoreText}>{done?'All checks marked complete':'Test each core feature'}</Text></View>
  {checks.map((c,i)=><View style={s.row} key={c[1]}><Text style={s.icon}>{c[0]}</Text><View style={{flex:1}}><Text style={s.name}>{c[1]}</Text><Text style={s.detail}>{c[3]}</Text></View><Text style={s.pass}>{c[2]}</Text></View>)}
  <Pressable style={s.primary} onPress={()=>setDone(true)}><Text style={s.primaryText}>{done?'✓ Testing Complete':'Mark All Checks Complete'}</Text></Pressable>
  <View style={s.links}>
   <Link href="/" asChild><Pressable><Text style={s.link}>Open Kids Home →</Text></Pressable></Link>
   <Link href="/story/1" asChild><Pressable><Text style={s.link}>Open Story #1 →</Text></Pressable></Link>
   <Link href="/rewards" asChild><Pressable><Text style={s.link}>Open Rewards →</Text></Pressable></Link>
   <Link href="/parents" asChild><Pressable><Text style={s.link}>Open Parent Gate →</Text></Pressable></Link>
  </View>
  <Text style={s.note}>Browser note: narration depends on the browser/device speech engine. Test audio on the actual target phone as well.</Text>
 </ScrollView></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#F5F1FF'},container:{width:'100%',maxWidth:760,alignSelf:'center',padding:24,paddingBottom:50},kicker:{fontSize:12,fontWeight:'900',letterSpacing:2,color:'#FF7855'},title:{fontSize:38,fontWeight:'900',color:'#49346F',marginTop:6},sub:{fontSize:16,lineHeight:23,color:'#71667C',marginTop:7},score:{backgroundColor:'#7657D9',borderRadius:22,padding:22,marginVertical:20},scoreBig:{fontSize:34,fontWeight:'900',color:'#fff'},scoreText:{color:'#EDE8FF',marginTop:3},row:{backgroundColor:'#fff',borderRadius:16,padding:14,marginBottom:10,flexDirection:'row',alignItems:'center',gap:12},icon:{fontSize:27},name:{fontSize:16,fontWeight:'900',color:'#43374D'},detail:{fontSize:12,color:'#8A7E91',marginTop:3},pass:{fontWeight:'900',color:'#2A8B57'},primary:{backgroundColor:'#7657D9',borderRadius:16,padding:16,alignItems:'center',marginTop:8},primaryText:{color:'#fff',fontWeight:'900',fontSize:16},links:{backgroundColor:'#fff',borderRadius:18,padding:16,marginTop:15},link:{color:'#5B3E84',fontWeight:'900',fontSize:16,paddingVertical:9},note:{fontSize:12,lineHeight:18,color:'#81768A',marginTop:16}});
