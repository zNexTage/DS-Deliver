import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../../Consts/Colors';
import Constants from 'expo-constants';
import Logo from '../../../assets/logo.png';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const MAX_HEIGHT = 90;

function Header() {
    const navigation = useNavigation();

    const handleOnPress = () => navigation.navigate('Home');

    return (
        <TouchableWithoutFeedback
            onPress={handleOnPress}
        >
            <View style={styles.container}>
                <View style={styles.internalContainer}>
                    <Image
                        source={Logo}
                    />
                    <Text style={styles.text}>DS Delivery!</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PrimaryColor,
        height: MAX_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    internalContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.024,
        color: '#FFF',
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold'
    }
});

export default Header;