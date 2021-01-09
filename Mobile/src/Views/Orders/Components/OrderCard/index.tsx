import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Order from '../../../../Types/Order';
import Product from '../../../../Types/Product';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'intl';
import 'intl/locale-data/jsonp/en';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

type Props = {
    order: Order;
}

const dateFromNow = (date: string) => dayjs(date).fromNow();

const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: "BRL",
        minimumFractionDigits: 2
    })

    return formatter.format(price)
}

function OrderCard({ order }: Props) {

    const productItem = ({ item }: { item: Product }) => {
        return (
            <Text style={styles.text}>
                {item.name}
            </Text>
        )
    }

    const productExtractor = (item: Product, index: number): string => {
        return `${item.id}`;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.orderName}>
                    Pedido {order.id}
                </Text>
                <Text style={styles.orderPrice}>
                    {formatPrice(order.total)}
                </Text>
            </View>
            <Text style={styles.text}>
                {dateFromNow(order.moment)}
            </Text>
            <View style={styles.productsList}>
                <FlatList
                    data={order.products}
                    renderItem={productItem}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyExtractor={productExtractor}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '2%',
        marginTop: '10%',
        marginBottom: '2%',
        padding: 15,
        backgroundColor: '#FFF',
        shadowOpacity: 0.25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 20,
        borderRadius: 10,
        elevation: 5,
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.24,
        color: '#9E9E9E',
        fontFamily: 'OpenSans_400Regular'
    },
    orderName: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#263238',
        fontFamily: 'OpenSans_700Bold'
    },
    orderPrice: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'right',
        letterSpacing: -0.24,
        color: '#DA5C5C',
        fontFamily: 'OpenSans_700Bold'
    },
    productsList: {
        borderTopColor: '#E6E6E6',
        borderTopWidth: 1,
        marginTop: 20,
        paddingTop: 15
    }
})


export default OrderCard;
