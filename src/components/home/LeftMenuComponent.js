

import React, { Component } from 'react';
import { View, ScrollView, ListView, Text, FlatList } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import { Button, Icon, Avatar } from 'react-native-elements';

export default class LeftMenuComponent extends Component {
    constructor() {
        super();
        this.state = {
            money: 10
        }
    }
    render() {
        let list = {
            CA_NHAN: {
                iconType: 'ionicon',
                iconName: 'ios-person',
                justifyIcon: 0,
                title: 'Cá nhân',
                onPress: () => { }
            },
            LICH_SU: {
                iconType: '',
                iconName: 'history',
                justifyIcon: 6,
                title: 'Lịch sử'
            },
            THANH_TOAN: {
                iconType: 'font-awesome',
                iconName: 'credit-card-alt',
                justifyIcon: 2,
                iconSize: 15,
                title: 'Thanh toán'
            },
            MY_VI: {
                iconType: '',
                iconName: 'account-balance-wallet',
                justifyIcon: 4,
                iconSize: 20,
                title: 'Ví của tôi'
            },
            THONG_BAO: {
                iconType: '',
                iconName: 'notifications',
                justifyIcon: 6,
                title: 'Thông báo'
            },
            SOS: {
                iconType: '',
                iconName: 'call',
                justifyIcon: 4,
                iconSize: 20,
                title: 'S.O.S'
            },
            MOI_BAN: {
                iconType: 'font-awesome',
                iconName: 'gift',
                justifyIcon: 4,
                iconSize: 20,
                title: 'Mời bạn bè'
            },
            HO_TRO: {
                iconType: 'font-awesome',
                iconName: 'headphones',
                justifyIcon: 4,
                iconSize: 20,
                title: 'Hỗ trợ'
            },
        }

        let getMenuItem = ((data) => {
            return <Button
                key={data.title}
                onPress={() => this.props.navigation.navigate('DrawerToggle')}
                title={data.title}
                icon={{
                    name: data.iconName, type: data.iconType || null, size: data.iconSize || 25,
                    style: { color: 'black', marginLeft: 7 - data.justifyIcon }
                }}
                containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
                buttonStyle={{ backgroundColor: 'white', justifyContent: 'flex-start' }}
                textStyle={{ position: 'absolute', left: 50 }}
                color='black'
            />
        });

        

        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'green', height: 160, alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar
                        large
                        rounded
                        // source={ require('../../img/user.png') }
                        source={{uri: "https://scontent-hkg3-2.xx.fbcdn.net/v/t31.0-8/14853008_1027030930756654_5041103789361924320_o.jpg?oh=d061bad802f20dbeaba3b2d9cae8ec03&oe=5A90849D"}}
                        onPress={() => alert("Works!")}
                        containerStyle={{bottom:0}}
                    />
                    <Text style={{color:'white', top: 10, fontSize: 17}}>DO TIEN</Text>
                    <Text style={{color:'white', top: 13}}>Tài khoản ví: {this.state.money}  |  Điểm tích lũy: {this.state.money} </Text>
                </View>
                <ScrollView bounces={false} style={{ flex: 1 }} contentContainerStyle={{ backgroundColor: 'green' }}>
                    <SafeAreaView style={{}} forceInset={{ horizontal: 'never' }}>
                        {getMenuItem(list.CA_NHAN)}
                        {getMenuItem(list.LICH_SU)}
                        {getMenuItem(list.THANH_TOAN)}
                        {getMenuItem(list.MY_VI)}
                        {getMenuItem(list.SOS)}
                        {getMenuItem(list.MOI_BAN)}
                        {getMenuItem(list.THONG_BAO)}
                        {getMenuItem(list.HO_TRO)}
                    </SafeAreaView>
                </ScrollView>
                <View style={{ backgroundColor: 'green', height: 30, alignItems: 'center' }}>
                    <Text style={{ color: 'white', lineHeight: 30, fontWeight: 'bold' }}>version 0.0.0</Text>
                </View>
            </View>

        );
    }
}
