import React from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles, { typeColors } from './styles/pokedexStyles';

const pokemons = [
  { id: '0001', name: 'Bulbasaur', type: 'Planta/Poison', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif' },
  { id: '0002', name: 'Ivysaur', type: 'Planta/Poison', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif' },
  { id: '0003', name: 'Venusaur', type: 'Planta/Poison', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif' },
  { id: '0004', name: 'Charmander', type: 'Fogo', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif' },
  { id: '0005', name: 'Charmeleon', type: 'Fogo', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif' },
  { id: '0006', name: 'Charizard', type: 'Fogo/Flying', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif' },
  { id: '0007', name: 'Squirtle', type: 'Água', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif' },
  { id: '0008', name: 'Wartortle', type: 'Água', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif' },
  { id: '0009', name: 'Blastoise', type: 'Água', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif' },
  { id: '0151', name: 'Mew', type: 'Psíquico', image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif' },
];

function getTypeColor(type) {
  return typeColors[type] || '#ccc';
}

export default function Pokedex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>

      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#888" style={{ marginLeft: 8 }} />
          <TextInput placeholder="Pesquisar" style={styles.searchInput} placeholderTextColor="#888" />
          <Ionicons name="filter" size={18} color="#888" style={{ marginRight: 8 }} />
        </View>
      </View>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const types = item.type.split('/').map((t) => t.trim());
          return (
            <View style={styles.card}>
              <Text style={styles.id}>#{item.id}</Text>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.typesRow}>
                {types.map((type) => (
                  <Text
                    key={type}
                    style={[
                      styles.typePill,
                      { backgroundColor: getTypeColor(type) },
                    ]}
                  >
                    {type}
                  </Text>
                ))}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
