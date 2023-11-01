import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function Home(){
    return(
        <View style={styles.main}>
            <View>
                <Text style={styles.title}>ChatBot</Text>
            </View>
            <View style={styles.spaceBox}>
                <TextInput style={styles.input}>E-mail</TextInput>
                <TextInput style={styles.input}>Senha</TextInput>
            </View>
            <View style={styles.spaceBox}>
                <TouchableOpacity style={styles.button}><Text style={styles.subText}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.subText}>Cadastrar-se</Text></TouchableOpacity>
            </View>
        </View>
    )
}