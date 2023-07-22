import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MenuComponent from "./MenuComponent";

const FoodItem = ({ item }: any) => {
    const data: any = [item];
    const [selected, setSelected] = useState([""]);
    const handleItemSelect = (item: any) => {
        // const itemSelected = selected.find((c) => c === item);
        // if(itemSelected){
        //     setSelected(selected.filter((sel) => sel !== item));
        // }else{
        //     setSelected([...selected,item]);
        // }
    }
    return (
        <View>
            {data.map((item: any, i: any) => (
                <>
                    <Pressable
                        onPress={() => handleItemSelect(item.name)}
                        style={{
                            margin: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            {item.name} ({item.items.length})
                        </Text>
                        <AntDesign name="down" size={24} color="black" />
                    </Pressable>
                    <FlatList
                        data={item.items}
                        scrollEnabled={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (
                            <MenuComponent food={item} key={index} />
                        )}>
                    </FlatList>
                    {/* {selected.includes(item.name) ? (
            item.items.map((food:any,index:any) => (
                <MenuComponent food={food} key={index}/>
            ))
        ) : (
            null
        )} */}

                </>
            ))}
        </View>
    );
};

export default FoodItem;

const styles = StyleSheet.create({});