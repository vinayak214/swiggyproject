import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const MenuComponent = ({ food }: any) => {

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
    console.log("MenuComponent" + JSON.stringify(food))

    return (
        <Pressable style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <View>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>{food.name}</Text>
                <Text>{food.price}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <CustomRatingBar></CustomRatingBar>
                </View>
                <Text
                    style={{ width: 180, marginTop: 8, color: "gray", fontSize: 16 }}
                >{food.description.length > 30 ? food.description.substr(0, 30) + "..." : food.description}</Text>
            </View>
        </Pressable>
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