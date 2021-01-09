import React from 'react';
import { Alert, StyleSheet, Text, View, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';
import Order from '../../Types/Order';
import OrderCard from '../Orders/Components/OrderCard';
import DefaultButton from '../../Components/DefaultButton';
import OrdersApi from '../../Api/OrdersApi';

type Props = {
    route: {
        params: {
            order: Order
        }
    }
}

function OrderDetails({ route }: Props) {
    const { order } = route.params;

    const navigation = useNavigation();

    const handleOnTurnBack = () => navigation.goBack();

    const handleConfirmDelivery = () => {
        OrdersApi.confirmDelivery(order.id)
            .then(() => {
                Alert.alert(`Pedido ${order.id} confirmado com sucesso!!`);
                navigation.goBack();
            })
            .catch((err) => {
                Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`);
            })
    }

    const handleStartNavigation = () =>{
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <OrderCard
                    order={order}
                />
                <DefaultButton
                    btnTitle="INICIAR NAVEGAÇÃO"
                    onPress={handleStartNavigation}
                />
                <DefaultButton
                    btnTitle="CONFIRMAR ENTREGA"
                    onPress={handleConfirmDelivery}
                />
                <DefaultButton
                    btnTitle="VOLTAR"
                    onPress={handleOnTurnBack}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});

export default OrderDetails;