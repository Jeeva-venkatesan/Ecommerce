import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OtpVerification = ({mobileNumber}) => {
  return (
    <View style={{
        flex:1,
        backgroundColor : 'white'
    }}>
        <View>
      <Text>{"We've sent a verification code to"}</Text>
      <Text sytle={{}}>{mobileNumber}</Text>
        </View>
        <View style={{
            marginTop:20
        }}>
        </View>
    </View>
  )
}

export default OtpVerification

const styles = StyleSheet.create({})