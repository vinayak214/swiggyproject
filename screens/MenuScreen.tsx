import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import FoodItem from '../components/FoodItem'
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";



const MenuScreen = () => {
    const cart = useSelector((state: any) => state.cart.cart);
    console.log("cart" + JSON.stringify(cart))
    const total = cart
    .map((item:any) => item.price * item.quantity)
    .reduce((curr:any, prev:any) => curr + prev, 0);

    const route: any = useRoute();
    const navigation: any = useNavigation();
    const [menu, setMenu] = useState("");
    const [modalVisible, setModalVisible]: any = useState(false)
    useEffect(() => {
        const fetchMenu = () => {
            setMenu(route.params.menu)
        }
    }, [])
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    return (
        <View>
            <ScrollView>
                <View style={{ height: 300, backgroundColor: "#B0C4DE", borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                        <Icons onPress={() => navigation.goBack()} name="arrow-back" size={23} color="black" />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name="search" size={24} color='black' />
                            <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 7 }}>Search</Text>
                        </View>
                    </View>
                    <View style={{ height: 210, backgroundColor: "white", borderRadius: 15, marginHorizontal: 20, marginVertical: 5, padding: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'black' }}>{route.params.name}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon style={{ marginHorizontal: 7 }} name="sharealt" size={23} color="black" />
                                <Icon name="hearto" size={23} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }}>
                            <Icons name="stars" size={24} color='green' />
                            <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: "bold", color: 'black' }}>{route.params.rating}.</Text>
                            <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: "bold", color: 'black' }}>{route.params.time}mins</Text>
                        </View>
                        <Text style={{ marginTop: 4, fontSize: 17, color: "gray" }}>{route.params.cuisines}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Outlet</Text>
                            <Text style={{ fontSize: 16, color: "gray", fontWeight: 'bold', margin: 5, marginLeft: 17 }}>{route.params.adress}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>22 mins</Text>
                            <Text style={{ fontSize: 16, color: "gray", fontWeight: 'bold', marginLeft: 5 }}>Home</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                marginTop: 12
                            }}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="bicycle" size={23} color="orange" />
                            <Text style={{ fontSize: 16, color: "gray", fontWeight: 'bold', marginLeft: 9 }}>0-3 Kms |</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', margin: 5, marginLeft: 10, color: 'black' }}>35 Delivery Fee will apply</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 15, marginTop: 5 }}>MENU</Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginTop: 12
                    }}
                />

                {/* {route.params.menu.map((item:any, index:any) => (
                <FoodItem item={item} key={index} />
            ))} */}
                <FlatList
                    data={route.params.menu}
                    scrollEnabled={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => (
                        <FoodItem item={item} key={index} />
                    )}>
                </FlatList>
            </ScrollView>
            <Pressable
                onPress={toggleModal}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 40,
                    justifyContent: "center",
                    backgroundColor: "black",
                    marginLeft: "auto",
                    position: "absolute",
                    bottom: 35,
                    right: 25,
                    alignContent: "center",
                }}>

                <MaterialIcons
                    style={{ textAlign: "center" }}
                    name="menu-book"
                    size={24}
                    color="white"
                />
            </Pressable>
            <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
                <View
                    style={{
                        height: 190,
                        width: 250,
                        backgroundColor: "black",
                        position: "absolute",
                        bottom: 35,
                        right: 10,
                        borderRadius: 7,
                    }}
                >
                    {route.params.menu.map((item: any, i: any) =>
                        <View style={{
                            padding: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        >
                            <Text style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 19 }}
                            >
                                {item.name}
                            </Text>
                            <Text
                                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 19 }}
                            >
                                {item.items.length}
                            </Text>
                        </View>)}
                </View>

            </Modal>
            {total === 0 ? null : (
                <Pressable
                    style={{
                        backgroundColor: "#00A877",
                        width: "90%",
                        padding: 13,
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: 30,
                        position: "absolute",
                        borderRadius: 8,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <View>
                            <Text
                                style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                            >
                                {cart.length} items | {total}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: "500",
                                    marginTop: 3,
                                    color: "white",
                                }}
                            >
                                Extra Charges may Apply!
                            </Text>
                        </View>

                        <Pressable
                            onPress={() =>
                                navigation.navigate("Cart", {
                                    name: route.params.name,
                                })
                            }
                        >
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
                                View Cart
                            </Text>
                        </Pressable>
                    </View>
                </Pressable>
            )}
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({})