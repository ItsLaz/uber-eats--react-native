import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

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

const MenuItems = ({ restaurantName }) => {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) =>
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...item,
                restaurantName: restaurantName,
                checkboxValue: checkboxValue,
            },
        });

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.title === food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItem}>
                        <BouncyCheckbox
                            iconStyle={{
                                borderColor: 'lightgray',
                                borderRadius: 0,
                            }}
                            fillColor="green"
                            onPress={(checkboxValue) =>
                                selectItem(food, checkboxValue)
                            }
                            isChecked={isFoodInCart(food, cartItems)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider
                        width={0.5}
                        orientation="vertical"
                        style={{ marginHorizontal: 20 }}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.title}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image
            style={{ width: 100, height: 100, borderRadius: 8 }}
            source={{ uri: props.food.image }}
        />
    </View>
);

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
});

export default MenuItems;
