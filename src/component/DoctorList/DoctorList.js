import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import DoctorCard from './DoctorCard';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';

const DoctorList = ({ horizontal }) => {
    const navigation = useNavigation();
    const { data, loading, error } = useSelector(state => state.doctors)

    return (
        <View style={styles.container}>
            {
                !horizontal &&
                <View style={styles.header}>
                    <Button onPress={() => {
                        navigation.goBack();
                    }}>
                        <Image
                            source={require('../../assets/img/back.png')}
                        />
                    </Button>
                </View>
            }
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                horizontal={horizontal}
                numColumns={!horizontal && 2}
                columnWrapperStyle={!horizontal && {
                    justifyContent: 'space-between',
                    flex: 1,
                    gap: 12
                }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <DoctorCard key={item.id} {...item}
                    horizontal={horizontal}
                />}
                style={styles.container}
                contentContainerStyle={{
                    gap: 16
                }}
            />
        </View>
    )
}

export default DoctorList

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 60,
        paddingHorizontal: 5
    }
})