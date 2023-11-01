import { TextInput } from "react-native";

type Props = {
    styleInput: object
    title: String
}

export default function Inputs(props: Props){
    return (
        <TextInput style={props.styleInput}>{props.title}</TextInput>
    )
}