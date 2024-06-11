import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaAdmi from "./TelaAdministrativa";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela Login">
          <Stack.Screen name="Tela Login" component={TelaLogin} options={{headerShown:false}}/>
          <Stack.Screen name="Tela Cadrasto" component={TelaCadastro} options={{headerShown:false}}/>
          <Stack.Screen name="Tela administrativa" component={TelaAdmi} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}