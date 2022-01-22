import {
    View,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Platform,
    ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';
import BottomTabs from '../components/BottomTabs';
import { Divider } from 'react-native-elements';

const YELP_API_KEY =
    '4VBm58bz9JlkQlnd0qAikILTGgSDZF84ZGf3N6Fy6oQdOosYjiy_5H9DQ-3zMy6GI-wlpvGlKH9_A-Qdk-c5VtoSnuG8L3s5H-Pr_IzM7wAJGgZHNb8mG8jZd6jrYXYx';

const Home = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [city, setCity] = useState('San Francisco');
    const [activeTab, setActiveTab] = useState('Delivery');

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.HeaderView}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    HeaderView: {
        backgroundColor: 'white',
        padding: 15,
    },
});
export default Home;
