import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from './src/screens/Onboarding/Onboarding'
import Navigation from './Navigation'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex : 1
  }
})