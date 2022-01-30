import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import { db } from '../firebase';
import MenuItems from '../components/restaurantDetail/MenuItems';

const OrderCompleted = () => {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: 'Hot Dog',
                description: 'wiener in a bun',
                price: '$2.39',
                image: 'https://prod-dairyqueen.dotcmscloud.com/dA/efd1d0f786/fileAsset/classic-hot-dog.png/webp',
            },
        ],
    });
    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );
    const total = items
        .map((item) => Number(item.price.replace('$', ' ')))
        .reduce((prev, curr) => prev + curr, 0)
        .toFixed(2);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        const unsub = db
            .collection('orders')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => setLastOrder(doc.data()));
            });

        return () => unsub();
    }, []);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white',
                paddingTop:
                    Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            }}
        >
            <View style={{ margin: 15, alignItems: 'center', height: '100%' }}>
                <LottieView
                    style={{
                        height: 100,
                        alignSelf: 'center',
                        marginBottom: 30,
                    }}
                    source={require('../assets/animations/check-mark.json')}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Your order at {restaurantName} has been placed for $
                    {totalUSD}
                </Text>
                <ScrollView>
                    {<MenuItems foods={lastOrder.items} hideCheckbox={true} />}
                    <LottieView
                        style={{
                            height: 200,
                            alignSelf: 'center',
                        }}
                        source={require('../assets/animations/cooking.json')}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default OrderCompleted;
