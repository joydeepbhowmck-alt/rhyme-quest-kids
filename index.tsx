import React,{useMemo,useState} from 'react';
import {SafeAreaView,View,Text,StyleSheet,Pressable,TextInput,ScrollView} from 'react-native';
import {Link} from 'expo-router';
import rhymes from '../src/rhymes.json';

const cats=['All','Animals','Nature','Learning','Adventure','Bedtime'];
export default function Home(){
 const [q,setQ]=useState('');const[cat,setCat]=useState('All');
 const filtered=useMemo(()=>rhymes.filter((r:any)=>(cat==='All'||r.category===cat)&&(r.title.toLowerCase().includes(q.toLowerCase())||r.character.toLowerCase().includes(q.toLowerCase()))),[q,cat]);
 const random=Math.floor(Math.random()*rhymes.length)+1;
 return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.container}>
  <View style={s.top}><View><Text style={s.brand}>Rhyme Quest</Text><Text style={s.kids}>KIDS</Text></View><Link href="/parents" asChild><Pressable style={s.parent}><Text>🔒</Text></Pressable></Link></View>
  <View style={s.hero}><Text style={s.heroEmoji}>🐰</Text><View style={{flex:1}}><Text style={s.heroTitle}>Hello, Little Explorer!</Text><Text style={s.heroSub}>Where should today's story take you?</Text></View></View>
  <View style={s.buttons}><Link href={`/story/${random}`} asChild><Pressable style={s.primary}><Text style={s.primaryText}>🎲 Surprise Story</Text></Pressable></Link><Link href="/rewards" asChild><Pressable style={s.secondary}><Text style={s.secondaryText}>⭐ My Stars</Text></Pressable></Link></View>
  <Text style={s.heading}>Choose your story world</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>{cats.map(c=><Pressable key={c} onPress={()=>setCat(c)} style={[s.chip,cat===c&&s.chipOn]}><Text style={[s.chipText,cat===c&&s.chipTextOn]}>{c}</Text></Pressable>)}</ScrollView>
  <TextInput value={q} onChangeText={setQ} placeholder="Search stories..." style={s.search}/>
  <Text style={s.heading}>{cat==='All'?'Today’s story shelf':cat}</Text>
  {filtered.slice(0,45).map((r:any)=><Link key={r.id} href={`/story/${r.id}`} asChild><Pressable style={s.card}><View style={s.thumb}><Text style={{fontSize:34}}>{r.emoji}</Text></View><View style={{flex:1}}><Text style={s.cardTitle}>{r.title}</Text><Text style={s.meta}>{r.scene} • Story #{r.id}</Text></View><Text style={s.arrow}>›</Text></Pressable></Link>)}
 </ScrollView></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#FFF8EE'},container:{padding:18,paddingBottom:55},top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},brand:{fontSize:29,fontWeight:'900',color:'#4D3572'},kids:{fontSize:11,fontWeight:'900',letterSpacing:5,color:'#FF7954'},parent:{width:42,height:42,borderRadius:21,backgroundColor:'#EEE7F7',alignItems:'center',justifyContent:'center'},hero:{backgroundColor:'#DDF3FF',borderRadius:24,padding:18,marginTop:18,flexDirection:'row',alignItems:'center',gap:14},heroEmoji:{fontSize:64},heroTitle:{fontSize:20,fontWeight:'900',color:'#45355A'},heroSub:{color:'#72687A',marginTop:5,lineHeight:19},buttons:{flexDirection:'row',gap:10,marginTop:12},primary:{flex:1,backgroundColor:'#7657D9',borderRadius:15,padding:14,alignItems:'center'},primaryText:{color:'#fff',fontWeight:'900'},secondary:{flex:1,backgroundColor:'#FFD66B',borderRadius:15,padding:14,alignItems:'center'},secondaryText:{color:'#4D3B18',fontWeight:'900'},heading:{fontSize:20,fontWeight:'900',color:'#40354A',marginVertical:14},chip:{paddingHorizontal:14,paddingVertical:9,borderRadius:20,backgroundColor:'#F0EAF6',marginRight:8},chipOn:{backgroundColor:'#4D3572'},chipText:{fontWeight:'800',color:'#4D3572'},chipTextOn:{color:'#fff'},search:{backgroundColor:'#fff',borderWidth:1,borderColor:'#E7DEEC',borderRadius:15,padding:13,fontSize:15},card:{backgroundColor:'#fff',borderRadius:18,padding:12,marginBottom:10,flexDirection:'row',alignItems:'center',gap:12},thumb:{width:58,height:58,borderRadius:16,backgroundColor:'#FFF0CC',alignItems:'center',justifyContent:'center'},cardTitle:{fontSize:16,fontWeight:'900',color:'#42364D'},meta:{fontSize:12,color:'#918795',marginTop:4},arrow:{fontSize:28,color:'#9A8FA4'}});