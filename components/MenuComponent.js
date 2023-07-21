import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const MenuComponent = ({ food }) => {
    console.log("MenuComponent")

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
        <View>
            <Pressable style={{
                margin: 10,
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "600",color:'black' }}>{food.name}</Text>
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

                <Pressable style={{marginRight:10}}>
                    <ImageBackground style={{
                        width: 120, height: 120, borderRadius: 8
                    }} source={{
                        uri: food.image,
                    }}>
                    </ImageBackground>
                    <Pressable
                     style={{
                        position:'absolute',
                        flexDirection:'row',
                        backgroundColor:'white',
                        paddingHorizontal:25,
                        paddingVertical:10,
                        alignSelf:'center',
                        top:90,
                        left:20,
                        alignItems:'center'
                     }}>
                        <Text style={{color:"green",fontSize:18,fontWeight:'bold'}}>ADD</Text>
                    </Pressable>
                </Pressable>
            </Pressable>

        </View>
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
