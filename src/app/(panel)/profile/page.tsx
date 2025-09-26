import { useAuth } from "@/src/contexts/ContextsAuth";
import { supabase } from "@/src/lib/supabase";
import { use } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
//router de usuarios logados (panel)
export default function Profile(){
    const { setAuth } = useAuth ();

    async function handleSignOut(){
        //esse é o metodo de login do supabase que desloga o usuario
        const { error } = await supabase.auth.signOut();
        setAuth (null);
        if (error) {
            console.log("Error :", "Usuario Deslogado", error);
            Alert.alert("Erro", "Usuario Deslogado");
            return;
        }
    }

    return (
        <View style={styles.container}>
            <Text>Page profile Screen</Text>
            <Text>Em construção...</Text>
            <Text>Em construção...</Text>
            <Button title="Voltar" onPress={handleSignOut} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});