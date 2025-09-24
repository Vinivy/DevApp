import { Stack,  } from "expo-router/stack";
import React, {  useEffect } from "react";
import { AuthProvider, useAuth } from "../contexts/ContextsAuth";
import { supabase } from "../lib/supabase";
import { router } from "expo-router";

export function RootLayout(){
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

/*export default*/ function MainLayout(){
  //pegando o contexto de autenticação
  const { setAuth } = useAuth();

  //verificando se o usuario está logado
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      
      if(session){
        setAuth(session.user);
        router.replace('/(panel)/profile/page');
        return;
      }

      setAuth(null);
      router.replace('/');
    });

    
  }, []);

  //cadastrando as rotas da navegação
  return (
    <Stack>
      <Stack.Screen 
      name="index" 
      options={{headerShown: false}} />

      <Stack.Screen 
      name="(auth)/singup/page" 
      options={{headerShown: false}} />

      <Stack.Screen 
      name="(panel)/profile/page" 
      options={{headerShown: false}} />
    </Stack>
  )
};