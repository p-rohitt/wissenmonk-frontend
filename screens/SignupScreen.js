import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Image } from 'react-native'
import React, { useState } from 'react'
import validator from 'validator'







const SignupScreen = ({navigation}) => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errorMsg,setErrorMsg] = useState("");

    const handleSignup =  () => {
        if(username.length===0){
            setErrorMsg("Username cannot be empty!");
            return;
        } 
        if(email.length===0){
            setErrorMsg("Email cannot be empty!");
            return;
        }
        if(password.length ===0 || confirmPassword.length ===0){
            setErrorMsg("Please enter all fields!");
            return;
        }
        if(!validator.isEmail(email)){
                setErrorMsg("Email format is incorrect!");
                return;
        }
            if(password.length <8){
                setErrorMsg("Password should at least be 8 characters!");
                return
            }
        if(!validator.isStrongPassword(password)){
           setErrorMsg("Password should minimum contain 1 uppercase, 1 lowercase  1 symbol and 1 number.")
           return;
        }

        if(password !== confirmPassword){
            setErrorMsg("Passwords do not match!");
            return;
        }

        try{
            setErrorMsg("");
            signup(username,email,password);
            console.log("Signup done");
        }catch(err){
            console.log("Error while signing up: ",err)
        }


        console.log("Button clicked");
        navigation.goBack();
        navigation.navigate("Otp");
        
        }
  return (
    <KeyboardAvoidingView behavior='padding' className="h-[100vh] w-full flex justify-center items-center bg-blue-900" >

    <View className='flex items-center'>
    {/* <Image className="h-24 w-24" source={{uri:"https://static.wixstatic.com/media/cff951_ba467bbbdc2843f5978467cc20cef375~mv2.png/v1/fill/w_70,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cff951_ba467bbbdc2843f5978467cc20cef375~mv2.png"}} /> */}

        <View className='flex flex-row items-center space-x-3'>
            <View className='flex  justify-start items-center space-y-1'>
              <Text className='text-3xl text-white font-semibold'>Be a</Text>
        <Text className='text-4xl text-white font-bold'>WissenMonk</Text>
        <Text className='text-3xl text-white font-semibold'>today.</Text>
        {/* <Text className='text-white text-md font-semibold'>Unveil the wisdom of words</Text> */}
            </View>
        </View>

        <View className='flex items-center mt-10 space-y-4'>
           
            <TextInput value ={username} onChangeText = {(e)=>setUsername(e)}placeholder='Username' className='h-14 w-80 text-center align-top text-black bg-white p-2 rounded-lg border-2'/>
            <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder='Email' className='h-14 w-80 text-center align-top text-black bg-white p-2 rounded-lg border-2'/>

            <TextInput value={password} onChangeText={(e)=>setPassword(e)}  placeholder='Password'  secureTextEntry={true} className='h-14 w-80 text-black bg-white p-4 rounded-lg border-2 text-center'/>
            <TextInput value={confirmPassword} onChangeText={(e)=>setConfirmPassword(e)}  placeholder='Confirm Password'  secureTextEntry={true} className='h-14 w-80 text-black bg-white p-4 rounded-lg border-2 text-center'/>
            {errorMsg.length >0 && <Text className="text-lg text-red-500 font-semibold">{errorMsg}</Text>}
            <Pressable onPress =  {handleSignup} className='bg-gray-400 text-black p-4 h-14 w-80 items-center rounded-lg justify-center'>
                <Text className='text-lg font-bold tracking-widest'>Signup</Text>
            </Pressable>
        </View>

        {/* <View className="flex-row space-x-1 mt-2">
    <Text className='text-white text-md'>Not a member yet?</Text>
    <Link href={"/signup"}>
      <Text className="underline font-semibold text-white text-md">Sign up here.</Text>
    </Link>
  </View> */}
    </View>
  </KeyboardAvoidingView>
  )
}

export default SignupScreen