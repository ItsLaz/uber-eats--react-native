import { View, Text, Image } from 'react-native';
import React from 'react';

const image =
    'https://images.squarespace-cdn.com/content/v1/55426312e4b0cf1b9ec75236/1600121675632-RCFZ3XAFB2SEDOGA9VV8/_ES11693.png?format=2500w';
const title = 'Farmhouse Kitchen Thai Cuisine';
const description = 'Thai · Comfort Food · $$ · 🎫 · 4⭐ (2912+)';

const About = () => {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    );
};

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{ width: '100%', height: 180 }}
    />
);
const RestaurantTitle = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: 'bold',
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.title}
    </Text>
);
const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: 'bold',
            fontSize: 15.5,
        }}
    >
        {props.description}
    </Text>
);
export default About;
