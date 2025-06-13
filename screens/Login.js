import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles/authStyles';

export default function Login({ onNavigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    
    // Simular login bem-sucedido
    Alert.alert('Sucesso', 'Login realizado com sucesso!', [
      {
        text: 'OK',
        onPress: () => onNavigate('Pokedex')
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
        <Text style={styles.title}>Seja Bem-vindo!</Text>
        <Text style={styles.subtitle}>Faça seu Login</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Nome de usuário" 
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          placeholderTextColor="#888" 
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Não tem uma conta? 
          <Text style={styles.link} onPress={() => onNavigate('Register')}> Registre-se</Text>
        </Text>
      </View>
    </View>
  );
}