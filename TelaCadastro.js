import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function TelaCadastro() {

  return (
    <View style={estilos.container}>
    <Text style={estilos.titulo}>Cadastro</Text>
    <View>
    <TextInput 
        onChangeText={(texto)=>{usuarioDigitado=texto}}
        mode="outlined"
        style={{width: 300, marginBottom:20}}
        label="Nome completo"/>
    <TextInput
        onChangeText={(texto)=>{usuarioDigitado=texto}}
        mode="outlined"
        style={{width: 300, marginBottom:20}}
        label="Usuario"/>
        
    <TextInput
        onChangeText={(texto)=>{usuarioDigitado=texto}}
        mode="outlined"
        style={{width: 300, marginBottom:20}}
        label="Senha"/>
    <TextInput
        onChangeText={(texto)=>{usuarioDigitado=texto}}
        mode="outlined"
        style={{width: 300, marginBottom:20}}
        label="Repita a senha"/>
    </View>
    <View style={estilos.cxBotao}>
                    <TouchableOpacity 
                    onPress={()=>{fazerLogin()}}
                    style={estilos.botao} >
                    <Text style={{
                        color: "white",
                        fontSize: 15
                    }}>
                        Cadastar
                    </Text>
                    
                </TouchableOpacity>
 
                </View>



    <StatusBar style="auto"/>
                    <Image
                    source={require('./assets/logo_senai.png')}
                    />    
    </View>




  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#3850D2',
    justifyContent: 'center',
    alignItems: 'center',

  },
  titulo: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 700
    

  },
  cxBotao:{
      backgroundColor: '#6079FF',
      width: "30%",
      height: "5%",
      justifyContent: "center",
      alignItems:"center",
      borderRadius: 10,
      marginTop:10,

  },

})