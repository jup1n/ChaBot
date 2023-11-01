import { Text, View } from "react-native";
import { styles } from "./style";
import Buttons from "../../components/buttons";
import Inputs from "../../components/inputs";

export default function Login(){
    return(
        <View style={styles.main}>
            <View>
                <Text style={styles.title}>ChatBot</Text>
            </View>
            <View style={styles.spaceBox}>
                {/* AJUSTAR PLACEHOLDER DOS INPUTS */}
                {/* FAZER VALIDAÇÃO DE CADASTRO DE EMAIL */}
                <Inputs styleInput={styles.input} title={"E-mail"}/>
                <Inputs styleInput={styles.input} title={"Senha"}/>
            </View>
            <View style={styles.spaceBox}>
                {/* AJUSTAR FUNÇÃO ONCLICK NO COMPONENTE BOTÃO */}
                <Buttons buttonStyle={styles.button} textStyle={styles.subText} title={"Login"}></Buttons>
                <Buttons buttonStyle={styles.button} textStyle={styles.subText} title={"Cadastre-se"}></Buttons>
            </View>
        </View>
    )
}