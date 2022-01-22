import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState('Delivery');

    return (
        <View style={styles.HeaderButtonView}>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    );
};

const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            style={stylesProps(props).HeaderButton}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={stylesProps(props).HeaderButtonText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    HeaderButtonView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
});

const stylesProps = (props) =>
    StyleSheet.create({
        HeaderButton: {
            backgroundColor: props.activeTab === props.text ? 'black' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        },
        HeaderButtonText: {
            color: props.activeTab === props.text ? 'white' : 'black',
            fontSize: 15,
            fontWeight: 'bold',
        },
    });
export default HeaderTabs;
