import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/src/lib/supabase";
import colors from "@/constants/colors";

export default function SingUp(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSignUp(){
        setLoading(true);    
        //vendo as credencias para a api
        console.log("Email:", email);
        console.log("Password:", password); 
        console.log("Name:", name);
    
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name,
                    password: password,
                    image: 'https://UmaImagemaqui.com.br',
                }
        }
        });

        //se der erro ira retornar a mesagem e era pararr a função
        if(error){
            alert(JSON.stringify(error, null, 2));
            console.log({ email, password, name, image: 'https://UmaImagemaqui.com.br' })
            setLoading(false);
            return;
        }
        alert("Cadastro realizado com sucesso!");

        setTimeout(() => {
            router.replace('/');
        }, 10000);
        setLoading(false);
        //se der certo o cadastro ele ira para a página inicial que é "/"
        

    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.zinc}}>
            <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}>

                    <Pressable onPress={() => {
                        //voltando para a página anterior
                        router.back();
                    }}>
                        <Ionicons name="arrow-back" size={24} color={colors.white} />
                    </Pressable>

                    <Text style={styles.Logo}>
                        Dev<Text style={{color: colors.green}}>App</Text>
                    </Text>

                    <Text style={styles.slogan}>
                        Criar uma Conta
                    </Text>

                    <View style={styles.form}>
                        {/* Formulário de login vai aqui */}
                        <View>
                            <Text style={styles.label}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu nome"
                                keyboardType="default"
                                autoCapitalize="words"
                                autoCorrect={false}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        
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

                        <Pressable style={styles.button} onPress={handleSignUp} >
                            <Text style={styles.buttonText}>
                                {loading ? (
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name="reload" size={20} color={colors.white} style={{ marginRight: 8 }}  />
                                    </View>
                                ) : 'Cadastrar'}
                            </Text>
                        </Pressable>

                    </View>

                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
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