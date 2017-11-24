'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import  LeftMenuComponent  from './LeftMenuComponent';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            // <Image
            //     source={require('./chats-icon.png')}
            //     style={[styles.icon, { tintColor: tintColor }]}
            // />
            <Icon
                name='rowing' />
        ),

    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('DrawerToggle')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        // drawerIcon: ({ tintColor }) => (
        //     <Image
        //         source={require('./notif-icon.png')}
        //         style={[styles.icon, { tintColor: tintColor }]}
        //     />
        // ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const CustomDrawerContentComponent = (props) => (
    <LeftMenuComponent {...props}/>
);

const MyApp = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
},
    {
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            activeTintColor: '#e91e63',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'red',
        }
    }
);

class Home extends Component {
    constructor(props) {
        super(props);
        this.props.test = { test: 1 }
    }
    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>this is map</Text>
            </View>
        );
    };
}


export default MyApp;