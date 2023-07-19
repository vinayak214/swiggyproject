import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import quickfood from '../data/quickfood'
import Icon from 'react-native-vector-icons/MaterialIcons'

const QuickFood = () => {
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ fontWeight: "500", fontSize: 16 }}>Get it Quickly</Text>
            <FlatList
                horizontal
                data={quickfood}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Pressable style={{ margin: 10 }}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 6 }}
                            source={{ uri: item.image }}
                            style={{
                                aspectRatio: 5 / 6,
                                height: 170,
                                borderColor: '#d35647',
                                resizeMode: 'contain',
                            }}
                        >
                            <Text style={{ position: 'absolute', bottom: 10, left: 10, color: 'white', fontSize: 28, fontWeight: 900 }}>{item.offer}OFF</Text>
                        </ImageBackground>
                        <Text style={{ fontWeight: "500", fontSize: 16 }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon style={{ marginLeft: 3 }} name="stars" size={24} color='green' />
                            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "500" }}>{item.rating}.</Text>
                            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "500" }}>{item.time}mins</Text>
                        </View>
                    </Pressable>
                )}></FlatList>
        </View>
    )
}

export default QuickFood

const styles = StyleSheet.create({})