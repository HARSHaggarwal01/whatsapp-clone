import { View, Text, TouchableOpacity,StyleSheet,ActivityIndicator } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const ButtonComp = ({title,onPress,isLoading,style}:any) => {
  return (
    <>
    {isLoading ? (
        <ActivityIndicator size={moderateScale(20)} color={"#0CCC83"}/>
      ) : (
        <TouchableOpacity style={[styles.btn,style]} activeOpacity={0.8} onPress={onPress}>
          <Text style={styles.btn_text}>{title}</Text>
        </TouchableOpacity>
      )
    }
    </>
    
  )
}

const styles = StyleSheet.create({

  btn:{
    backgroundColor:"#00A884",
    width:"100%",
    paddingVertical:verticalScale(10),
    paddingHorizontal:scale(10),
    borderRadius:moderateScale(10),
  },
  btn_text:{
    fontSize:moderateScale(14),
    color:"white",
    textAlign:"center"
  }
})

export default ButtonComp