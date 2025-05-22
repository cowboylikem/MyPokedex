import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles/authStyles';

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      </View>
      <View style={styles.formArea}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>Preencha os campos abaixo</Text>
        <TextInput style={styles.input} placeholder="Nome de usuário" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#888" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#888" secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
