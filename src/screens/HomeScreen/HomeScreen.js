import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header/Header'
import Categories from '../../component/Categories/Categories'
import SectionHeading from '../../component/SectionHeading/SectionHeading'
import DoctorList from '../../component/DoctorList/DoctorList'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const { navigate } = useNavigation();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <Header />
            <Categories />
            <SectionHeading title={'Top Doctors'} onPress={() => navigate('doctorList')} />
            <DoctorList horizontal />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})