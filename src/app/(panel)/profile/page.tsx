import { StyleSheet, Text, View } from "react-native";
//router de usuarios logados (panel)
export default function Profile(){
    return (
        <View style={styles.container}>
            <Text>Page profile Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});