import React,{useEffect,useRef,useState} from 'react';
import {View,Text,StyleSheet,Pressable,ScrollView,Animated,Alert} from 'react-native';
import {useLocalSearchParams,Link} from 'expo-router';
import * as Speech from 'expo-speech';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rhymes from '../../src/rhymes.json';

export default function Story(){
 const {id}=useLocalSearchParams<{id:string}>(); const r:any=rhymes.find((x:any)=>x.id===Number(id))||rhymes[0];
 const [playing,setPlaying]=useState(false); const [saved,setSaved]=useState(false); const bounce=useRef(new Animated.Value(0)).current;
 useEffect(()=>{Animated.loop(Animated.sequence([Animated.timing(bounce,{toValue:-10,duration:650,useNativeDriver:true}),Animated.timing(bounce,{toValue:0,duration:650,useNativeDriver:true})])).start();},[]);
 const speak=()=>{if(playing){Speech.stop();setPlaying(false);return;}setPlaying(true);Speech.speak([...r.lines,r.moral].join(' '),{rate:.8,pitch:1.1,onDone:()=>setPlaying(false),onStopped:()=>setPlaying(false)});};
 const save=async()=>{const raw=await AsyncStorage.getItem('favorites');const a=raw?JSON.parse(raw):[];const n=a.includes(r.id)?a.filter((x:number)=>x!==r.id):[...a,r.id];await AsyncStorage.setItem('favorites',JSON.stringify(n));setSaved(n.includes(r.id));};
 return <ScrollView style={s.safe} contentContainerStyle={s.container}>
  <Link href="/" asChild><Pressable><Text style={s.back}>‹ Library</Text></Pressable></Link>
  <View style={s.scene}><Text style={s.sun}>☀️</Text><Animated.Text style={[s.character,{transform:[{translateY:bounce}]}]}>{r.emoji}</Animated.Text><Text style={s.sceneName}>{r.scene}</Text><View style={s.ground}/></View>
  <Text style={s.cat}>{r.category.toUpperCase()} • RHYME #{r.id}</Text><Text style={s.title}>{r.title}</Text>
  <View style={s.story}>{r.lines.map((x:string,i:number)=><Text style={s.line} key={i}>{x}</Text>)}</View>
  <View style={s.lesson}><Text style={s.lessonTitle}>🌱 Little lesson</Text><Text style={s.lessonText}>{r.moral}</Text></View>
  <Pressable style={s.listen} onPress={speak}><Text style={s.listenText}>{playing?'⏹ Stop narration':'🔊 Read this story aloud'}</Text></Pressable>
  <Pressable style={s.save} onPress={save}><Text style={s.saveText}>{saved?'♥ Saved to favourites':'♡ Add to favourites'}</Text></Pressable>
  <Link href="/rewards" asChild><Pressable style={s.reward}><Text style={s.rewardText}>⭐ Finish story & collect a star</Text></Pressable></Link><Link href={`/story/${r.id===1000?1:r.id+1}`} asChild><Pressable style={s.next}><Text style={s.nextText}>Next adventure →</Text></Pressable></Link>
 </ScrollView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#FFF8EE'},container:{padding:18,paddingBottom:55},back:{color:'#5B3E84',fontWeight:'900',fontSize:16,marginBottom:12},scene:{height:250,borderRadius:28,backgroundColor:'#DDF3FF',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative'},sun:{position:'absolute',top:18,right:20,fontSize:34},character:{fontSize:110},sceneName:{position:'absolute',top:18,left:18,backgroundColor:'#ffffffcc',paddingHorizontal:10,paddingVertical:6,borderRadius:12,fontWeight:'800',color:'#5B4D62'},ground:{position:'absolute',bottom:-50,width:520,height:120,borderRadius:120,backgroundColor:'#B9E4A2'},cat:{fontSize:12,fontWeight:'900',color:'#8C8091',marginTop:18},title:{fontSize:32,fontWeight:'900',color:'#4D3572',marginTop:4,marginBottom:14},story:{backgroundColor:'#fff',borderRadius:20,padding:18},line:{fontSize:20,lineHeight:32,color:'#42364D',fontWeight:'600'},lesson:{backgroundColor:'#FFF0C8',borderRadius:18,padding:16,marginTop:13},lessonTitle:{fontWeight:'900',color:'#6E5420'},lessonText:{marginTop:6,color:'#6A5B3A',lineHeight:21},listen:{backgroundColor:'#7657D9',borderRadius:17,padding:16,alignItems:'center',marginTop:15},listenText:{color:'#fff',fontWeight:'900',fontSize:16},save:{borderWidth:1,borderColor:'#D9CDE8',borderRadius:17,padding:15,alignItems:'center',marginTop:10},saveText:{color:'#5B3E84',fontWeight:'900'},next:{padding:15,alignItems:'center'},reward:{marginTop:10,backgroundColor:'#FFE7A1',borderRadius:17,padding:15,alignItems:'center'},rewardText:{color:'#624B18',fontWeight:'900'},nextText:{color:'#5B3E84',fontWeight:'900',fontSize:17}});