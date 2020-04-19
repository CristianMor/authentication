import React, {Component} from 'react';
//ActivityIndicator = ICONO GIRANDO QUE NOS INDICA QUE ALGO ESTA CARGANDO
import { StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreen extends Component{

    //METODO YA LISTO POR REACT-NATIVE LE DECIMOS QUE SOLO CUANDO SE ACTIVE POR PRIMERA VEZ VA HACER CIERTA ACCION
    componentDidMount(){
        setTimeout(()=> this.isLoggedIn(), 2000);
    }

    isLoggedIn = async () =>{
        const token = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(token ? 'App': 'Auth');
    }

    render(){
        return(
            <View style={styles.view}>
                <Text>Cargando</Text>
                <ActivityIndicator />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    view:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});