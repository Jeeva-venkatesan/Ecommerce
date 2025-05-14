import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { specialist } from '../../data/appContent';

const cardGap = 16;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2

const DoctorCard = ({ name, image, horizontal, id, speciality, style, displayAll, imageStyle, contentContainer, ...props }) => {

    const { navigate } = useNavigation();

    const specialityObj = useMemo(() => {
        return specialist?.find(item => item?.id === speciality)
    }, [speciality]);

    console.log('specialityObj', specialityObj)

    return (
        <TouchableOpacity onPress={() => navigate('doctorDetails', {
            doctorId: id
        })} style={[styles.container, style]}>
            <Image
                source={{ uri: image }}
                style={[styles.image,
                !horizontal ? { height: 220 } : {},
                imageStyle ? imageStyle : {}
                ]}
            />
            <View style={[{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                padding: 5,
                alignItems: 'center'
            }, contentContainer]}>
                <Text style={[styles.nameText]}>{name}</Text>
                <View style={[{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }]}>
                    <Image
                        source={require('../../assets/img/star.png')}
                    />
                    <Text>{props.rating}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 5
                }}>
                    {
                        displayAll &&
                        <Text style={{
                            paddingRight: 10
                        }}>{specialityObj?.title || 'no'}</Text>
                    }
                    {
                        !displayAll &&
                        <Text>Fee ${props?.fee}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DoctorCard

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,
        width: cardWidth
    },
    image: {
        height: '48%',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    nameText: {
        fontSize: 14,
        fontWeight: '400',
        width: '70%'
    }
})