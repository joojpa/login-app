import { useState } from "react"

import { StyleSheet, Image, View, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native"
import { Link } from "expo-router"

import { Input } from "@/components/input"
import { Button } from "@/components/button"
import Signup from "./signup"


export default function Index() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleSignIn(){
        
        if (!email.trim() || !password.trim()){
            return Alert.alert("Entrar", "Preencha os campos de email e senha.")
        }
        Alert.alert("Bem vindo", `Login realizado com ${email}`)
    }


    return (
        <KeyboardAvoidingView style = {{flex: 1}} behavior= {Platform.select({ios: "padding", android: "height"})}>
            <ScrollView contentContainerStyle = {{flexGrow: 1}} keyboardShouldPersistTaps = "handled"  showsVerticalScrollIndicator = {false}>
                <View style={style.container}>
                    <Image
                        source={require('../assets/img1.png')}
                        style={style.illustration}
                    />
                    <Text style={style.title}>Entrar</Text>
                    <Text style={style.subtitle}>Acessar sua conta com email e senha.</Text>

                    <View style={style.form}>

                        <Input placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail} />

                        <Input placeholder="Senha" secureTextEntry onChangeText={setPassword}/>

                        <Button label="Entrar" onPress={handleSignIn}></Button>
                    </View>
                    <Text style={style.footerText}>Não tem uma conta? {" "} <Link href="../signup" style={style.footerLink}>Cadastre-se aqui</Link></Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFDFD",
        padding: 32,
    },
    illustration: {
        width: "100%",
        height: 330,
        resizeMode: "contain",
        marginTop: 62,

    },
    title: {
        fontSize: 32,
        fontWeight: 900,

    },
    subtitle: {
        fontSize: 16,
    },
    form: {
        marginTop: 24,
        gap: 12,
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "rgb(255, 130, 53)"
    },
    footerLink: {
        color: "rgb(255, 98, 0)",
        fontWeight: 700,
    }





})