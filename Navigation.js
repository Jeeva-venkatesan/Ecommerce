import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './src/screens/Onboarding/Onboarding';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import OtpVerification from './src/screens/OtpVerification/OtpVerification';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import DoctorList from './src/component/DoctorList/DoctorList';
import DoctorDetails from './src/screens/DoctorDetails/DoctorDetails';
import BookAppointment from './src/screens/BookAppointment/BookAppointment';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='onboarding'>
        <Stack.Screen
          name='onboarding'
          component={Onboarding}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='loginScreen'
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='otpVerify'
          component={OtpVerification}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='homeScreen'
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='SearchScreen'
          component={SearchScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='doctorList'
          component={DoctorList}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='doctorDetails'
          component={DoctorDetails}
          options={{
            headerTitle: "",
            headerBackTitle: "Back"
          }}
        />
        <Stack.Screen
          name='bookAppointment'
          component={BookAppointment}
          options={{
            headerTitle: "Appointment",
            headerBackTitle: "Back"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})