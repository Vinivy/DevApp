import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/src/lib/supabase";
import colors from "@/constants/colors";

export default function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          image: 'https://UmaImagemaqui.com.br',
        }
      }
    });

    if (error) {
      Alert.alert('Erro ao cadastrar', error.message);
      setLoading(false);
      return;
    }

    setTimeout(() => {
      router.replace('/(auth)/signin/page');
    }, 1500);

    setLoading(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.zinc }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>

            <Pressable onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color={colors.white} />
            </Pressable>

            <Text style={styles.Logo}>
              Dev<Text style={{ color: colors.green }}>App</Text>
            </Text>

            <Text style={styles.slogan}>Criar uma Conta</Text>

            <View style={styles.form}>
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

              <Pressable style={styles.button} onPress={handleSignUp} disabled={loading}>
                {loading ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ActivityIndicator size="small" color={colors.white} style={{ marginRight: 8 }} />
                    <Text style={styles.buttonText}>Cadastrando...</Text>
                  </View>
                ) : (
                  <Text style={styles.buttonText}>Cadastrar</Text>
                )}
              </Pressable>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor: colors.zinc,
  },

  header: {
    flex: 1,
    paddingHorizontal: 16,
  },

  backButton: {
    marginBottom: 16,
  },

  Logo: {
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.white,
    marginBottom: 8,
  },

  slogan: {
    fontSize: 18,
    marginBottom: 24,
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
    marginBottom: 16,
  },

  button: {
    height: 48,
    backgroundColor: colors.green,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
