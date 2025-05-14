import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import DoctorCard from '../../component/DoctorList/DoctorCard';

const BookAppointment = ({ route }) => {

    const { doctorId } = route?.params;

    const doctors = useSelector(state => state.doctors.data);

    const [selectedDoctor, setSelectedDoctor] = useState({});

    useEffect(() => {
        if (doctorId) {
            setSelectedDoctor(doctors.find(item => item.id === doctorId) || {});
        }
    }, [doctorId])


    console.log('selectedDoctor', doctorId, selectedDoctor)

    return (
        <View style={styles.container}>
            <Text style={styles.doctorHeading}>Doctor</Text>
            <DoctorCard
                {...selectedDoctor}
                style={styles.doctorCard}
                imageStyle={styles.doctorImage}
                contentContainer={styles.contentContainerStyle}
            />
        </View>
    )
}

export default BookAppointment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    doctorHeading: {
        fontSize: 16,
        fontWeight: '500'
    },
    doctorCard: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        flex: 0,
        paddingHorizontal: 5,
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        borderColor: '#76809F'
    },
    doctorImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    contentContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        gap: 8
    }
})