import { Stack } from "expo-router/stack";
import React, { useEffect } from "react";
import { AuthProvider, useAuth } from "../contexts/ContextsAuth";
import { supabase } from "../lib/supabase";
import { router } from "expo-router";

// ✅ export default obrigatório no layout principal
export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

function MainLayout() {
  // ✅ Corrigido: setAuth → setUser (como está no contexto)
  const { setAuth } = useAuth();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Session User:", session?.user);

      if (session) {
       setAuth(session.user);
        router.replace('/(panel)/profile/page');
      } else {
       setAuth(null);
        router.replace('/(auth)/signin/page');
      }
    });

    return () => {
      listener.subscription?.unsubscribe();
    };
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/signin/page" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/signup/page" options={{ headerShown: false }} />
      <Stack.Screen name="(panel)/profile/page" options={{ headerShown: false }} />
    </Stack>
  );
}
