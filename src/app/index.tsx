import colors from "@/constants/colors";
import { Link } from "expo-router";
import { router } from "expo-router";
import { useState } from "react";

import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "../lib/supabase";
import { Ionicons } from "@expo/vector-icons";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handlesingin(){
       setLoading(true);
       //esse é o metodo de login do supabase
       const {data, error} = await supabase.auth.signInWithPassword({
           email : email,
           password: password
       });

         if(error){
            alert(JSON.stringify(error,null, 2));
            Alert.alert("Erro ao fazer login");
            setLoading(false);
            return;
         }

        setLoading(false);
        
        router.replace('/(panel)/profile/page');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Logo}>
                    Dev<Text style={{color: colors.green}}>App</Text>
                </Text>

                <Text style={styles.slogan}>
                    O app para desenvolvedores que pensam grande.
                </Text>

                <View style={styles.form}>
                    {/* Formulário de login vai aqui */}
                    <View>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View> 

                    <Pressable style={styles.button} onPress={handlesingin}>
                        <Text style={styles.buttonText}></Text>
                            {loading ? (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="reload" size={20} color={colors.white} style={{ marginRight: 8 }}  />
                                    <Text style={styles.buttonText}>Carregando...</Text>
                                </View>
                            ) : 'Entrar'}
                    </Pressable>

                    <Link href="/(auth)/singup/page" style={{marginTop: 16, alignSelf: 'center'}}>
                        <Text style={styles.linkText}>Não possui uma conta? Cadastre-se</Text>
                    </Link>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: colors.zinc,
    },

    header: {
        flex: 1,
        paddingLeft: 14,
        paddingTop: 24,
        paddingRight: 14,
    },

    Logo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.white,
        marginBottom: 8,
    },

    slogan: {
        fontSize: 20,
        marginBlock: 34,
        color: colors.white,
    },

    form: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '70%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 24,
        paddingLeft: 14,
        paddingRight: 14,
    },

    label: {
        fontSize: 16,
        marginBottom: 6,
        color: colors.zinc,
    },

    input: {
        height: 48,
        borderWidth: 1,
        borderColor: colors.zinc,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
    },

    button: {
        height: 48,
        backgroundColor: colors.green,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },

    linkText: {
        fontSize: 14,
        textAlign: 'center',
    },
});