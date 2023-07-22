import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../redux/cartReducer';




const MenuComponent = ({ food }) => {

    const dispatch = useDispatch();
    const [additems, setAddItems] = useState(0);
    const [selected, setSelected] = useState(false);
    const [defaultRating, setDefaultRating] = useState(2)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])
    const starImgFilled = "https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";
    const StarImgCorner = "https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true";

    const CustomRatingBar = () => {

        return (
            maxRating.map((item, key) => {

                return (
                    <TouchableOpacity
                        activeOpacity={0.7} key={item}
                        onPress={() => setDefaultRating(item)}>
                        <Image
                            style={styles.starImgStyle}
                            source={
                                item <= defaultRating
                                    ? { uri: starImgFilled }
                                    : { uri: StarImgCorner }
                            }>
                        </Image>
                    </TouchableOpacity>
                )
            })
        )
    }

    return (
        <View>
            <Pressable style={{
                margin: 10,
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: 'black' }}>{food.name}</Text>
                    <Text>{food.price}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <CustomRatingBar ></CustomRatingBar>
                    </View>
                    <Text style={{ width: 180, marginTop: 8, color: "gray", fontSize: 16 }}>
                        {food.description.length > 30
                            ? food.description.substr(0, 35) + "..."
                            : food.description}
                    </Text>
                </View>

                <Pressable style={{ marginRight: 10 }}>
                    <ImageBackground style={{
                        width: 120, height: 120, borderRadius: 8
                    }} source={{
                        uri: food.image,
                    }}>
                    </ImageBackground>
                    {selected ? (
                        <Pressable
                            style={{
                                position: "absolute",
                                top: 90,
                                left: 15,

                                flexDirection: "row",
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                alignItems: "center",
                                backgroundColor: "white",
                                borderRadius: 5,
                            }}
                        >
                            <Pressable onPress={() => {
                                if (additems === 1) {
                                    dispatch(removeFromCart(food))
                                    setSelected(false)
                                    setAddItems(0);
                                } else {
                                    setAddItems((c) => c - 1);
                                    dispatch(decrementQuantity(food))

                                }
                            }}>
                                <Text
                                    style={{
                                        fontSize: 25,
                                        color: "green",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    -
                                </Text>
                            </Pressable>

                            <Pressable>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "green",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    {additems}
                                </Text>
                            </Pressable>

                            <Pressable onPress={() => {
                                setAddItems((c) => c + 1);
                                dispatch(incrementQuantity(food))
                            }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "green",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    +
                                </Text>
                            </Pressable>
                        </Pressable>
                    ) : (<Pressable
                        onPress={
                            () => {
                                setSelected(true);
                                if (additems == 0) {
                                    setAddItems((c) => c + 1);
                                }
                                dispatch(addToCart(food));
                            }}
                        style={{
                            position: 'absolute',
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            paddingHorizontal: 25,
                            paddingVertical: 10,
                            alignSelf: 'center',
                            top: 90,
                            left: 20,
                            alignItems: 'center'
                        }}>
                        <Text style={{ color: "green", fontSize: 18, fontWeight: 'bold' }}>ADD</Text>
                    </Pressable>
                    )}

                </Pressable>
            </Pressable>

        </View >
    )
}

export default MenuComponent

const styles = StyleSheet.create({
    starImgStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    }
})
