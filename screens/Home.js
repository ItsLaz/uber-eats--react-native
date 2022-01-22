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

const Home = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <HeaderTabs />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
export default Home;
