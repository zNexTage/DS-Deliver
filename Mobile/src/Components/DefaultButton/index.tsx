import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';

type Props = {
    onPress: () => void;
    btnTitle: string
}

function DefaultButton({ onPress, btnTitle }: Props) {
    return (
        <RectButton
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.buttonText}>
                {btnTitle}
            </Text>
        </RectButton>
    )
}

export default DefaultButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    }
})