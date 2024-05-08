import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { Ionicons } from '@expo/vector-icons';
import OtpScreen from './screens/OtpScreen';

import useAuthStore from './stores/AuthStore';

const Stack = createNativeStackNavigator();
export default function App() {

  const {isAuthenticated} = useAuthStore();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {isAuthenticated ? <>
      
        <Stack.Screen name="Home" component={HomeScreen} />
      
      </> : 
      
      <>
      <Stack.Screen name ="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Otp" component={OtpScreen} options={{headerShown:false}} />
      <Stack.Screen name ="Signup" component={SignupScreen} options={ ({navigation}) => ({headerTitle:"",headerTransparent:true,presentation:"modal", headerLeft:() =>   (<TouchableOpacity
          className='h-10 w-10 items-center justify-center ml-[-10px]'
          style={{ backgroundColor: '#fff', borderRadius: 20, padding: 1 }}
          onPress={() => {
            navigation.goBack();
          }}>
            <Ionicons name="close-outline" size={28} color={"#000"} />
          </TouchableOpacity>)})}/>
          </>}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

