import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const MenuScreen = () => {
    const route = useRoute();
    console.log(route.params)
    return (
        <View>
            <Text>MenuScreen</Text>
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({})