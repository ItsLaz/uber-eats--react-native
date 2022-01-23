import { View, Text, Image } from 'react-native';
import React from 'react';

const yelpRestaurantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: 'https://images.squarespace-cdn.com/content/v1/55426312e4b0cf1b9ec75236/1600121675632-RCFZ3XAFB2SEDOGA9VV8/_ES11693.png?format=2500w',
    price: '$$',
    reviews: '1500',
    rating: 4.5,
    categories: [{ title: 'Thai' }, { title: 'Comfort Food' }],
};

const About = (props) => {
    const { name, image, price, reviews, rating, categories } =
        props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(' · ');
    const description = `${formattedCategories} ${
        price ? ' · ' + price : ''
    } · 🎫 · ${rating}⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
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
const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: 'bold',
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.name}
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
