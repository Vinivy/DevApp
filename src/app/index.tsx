import colors from "@/constants/colors";
import { Link } from "expo-router";

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login(){
    function handlesingin(){
        console.log('clicou');
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
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            secureTextEntry
                        />
                    </View> 

                    <Pressable style={styles.button} onPress={handlesingin}>
                        <Text style={styles.buttonText}>Entrar</Text>
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
        backgroundColor: colors.zinc ,
    },

    header: {
        paddingLeft: 14,
        paddingRight: 14,
    },

    Logo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.white,
        marginBottom: 8,
    },

    slogan: {
        fontSize:20,
        marginBlock:34,
        color: colors.white,
    },

    form: {
        flex: 1,
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