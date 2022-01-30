import { View, Text } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
    {
        title: 'Chicken Strip Basket',
        description: '4 pieces of chicken, fries, gravy, and toast',
        price: '$7.99',
        image: 'https://prod-dairyqueen.dotcmscloud.com/dA/458c596789/fileAsset/chicken-strip-basket-4pc.png/webp',
    },
    {
        title: 'Cripsy Chicken Sandwich',
        description:
            'juicy chicken on a toasted bun with lettuce, tomato, and mayo',
        price: '$5.29',
        image: 'https://prod-dairyqueen.dotcmscloud.com/dA/b818473ce0/fileAsset/crispy-chicken-sandwich.png/webp',
    },
    {
        title: 'FlameThrower Grillburger',
        description:
            'half-pound beef, pepperjack cheese, flamethrower sauce, jalapeno bacon, lettuce, and tomato',
        price: '$8.49',
        image: 'https://prod-dairyqueen.dotcmscloud.com/dA/cf401e7fc7/fileAsset/half-pound-flamethrower-grillburger.png/webp',
    },
    {
        title: 'Hot Dog',
        description: 'wiener in a bun',
        price: '$2.39',
        image: 'https://prod-dairyqueen.dotcmscloud.com/dA/efd1d0f786/fileAsset/classic-hot-dog.png/webp',
    },
    {
        title: 'Dipped Strawberry Blizzard',
        description: 'soft server vanilla, strawberries, and choco chunks',
        price: '$3.89',
        image: 'https://prod-dairyqueen.dotcmscloud.com/dA/21b57de4ae/fileAsset/chocolate-dipped-strawberry-blizzard.png/webp',
    },
];

const RestaurantDetail = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <About route={route} />
            <Divider width={1.8} style={{ marginTop: 20 }} />
            <MenuItems restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    );
};

export default RestaurantDetail;
