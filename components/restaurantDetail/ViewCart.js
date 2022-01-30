import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { db, firebase } from '../../firebase';

const ViewCart = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

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

    const addOrderToFirebase = () => {
        db.collection('orders').add({
            items: items,
            restaurantName: restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setModalVisible(false);
        navigation.navigate('OrderCompleted');
    };

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)',
        },
        modalCheckoutContainer: {
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 10,
        },
        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            padding: 20,
        },
        subtotalText: {
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 15,
            marginBottom: 10,
        },
    });

    const checkoutModalContent = () => (
        <>
            <View style={styles.modalContainer}>
                <View style={styles.modalCheckoutContainer}>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                    {items.map((item, index) => (
                        <OrderItem key={index} item={item} />
                    ))}
                    <View style={styles.subtotalContainer}>
                        <Text style={styles.subtotalText}>Subtotal</Text>
                        <Text>${totalUSD}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'black',
                                alignItems: 'center',
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative',
                            }}
                            onPress={() => addOrderToFirebase()}
                        >
                            <Text style={{ color: 'white', fontSize: 20 }}>
                                Checkout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 70,
                        zIndex: 999,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                backgroundColor: 'black',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative',
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginRight: 'auto',
                                    marginLeft: 'auto',
                                }}
                            >
                                View Cart
                            </Text>
                            <Text style={{ color: 'white', fontSize: 20 }}>
                                ${totalUSD}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
        </>
    );
};

export default ViewCart;
