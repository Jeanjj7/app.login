import {View, Text, StyleSheet,Image } from "react-native";
import {StatusBar} from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import Admin from "./ComponeteAdmin";



export default function TelaAdmi() {
  return (
    <View style={estilos.container}>
    <View style={estilos.cxFundo}>
            <View style={estilos.nomeUsuario}>
                    <View>
                        <Text style={{color: 'white', fontSize: 15}}>Bem vindo,</Text>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: 800}}>Fulano de tal</Text>
                    </View>
                    <View style={estilos.circulo}>
                    <Ionicons
                            name="person"
                            size={30}
                            color="#626262"/>
                    </View>
                    
            </View>  
            <View style={estilos.linha1}>
            <Admin nome="Requerimentos"/>
            <Admin nome="Notas"/>
            </View>
            <View style={estilos.linha3}>
              <Admin nome="Frequência"/>
              <Admin nome="Avaliações"/>
            </View>
          <View style={estilos.linha2}>
            <Admin nome="Financeiro"/>
            <Admin nome="Documentos"/>
            
          </View>
          <View>
            <View style={estilos.ImageSenai}>
            <Image source={require('./assets/logo_senai.png')}/>
            </View>
          </View>
            
           
    
            </View>
                 

          <StatusBar style="auto"/> 
 


  <Image source={require('./assets/logo_senai.png')}/>
         

    </View>

            

 



  );
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,

},
cxFundo:{
    backgroundColor: '#3850D2',
    height: '100%'
},
nomeUsuario:{
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 60,
  marginLeft: 30
},
circulo:{
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 40,
  width: '12%',
  borderRadius: 100

},
linha1:{
flexDirection:"row"
  


},
linha2:{
  flexDirection:"row"


},
linha3:{
  flexDirection:"row"

},
ImageSenai:{
  justifyContent:"center",
  alignItems:"center",
}



});