import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItem = () => {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            <View
                style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
            >
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    );
};

const RestaurantImage = () => (
    <>
        <Image
            source={{
                uri: 'https://www.lironboylston.com/wp-content/uploads/2020/12/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
            }}
            style={{ width: '100%', height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color="white"
            />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = () => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignitems: 'center',
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                Farmhouse Kitchen Thai Cuisine
            </Text>
            <Text style={{ fontSize: 13, color: 'grey' }}>30-45 · min</Text>
        </View>
        <View
            style={{
                backgroundColor: '#eee',
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
            }}
        >
            <Text>4.5</Text>
        </View>
    </View>
);

export default RestaurantItem;
