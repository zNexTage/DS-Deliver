import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import OrdersApi from '../../Api/OrdersApi';
import Header from '../../Components/Header';
import Order from '../../Types/Order';
import OrderCard from './Components/OrderCard';

function Orders() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [orders, setOrders] = useState<Array<Order>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleOnPress = (order: Order): void => {
        navigation.navigate("OrderDetails", {
            order
        });
    }

    const fetchOrders = () => {
        setIsLoading(true);

        OrdersApi.fetchOrders()
            .then(response => {
                setOrders(response.data)
            }).catch(() => {
                Alert.alert("Houve um erro ao buscar os pedidos!");
            }).finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        if (isFocused) {
            fetchOrders();
        }

    }, [isFocused]);

    const orderItem = ({ item }: { item: Order }) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => handleOnPress(item)}
            >
                <OrderCard
                    order={item}
                />
            </TouchableWithoutFeedback>
        )
    }

    const orderExtractor = (item: Order, index: number) => {
        return `${item.id}`;
    }

    return (
        <>
            <Header />
            {
                isLoading ?
                    <View style={styles.isLoadingText}>
                        <Text>
                            Buscando Pedidos...
                            </Text>
                    </View> :
                    <View style={styles.container}>
                        <FlatList
                            data={orders}
                            renderItem={orderItem}
                            contentContainerStyle={{ flexGrow: 1 }}
                            keyExtractor={orderExtractor}
                        />
                    </View>
            }

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    isLoadingText: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export default Orders;