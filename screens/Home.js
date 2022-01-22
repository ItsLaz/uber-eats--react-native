import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Platform,
} from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

const Home = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.HeaderView}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
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
