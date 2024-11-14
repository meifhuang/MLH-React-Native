import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme"; 

export default function Complete() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.textStyle}> Completed Reminders </Text>
            <Text> Testing </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: theme.colors.white,
    },
    textStyle: {
        fontSize: 16,
        fontFamily: "System",
        color: "black",
        width: "80%", 
        marginVertical: 10, 
    }
})