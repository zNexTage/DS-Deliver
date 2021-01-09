import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DeliveryMan from '../../../assets/deliveryman.png';
import DefaultButton from '../../Components/DefaultButton';
import Header from '../../Components/Header';

function Home() {
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Orders');
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image
                    source={DeliveryMan}
                />
                <Text style={styles.title}>
                    Acompanhe os pedidos e {'\n'} entregue no prazo!
                </Text>
                <Text style={styles.subTitle}>
                    Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão
                </Text>
            </View>
            <View style={styles.footer}>
                <DefaultButton
                    onPress={handleOnPress}
                    btnTitle="VER PEDIDOS"
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center',
    },
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    },
    subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
    }
});

export default Home;