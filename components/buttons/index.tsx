import { Text, TouchableOpacity } from "react-native";

type Props = {
    buttonStyle: object
    textStyle: object
    title: String
    onClick?: (text : any) => void
}

export default function Buttons(props: Props){
    return (
        <TouchableOpacity style={props.buttonStyle} onPressIn={props.onClick}><Text style={props.textStyle}>{props.title}</Text></TouchableOpacity>
    )
}