import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Views/Home";
import Orders from "../Views/Orders";
import OrderDetails from '../Views/OrderDetails';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFF'
                    }
                }}>
                <Screen name="Home" component={Home} />
                <Screen name="Orders" component={Orders} />
                <Screen name="OrderDetails" component={OrderDetails} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;