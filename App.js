import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from './src/screens/Onboarding/Onboarding'
import Navigation from './Navigation'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})