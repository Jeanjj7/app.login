import react from "react";
import { View, Text,StyleSheet} from "react-native";



const Admin=()=>{
    return(
        <TouchableOpacity style={estilos.button}>
        <Text style={estilos.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
}



const estilos = StyleSheet.create({
    button: {
        backgroundColor: '#6079FF',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: '40%',
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
      },

    


});

export default Admin;