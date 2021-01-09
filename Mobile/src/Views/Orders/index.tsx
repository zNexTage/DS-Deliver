import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../Components/Header';
import OrderCard from './Components/OrderCard';

function Orders() {
    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: '5%',
        paddingRight: '5%'
    }
});

export default Orders;