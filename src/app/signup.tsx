import { StyleSheet, Image, View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { Link } from "expo-router"

import { Input } from "@/components/input"
import { Button } from "@/components/button"



export default function Signup() {
    return (
        <KeyboardAvoidingView style = {{flex: 1}} behavior= {Platform.select({ios: "padding", android: "height"})}>
            <ScrollView contentContainerStyle = {{flexGrow: 1}} keyboardShouldPersistTaps = "handled" showsVerticalScrollIndicator = {false}>
                <View style={style.container}>
                    <Image
                        source={require('../assets/img2.png')}
                        style={style.illustration}
                    />
                    <Text style={style.title}>Cadastrar-se</Text>
                    <Text style={style.subtitle}>Cadastre sua conta com email e senha.</Text>

                    <View style={style.form}>
                        <Input placeholder="Nome" keyboardType="default" />
                        <Input placeholder="E-mail" keyboardType="email-address" />
                        <Input placeholder="Senha" secureTextEntry />
                        <Button label="Cadastrar"></Button>
                    </View>
                    <Text style={style.footerText}>Já tem uma conta? {" "} <Link href="../" style={style.footerLink}>Faça o login</Link></Text>
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