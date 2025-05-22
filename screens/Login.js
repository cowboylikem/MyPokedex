import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles/authStyles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      </View>
      <View style={styles.formArea}>
        <Text style={styles.title}>Seja Bem-vindo!</Text>
        <Text style={styles.subtitle}>Faça seu Login</Text>
        <TextInput style={styles.input} placeholder="Nome de usuário" placeholderTextColor="#888"/>
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#888" secureTextEntry/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Não tem uma conta? <Text style={styles.link}>Registre-se</Text>
        </Text>
      </View>
    </View>
  );
}
