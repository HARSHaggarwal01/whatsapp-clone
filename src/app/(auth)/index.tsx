import { View, Text,StyleSheet ,Image ,ActivityIndicator} from 'react-native'
import React ,{useEffect, useState} from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "@/src/constants/imagePath";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {router} from "expo-router";

const Auth = () => {

    const [isLoading,setIsLoading] = useState(false);
    let navigate_to_welcome = () => {
        router.push('/(auth)/terms_agree');
    };

    let loading_timeout = () => {
        setIsLoading(true);
        setTimeout(navigate_to_welcome,5000);
    };

    useEffect(()=>{
        setTimeout(loading_timeout,2000);
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Image source={imagePath.logo} style={styles.logo} resizeMode="contain" />
                <Text style={styles.whatsapp}>Whatsapp</Text>
            </View>
            <View style={styles.footer}>
                {
                    isLoading ? (
                        <>
                            <ActivityIndicator size={moderateScale(45)} color={"#0CCC83"} />
                            <Text style={styles.loading}>Loading...</Text>
                        </>
                    ):(
                        <>
                            <Text style={styles.from_text}>from</Text>
                            <Text style={styles.facebook_text}>FACEBOOK</Text>
                        </>
                    )
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:verticalScale(50)
    },
    header:{},
    body:{
        alignItems:"center",
        gap:verticalScale(10)
    },
    footer:{
        alignItems:"center",
        height:verticalScale(80),
        justifyContent:"flex-end",

    },
    from_text:{
        fontSize:moderateScale(12),
        color:"#867373",
    },
    facebook_text:{
        fontSize:moderateScale(15),
        color:"#000000",
    },
    logo:{
        width:moderateScale(100),
        height:moderateScale(100),
        borderRadius:moderateScale(10)
    },
    whatsapp:{
        fontSize:moderateScale(35),
        fontWeight:"bold"
    },
    loading:{
        fontSize:moderateScale(18), //moderratescale set krta hai charo trf se size
        color:"#00A884",
        fontWeight:"bold",
        marginTop:verticalScale(10) //verticalScale set krta hai only vertically 
    }
})

export default Auth