import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from '../../component/Button'


const LoginScreen = () => {
  return (
    <View style={{
      flex: 1
    }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'black'
        }}
      >
        <View style={{
          flex: 0.6,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
          <Image
            source={require('../../assets/img/facility.png')}
            style={{
              width: '100%'
            }}
            resizeMode='contain'
          />
        </View>
        <View style={{
          flex: 0.45,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold',
              paddingVertical: 10
            }}>Log in or sign up</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            height: 50,
            borderColor: 'gray',
            borderWidth: 2,
            alignItems: 'center',
            margin: 10,
            borderRadius: 10
          }}>
            <Text style={{
              fontSize: 18,
              paddingHorizontal: 10
            }}>{'+91'}</Text>
            <TextInput style={{
              padding: 10,
              fontSize: 18
            }}
              keyboardType='numeric'
              placeholder='Phone Number'
              maxLength={10}
            />

          </View>
          <View style={{
            width: '100%',
            paddingVertical: 15,
            paddingHorizontal: 10
          }}>
            <Button label={'LogIn with Mobile'} style={{
              backgroundColor: 'black'
            }} />
          </View>
        </View>
        <View style={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          padding: 10
        }}>
          <Button style={{
            backgroundColor: 'white',
            flexDirection:'row',
            gap:4,
            borderColor:'#939393',
            borderWidth:2
          }}>
            <Image 
              source={require('../../assets/img/google_icon.png')}
              style={{

              }}
            />
            <Text style={{
              color:'black',
              fontSize:18
            }}>Continue with Google</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})