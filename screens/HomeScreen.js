import { View, Text, Pressable } from 'react-native'
import React from 'react'
import useAuthStore from '../stores/AuthStore'

const HomeScreen = () => {

  const logout = useAuthStore((state) => state.logout)
  const {user,token} = useAuthStore();
  const handleLogout = () => {

    logout();


  }
  return (
    <View className= "h-full w-full justify-center flex items-center bg-blue-900 text-white">
      <Text className="text-white">HomeScreen</Text>
      <Pressable onPress = {handleLogout} className="p-4 h-20 w-44 bg-orange-500 items-center justify-center rounded-lg">
        <Text className="text-white text-3xl">Logout</Text>
      </Pressable>

      <Text className="text-white">{user.username}</Text>
      <Text className="text-white">{user.email}</Text>
      <Text className="text-white">{token}</Text>
    </View>
  )
}

export default HomeScreen