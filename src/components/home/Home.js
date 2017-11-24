'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView, Animated } from 'react-native';
import { Button, Icon, Avatar } from 'react-native-elements';
import { DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import LeftMenuComponent from './LeftMenuComponent';



var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const ASPECT_RATIO = deviceWidth / deviceHeight;
const LATITUDE = 21.047983;
const LONGITUDE = 105.808374;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const customStyle = [
    {
        elementType: 'geometry',
        stylers: [
            {
                color: '#242f3e',
            },
        ],
    },
    {
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#746855',
            },
        ],
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#242f3e',
            },
        ],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#d59563',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#d59563',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
            {
                color: '#263c3f',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#6b9a76',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
            {
                color: '#38414e',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#212a37',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#9ca5b3',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                color: '#746855',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#1f2835',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#f3d19c',
            },
        ],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
            {
                color: '#2f3948',
            },
        ],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#d59563',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#17263c',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#515c6d',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#17263c',
            },
        ],
    },
];

class MyHomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            myPosition: {
                latitude: LATITUDE,
                longitude: LONGITUDE
            }
            // coordinate: new Animated.Region({
            //     latitude: LATITUDE,
            //     longitude: LONGITUDE,
            // }),
        };

        setTimeout(() => {
            this.setState({
                isLoading: false
            });
            this.watchLocation();
        }, 300)
    }

    watchLocation() {
        // eslint-disable-next-line no-undef
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const myLastPosition = this.state.myPosition;
            const myPosition = position.coords;
            // alert(JSON.stringify(myPosition))
            this.setState({ myPosition });
        }, null, this.props.geolocationOptions);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View></View>
            )
        } else
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ height: 65, backgroundColor: 'green' }}>
                        <Icon
                            raised
                            name='bars'
                            type='font-awesome'
                            size={17}
                            containerStyle={{ position: 'absolute', left: 10, top: 10 }}
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        />
                    </View>

                    <MapView
                        provider={this.props.provider}
                        style={{ height: deviceHeight - 50, width: deviceWidth }}
                        initialRegion={{
                            latitude: this.state.myPosition.latitude,
                            longitude: this.state.myPosition.longitude,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }}
                        coordinate={this.state.myPosition}
                        customMapStyle={customStyle}
                    >
                    </MapView>
                </View>
            );
    }
}

MyHomeScreen.propTypes = {
    provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

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
    <LeftMenuComponent {...props} />
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