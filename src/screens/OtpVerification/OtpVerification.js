import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { OtpInput } from 'react-native-otp-entry'
import Button from '../../component/Button';
import { useNavigation } from '@react-navigation/native';

const OtpVerification = ({ route }) => {

  const { mobileNumber } = route?.params;
  const [counter, setCounter] = useState(30);
  const { navigate } = useNavigation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onChangeText = useCallback((text) => {

  }, [])

  const onOTPFilled = useCallback((text) => {
    console.log('received', text);
    navigate('homeScreen')
  }, [])

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <View style={{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 18
        }}>{"We've sent a verification code to"}</Text>
        <Text style={{
          fontSize: 18,
          fontWeight: 18
        }}>+91-{mobileNumber}</Text>
      </View>
      <View style={{
        margin: 20
      }}>
        <OtpInput numberOfDigits={6} onTextChange={onChangeText}
          onFilled={onOTPFilled}
        />
      </View>

      {counter > 0 && <Text style={{
        alignSelf: 'center',
        marginTop: 20
      }}>Resend OTP in {counter}s</Text>}
      {
        counter === 0 &&
        <Button style={{
        }}>
          <Text style={{
            fontSize: 18,
            color: 'black'
          }}>{'Resend'}</Text>
        </Button>
      }

    </View>
  )
}

export default OtpVerification

const styles = StyleSheet.create({})