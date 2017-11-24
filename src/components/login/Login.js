'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

class Login extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View style={{ backgroundColor: 'green', flex: 1 }}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                    hidden={false}
                />
                <Button
                    small
                    onPress={()=>{
                        this.props.navigation.navigate('Home');
                    }}
                    icon={{ name: 'cached' }}
                    buttonStyle={{ borderRadius: 10, top: deviceHeight/2 }}
                    title='LOGIN WITH FACEBOOK' />
                <SocialIcon
                    title='Login With Facebook'
                    button
                    raised = {true}
                    style = {{borderRadius: 10, width: 0.8*deviceWidth, alignSelf: 'center',
                        position: 'absolute', bottom: 0.2*deviceHeight
                    }}
                    onPress = {()=>{
                        alert('ok');
                    }}
                    type='facebook'
                    />
                <SocialIcon
                    title='Login with google'
                    button
                    style = {{borderRadius: 10, width: 0.8*deviceWidth, alignSelf: 'center',
                        position: 'absolute', bottom: 0.1*deviceHeight, backgroundColor: 'red'
                    }}
                    onPress = {()=>{
                        alert('LOGIN GOOGLE');
                    }}
                    type = 'google-plus-official'
                />
                <Button
                    small
                    buttonStyle = {{borderRadius:5,backgroundColor: '#3C5995'}}
                    icon={{name: 'facebook', type: 'font-awesome', size: 30, style: {
                        position: 'absolute', left: 20
                    }}}
                    fontWeight='bold'
                    title='Đăng nhập bằng facebook' />

                <Button
                    small
                    containerViewStyle = {{top:20,}}
                    buttonStyle = {{borderRadius:5,alignSelf: 'center',backgroundColor: '#e04a32',width: 0.9*deviceWidth}}
                    icon={{name: 'google-plus', type: 'font-awesome', size: 25, style: {
                        position: 'absolute', left: 15
                    }}}
                    onPress={()=>{alert('Login with google+')}}
                    fontWeight='bold'
                    title='    Đăng nhập bằng google+' />
                    

            </View>
        );
    };
}

export default Login;