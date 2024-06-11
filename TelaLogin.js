import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { TextInput} from 'react-native-paper';
import { useState } from "react";



export default function TelaLogin({navigation}) {
  
  const [senhaOculta] = useState(true);
     var usuarioDigitado="admin";
    var senhaDigitada="1234";
    function fazerLogin(){
        if(usuarioDigitado == "admin" && senhaDigitada=="1234"){
            navigation.navigate("Tela administrativa");
        }else{
            Alert.alert("Aviso","Usuário e/ou senha incorretos!")
        }
    }
  return (
    <View style={estilos.conteiner}>
      <Text style={estilos.cxTitulo}>Login</Text>
      <View style={estilos.cxLogin}>
                <TextInput 
                    onChangeText={(texto)=>{usuarioDigitado=texto}}
                    mode="outlined"
                    style={{width: 300, marginBottom:20}}
                    label="usuario"/>

                <TextInput 
                    secureTextEntry={senhaOculta}
                    onChangeText={(texto)=>{senhaDigitada=texto}}
                    mode="outlined"
                    style={{width: 300, marginBottom:20}}
                    label="senha"/>
                <View style={estilos.cxBotao}>
                    <TouchableOpacity 
                    onPress={()=>{fazerLogin()}}
                    style={estilos.botao} >
                    <Text style={{
                        color: "white",
                        fontSize: 20
                    }}>
                        Entrar
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Tela Cadrasto')}}>
                      <View>
                          <Text style={{color: 'white',
                                        fontWeight: 500,
                                        fontSize: 10,
                                        marginTop: 10,
                                      }}>
                              Não tenho conta
                          </Text>
                      </View>
                    </TouchableOpacity>  
             
                <Image
                    source={require('./assets/logo_senai.png')}
                    />       
                  </View>    
       




              


            </View>

      <StatusBar style="auto"/>
    </View>


  );
}

const estilos = StyleSheet.create({
  conteiner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3850D2',

  },
  cxTitulo:{
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 700,
  },
  botao:{
    backgroundColor: '#6079FF',
    width: "70%",
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 40,
  },
  cxBotao:{
    justifyContent: "center",
    alignItems:"center",

  },




});