import { View, SafeAreaView,Text ,StyleSheet,TextInput} from 'react-native'
import React , {useState} from 'react'
import { moderateScale, scale,verticalScale } from 'react-native-size-matters'
import ButtonComp from "@/src/components/atoms/ButtonComp";
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

const Login = () => {
  const [isLoading,setIsLoading] = useState(false);
  const navigate_otp = () => {
    router.push('/(auth)/verify_otp');
    setIsLoading(false);
  }

  const onLogin = () => {
    setIsLoading(true);
    const timeout = setTimeout(navigate_otp,5000);
    return () => {
      clearTimeout(timeout);
      setIsLoading(false); 
    };
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>  
        <View style={styles.header_continer}>
            <Text style={styles.heading}>Enter your phone number</Text>
            <Text style={styles.description}>
              WhatsApp will need to verify your phone number.
              <Text style={styles.link_description}> What's my number?</Text>
            </Text>
        </View> 
        <View style={styles.input_main_conatiner}>
          <View style={styles.dropdown_container}>
            <View />
            <Text style={styles.dropdown_text}>India</Text>
            <AntDesign name="caretdown" size={moderateScale(14)} color="black" />
          </View>
          <View style={styles.horizontal_line} />
          <View style={styles.input_conatiner}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>+ 91</Text>
              <View style={styles.horizontal_line} />
            </View>
            <View style={{flex:1}}>
              <TextInput style={styles.input} placeholder='Enter your phone number'/>
              <View style={styles.horizontal_line} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title="NEXT" onPress={onLogin} isLoading={isLoading} style={{paddingHorizontal:scale(29)}}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    justifyContent:"space-between",
    paddingVertical:verticalScale(50),
    alignItems:"center",
    paddingHorizontal:scale(40)
  },
  header:{
    gap:verticalScale(50)
  },
  footer:{},
  header_continer:{
    gap:verticalScale(20)
  },
  input_main_conatiner:{},
  input_conatiner:{
    paddingVertical:verticalScale(12),
    flexDirection:"row",
    alignItems:"center",
    gap:scale(20)
  },
  heading:{
    fontSize:verticalScale(20),
    fontWeight:"bold",
    color:"black",
    textAlign:"center",
  },
  description:{
    textAlign:"center",
    fontSize:verticalScale(12),
    fontWeight:"400",
    color:"black"
  },
  link_description:{
    color:"#002AC0"
  },
  horizontal_line:{
    width:"100%",
    height:verticalScale(1),
    backgroundColor:"#0CCC83"
  },
  dropdown_container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:verticalScale(5),
    paddingHorizontal:scale(20),
  },
  dropdown_text:{
    fontSize:moderateScale(16),
    color:"#000000",
    fontWeight:"500",
  },
  country_code:{
    gap:verticalScale(10),
    color:"#000000",
    fontWeight:"500",
  },
  input:{
    fontSize:moderateScale(16)
  },
  country_code_text:{
    fontSize:moderateScale(16),
    color:"#000000",
    fontWeight:"500",
  },
})
export default Login