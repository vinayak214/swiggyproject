import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Carouse from '../components/Carouse'
import FoodTypes from '../components/FoodTypes'
import QuickFood from '../components/QuickFood'
import MenuItem from '../components/MenuItem'
import hotel from '../data/hotel'

const HomeScreen = () => {
    return (
        <ScrollView>
            <View>
                {/* SearchBar */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, margin: 10, padding: 0, borderColor: "#C0C0C0", borderRadius: 7 }}>
                    <TextInput style={{ fontSize: 17 }} placeholder='Search for Restaurant item or more' />
                    <Icon name="search" size={24} color='#E52B50' />
                </View>
                {/* Image Slider Componen */}
                <Carouse></Carouse>
                {/* Food item Types */}
                <FoodTypes></FoodTypes>
                {/* Quick Food Types */}
                <QuickFood></QuickFood>
                {/* FIlter buttons */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Pressable style={{
                        flexDirection: 'row',
                        marginHorizontal: 10,
                        alignItems: "center",
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#D0D0D0',
                        justifyContent: 'center',
                        padding: 10,
                        width: 120
                    }}>
                        <Text>Filter</Text>
                        <Icon style={{ marginLeft: 6 }} name="settings" size={15} color='black' />
                    </Pressable>
                    <Pressable style={{ flexDirection: 'row', marginHorizontal: 0, alignItems: "center", borderWidth: 1, borderRadius: 20, borderColor: '#D0D0D0', justifyContent: 'center', padding: 10 }}>
                        <Text>Sort By rating</Text>
                    </Pressable>
                    <Pressable style={{ flexDirection: 'row', marginHorizontal: 0, alignItems: "center", borderWidth: 1, borderRadius: 20, borderColor: '#D0D0D0', justifyContent: 'center', padding: 10 }}>
                        <Text>sort By Price</Text>
                    </Pressable>
                </View>
                <FlatList
                    data={hotel}
                    scrollEnabled={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <MenuItem item={item} />
                    )}>
                </FlatList>

            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})