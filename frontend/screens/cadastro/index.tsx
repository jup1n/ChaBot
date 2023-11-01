import { Text, View } from "react-native";
import Inputs from "../../components/inputs";
import { styles } from "./style";

export default function Cadastro(){
    return (
        <View style={styles.main}>
            <View style={styles.header}> {/* FAZER COMPONENTE */}
                <Text style={styles.subtext}>/// ChatBot</Text> {/* TRANSFORMAR EM BOTÃO */}
            </View>
            <View style={styles.mainChat}>
                {/* AJUSTAR MENSGENS ENVIADAS E RECEBIDAS */}
            </View>
            <View>
                <Inputs styleInput={styles.input} title={"Envie uma mensagem"}></Inputs>
            </View>
        </View>
    )
}