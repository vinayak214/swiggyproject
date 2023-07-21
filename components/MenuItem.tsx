import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const MenuItem = ({ item }: any) => {

    const navigation: any = useNavigation();
    return (
        <View style={{ margin: 10 }}>
            <Pressable onPress={() => navigation.navigate("Menu", {
                id: item.id,
                name: item.name,
                image: item.image,
                rating: item.rating,
                time: item.time,
                adress: item.adress,
                cost_for_two: item.cost_for_two,
                cuisines: item.cuisines,
                menu: item.menu,
            })} style={{ flexDirection: 'row' }}>
                <ImageBackground style={{
                    aspectRatio: 5 / 6,
                    height: 170,
                    borderRadius: 8,
                    borderColor: '#d35648',
                }} source={{
                    uri: item.image,
                }}>
                    <Icon style={{ marginLeft: 6, position: 'absolute', right: 14 }} name="star" size={20} />
                </ImageBackground>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ marginLeft: 3, fontSize: 16, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                        <Icon style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }} name="stars" size={22} color='green' />
                        <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>{item.rating}</Text>
                        <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>{item.time}mins</Text>
                    </View>
                    <Text style={{ marginLeft: 3, fontSize: 14, fontWeight: "400" }}>{item.adress}</Text>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                    }}
                    >
                        <View
                            style={{
                                backgroundColor: "#FFB6C1",
                                width: 22,
                                height: 22,
                                borderRadius: 11,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 13,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                ₹
                            </Text>
                        </View>

                        <Text
                            style={{
                                marginTop: 5,
                                marginLeft: 4,
                                fontSize: 16,
                                fontWeight: "500",
                            }}
                        >
                            {item.cost_for_two} for two
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <FontAwesome5 name="bicycle" size={23} color="orange" />
                        <Text style={{ marginLeft: 2, fontSize: 16 }}>FREE DELIVERY</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MenuItem

const styles = StyleSheet.create({})