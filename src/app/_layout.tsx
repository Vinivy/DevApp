import { Stack } from "expo-router/stack";
import React from "react";

export default function MainLayout(){
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