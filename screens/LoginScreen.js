import { View, Text, KeyboardAvoidingView, TextInput, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuthStore from '../stores/AuthStore';
import validator from "validator"

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const login = useAuthStore((state) => state.login);

    
    const handleLogin = async () => {

        if(!validator.isEmail(email)){
            setEmailError("Email format is incorrect!");
            setEmail("");
            return;
        }
        else{
            setEmailError("");
        }
        try{

            
            //using a temporary login backdoor
               await login(email,password);
                console.log("Login done");

                navigation.navigate("Home")
            
        }catch(err){
            console.log("Error while logging in: ",err)
        }
    }
  return (

      <KeyboardAvoidingView behavior='padding' className="h-[100vh] w-full flex justify-center items-center bg-blue-900" >

        <View className='flex items-center'>
        <Image className="h-24 w-24" source={{uri:"https://static.wixstatic.com/media/cff951_ba467bbbdc2843f5978467cc20cef375~mv2.png/v1/fill/w_70,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cff951_ba467bbbdc2843f5978467cc20cef375~mv2.png"}} />

            <View className='flex flex-row items-center space-x-3'>
                <View className='flex  justify-start items-center space-y-1'>
            <Text className='text-5xl text-white font-bold'>WissenMonk</Text>
            <Text className='text-white text-md font-semibold'>Unveil the wisdom of words</Text>
                </View>
            </View>

            <View className='flex items-center mt-10 space-y-5'>
                <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder='Email' className='h-14 w-80 text-center align-top text-black bg-white p-2 rounded-lg '/>
                {emailError.length>0 && <Text className="text-red-600 text-sm text-center">{emailError}</Text>}
                <TextInput value={password} placeholder='Password' onChangeText={(e)=>setPassword(e)} secureTextEntry={true} className='h-14 w-80 text-black bg-white p-4 rounded-lg text-center'/>

                <Pressable className='bg-gray-400 text-black p-4 h-14 w-80 items-center rounded-lg justify-center' onPress = {handleLogin}>
                    <Text className='text-lg font-bold tracking-widest'>Login</Text>
                </Pressable>
            </View>

            <View className="flex-row space-x-1 mt-2">
        <Text className='text-white text-md'>Not a member yet?</Text>
        <Pressable onPress={()=>navigation.push("Signup")} >
          <Text className="underline font-semibold text-white text-md">Sign up here.</Text>
        </Pressable>

       
      </View>
        </View>
      </KeyboardAvoidingView>
    
  )
}

export default LoginScreen