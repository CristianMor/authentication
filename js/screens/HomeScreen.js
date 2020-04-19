import React, {Component} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        //this.showToken();
    }

    //FUNCION ASINCRONA PARA SACAR EL TOKEN DE LA STORAGE
    /*showToken = async () =>{
        const token = await AsyncStorage.getItem('token');
        //alert(token);
    }*/
    //METODO ASINCRONO QUE REMUEVE EL TOKEN Y TE ENVIA DE NUEVO A AUTENTICARTE
    _logout = async () =>{
        await AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Auth');
    }

    render(){
        return(
            <View style={styles.view}>
                <Text>HOLA ESTA ES LA PANTALLA PRINCIPAL!</Text>
                <Button color="#f194ff" title="Cerrar sesión" onPress={()=> this._logout()} />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});