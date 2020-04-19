import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        }
    }
    //AQUI EN EL LOGIN SE USA EL ASYNCSTORAGE SE HACE UNA FUNCION DE MANERA ASINCRONA
    _login = async () =>{
        if(this.state.username === 'cristianmor' && this.state.password === 'admin'){
            //SI ES CIERTO SE ASIGNA AL STORAGE EL TOKEN
            await AsyncStorage.setItem('token','1234567890');
            this.props.navigation.navigate('App');
        }else{
            this.state.username === '' && this.state.password === '' ? alert('No ha ingresado ni un dato'): alert('El usuario o la contraseña son incorrectos');
        }
    }

    render(){
        return(
            <View style={ styles.view}>
               <View style={styles.form}>
                    <Text style={styles.title}>Iniciar sesión</Text>
                    <TextInput style={styles.input} placeholder="Escribe tu usuario" autoCapitalize="none" onChangeText={(username)=> this.setState({username})}>
                    </TextInput>
                    <TextInput style={styles.input} placeholder="Contraseña" autoCapitalize="none" secureTextEntry={true} onChangeText={(password)=> this.setState({password})}>
                    </TextInput>
                    <Button color="#f194ff" title="Iniciar sesión" onPress={()=> this._login()} />
               </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    view:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form:{
        width: '80%',
    },
    title:{
        fontSize: 34,
        textAlign: 'center',
        marginBottom: 30,
    },
    input:{
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
    },
});