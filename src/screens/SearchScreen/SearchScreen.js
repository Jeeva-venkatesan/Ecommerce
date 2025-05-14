import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { COLORS } from '../../styles/color'
import SearchBar from '../../component/SearchBar/SearchBar'
import Button from '../../component/Button'

const SearchScreen = () => {

    const onChange = useCallback((text) => {
        console.log('Search', text);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar onChange={onChange} />
            </View>
            <View style={styles.subContainer}>
                <Text>Recent Searches</Text>
                <TouchableOpacity style={styles.clearButton}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
            </View>

            {/* list of recent searches */}

        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    searchContainer: {
        backgroundColor: COLORS.PRIMARY,
        height: 65,
        alignItems: 'center'
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    clearButton: {

    },
    clearText: {
        color: COLORS.PRIMARY,
        fontWeight: 'bold'
    }
})