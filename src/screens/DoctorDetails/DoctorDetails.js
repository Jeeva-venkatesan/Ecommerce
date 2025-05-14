import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorById } from '../../store/Slices/doctorSlice';
import Button from '../../component/Button';
import DoctorCard from '../../component/DoctorList/DoctorCard';
import { metricsDoctor } from './constant';
import { COLORS } from '../../styles/color';

const DoctorDetails = ({ route }) => {
    const { doctorId } = route?.params;
    const doctors = useSelector(state => state.doctors.data);

    const [selectedDoctor, setSelectedDoctor] = useState({});

    useEffect(() => {
        if (doctorId) {
            setSelectedDoctor(doctors.find(item => item.id === doctorId) || {});
        }
    }, [doctorId])

    const { navigate } = useNavigation();

    return (
        <View style={{
            flex: 1
        }}>
            <ScrollView style={styles.container}>
                {/* <View style={styles.header}>
                <Button onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={require('../../assets/img/back.png')}
                    />
                </Button>
            </View> */}
                <View>
                    <DoctorCard {...selectedDoctor} style={{
                        width: '100%'
                    }} displayAll imageStyle={{
                        height: 350
                    }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 5
                }}>
                    {
                        metricsDoctor.map((item, i) => (
                            <View key={i} style={{
                                alignItems: 'center'
                            }}>
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={item.icon}
                                    />
                                </View>
                                <Text>{item.label}</Text>
                                <Text>{item.title}</Text>
                            </View>
                        ))
                    }
                </View>
                <Text style={{
                    fontSize: 18, paddingVertical: 10,
                    fontWeight: '500'
                }}>{'About Me'}</Text>
                <Text style={{
                    paddingVertical: 5
                }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</Text>
            </ScrollView>
            <View style={{
                position: 'absolute',
                bottom: 10,
                width: '100%',
                padding: 10
            }}>
                <Button onPress={() => {
                    navigate('bookAppointment', {
                        doctorId: selectedDoctor.id
                    })
                }} label={'Book an Appointment'} style={{
                    backgroundColor: COLORS.PRIMARY
                }} />
            </View>
        </View>
    )
}

export default DoctorDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 60,
        paddingHorizontal: 5
    },
    imageContainer: {
        borderRadius: '50%',
        backgroundColor: '#EDEDFC',
        height: 42,
        width: 42,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    }
})