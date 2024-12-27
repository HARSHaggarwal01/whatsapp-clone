import { View, Text,SafeAreaView,StyleSheet ,Image} from 'react-native'
import React ,{useState} from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import imagePath from '@/src/constants/imagePath';
import ButtonComp from "@/src/components/atoms/ButtonComp";
import { router } from "expo-router";

const TermsAgree = () => {
  const [isLoading,setIsLoading] = useState(false);
  const navigate_login = () => {
    router.push('/(auth)/login');
    setIsLoading(false)
  }

  const onAgree = () => {
    setIsLoading(true)
    const timeout = setTimeout(navigate_login,5000);
    return () => {
      clearTimeout(timeout)
      setIsLoading(false)
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image source={imagePath.welcome_logo} style={styles.welcome_logo} resizeMode="contain"/>
        <Text style={styles.terms_text}>Read our <Text style={styles.link_text}>Privacy Policy.</Text> Tap "Agree and continue" to accept the <Text style={styles.link_text}>Teams 
        of Service</Text>.
        </Text>
        <ButtonComp title="Agree and Continue" onPress={onAgree} isLoading={isLoading}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>from</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:verticalScale(84),
    paddingHorizontal:scale(28),
  },
  header:{
    alignItems:"center",
    gap:verticalScale(30)
  },
  footer:{
    alignItems:"center",
  },
  from_text:{
    fontSize:moderateScale(12),
    color:"#867373",
  },
  facebook_text:{
    fontSize:moderateScale(15),
    color:"#000000",
    textTransform:"uppercase",
    fontWeight:"600"
  },
  welcome_text:{
    fontSize:moderateScale(28),
    fontWeight:"bold",
    color:"black",
    marginBottom:verticalScale(10)
  },
  welcome_logo:{
    width:moderateScale(250),
    height:moderateScale(250),
    borderRadius:moderateScale(250),
  },
  terms_text:{
    textAlign:"center",
    fontSize:moderateScale(13),
    color:"black"
  },
  link_text:{
    color:"#0C42CC"
  }
})

export default TermsAgree