import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png",
              width: 100,
              height: 100,
            }}
          />
          <Text style={styles.text1}>Instagram</Text>
          
          <TextInput style={styles.inputtext1} placeholder="Phone number,user name,or email" />
          
          <TextInput style={styles.inputtext2} placeholder="Password" />
          <TouchableOpacity style={styles.button1}onPress={()=>alert('LOGIN')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}onPress={()=>alert('')}>
            <Text style={styles.text4}>Forgot Password</Text>
          </TouchableOpacity>
          
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
},
button1:{
  backgroundColor: "blue",
  borderRadius:5,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  margin:10,
  alignItems:"center"
},
button2:{

 right:93,
},
text4:{
 color:"blue",
},
text1:{
  fontFamily:"Arial",
  fontSize:50,
  color:"black",
},

inputtext1:{
 color: "black",
 borderRadius:5,
 borderWidth:1,
 fontSize:15,
 width:300,
},
inputtext2:{
  color: "black",
  borderRadius:5,
  borderWidth:1,
  fontSize:15,
  width:300,
  height:30,
  marginTop:10
 },


})