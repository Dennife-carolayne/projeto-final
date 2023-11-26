import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { ListarProdutos} from "./src/Componentes/ListarProdutos"
import { ManterProdutos } from "./src/Componentes/ManterProdutos"
import {MakeupApp} from "./src/Componentes/BotaoPesquisa"
import{DetalhesProduto} from "./src/Componentes/DetalheProd"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='ListarProdutos' component={ListarProdutos} options={{ headerShown: false }} />
                <Stack.Screen name='BotaoPesquisa' component={MakeupApp} options={{ headerShown: false }} />
                <Stack.Screen name='DetalhesProdutos' component={DetalhesProduto} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}