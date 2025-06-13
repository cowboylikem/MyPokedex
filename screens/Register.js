import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles/authStyles';

export default function Register({ onNavigate }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Erro', 'Por favor, insira um email válido');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }
    
    // Simular cadastro bem-sucedido
    Alert.alert('Sucesso', 'Conta criada com sucesso!', [
      {
        text: 'OK',
        onPress: () => onNavigate('Login')
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      </View>
      <View style={styles.formArea}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>Preencha os campos abaixo</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Nome de usuário" 
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput 
          style={styles.input} 
          placeholder="E-mail" 
          placeholderTextColor="#888" 
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          placeholderTextColor="#888" 
          secureTextEntry 
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('Login')}>
          <Text style={styles.registerText}>
            Já tem uma conta? <Text style={styles.link}>Faça Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}