import { View, Text, StyleSheet, KeyboardAvoidingView, Pressable } from 'react-native'
import React, { useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { SafeAreaView } from 'react-native-safe-area-context'

import {OtpInput} from "react-native-otp-entry"

const OtpScreen = ({navigation}) => {
    const [otp,setOtp] = useState("")
    const [errorMsg,setErrorMsg] = useState("");
    const handleOtpSubmit = () => {
      if(otp.length ===0){
        setErrorMsg("Otp cannot be empty");
        return;
      }

      try{
          console.log("Will send a post request here to verify otp");

          console.log("Otp successful");
          navigation.navigate("Home")
      }catch(err){
          console.log("Otp verification unsuccessful!", err);
      }
    }
  return (
    <KeyboardAvoidingView behavior='padding' className="h-[100vh] w-full flex justify-center items-center bg-blue-900" >
        <View className="w-full justify-evenly items-center h-[50vh] ">

    <Text className= "text-2xl text-white font-semibold">We've sent you an OTP at your registered email.</Text>
    

    <Text className="text-2xl text-white font-bold ">Enter OTP</Text>
    <OtpInput numberOfDigits={6} onTextChange={(text) => setOtp(text)} theme={{containerStyle: styles.container,inputsContainerStyle:styles.inputsContainer, pinCodeTextStyle:styles.pinCodeText}} />
   
        </View>
        <Pressable  className='bg-gray-400 text-black p-4 h-14 w-80 items-center rounded-lg justify-center' onPress = {handleOtpSubmit}>
                <Text className='text-lg font-bold tracking-widest'>Submit</Text>
            </Pressable>
      
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },
  
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
    container:{
        
    },
    inputsContainer:{
        justifyContent:"space-evenly"
    },
    pinCodeText:{
        color:"#FFF"
    }
  });

export default OtpScreen


