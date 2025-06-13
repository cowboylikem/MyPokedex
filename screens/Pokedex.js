import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator,
  Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles, { typeColors } from './styles/pokedexStyles';

const typeTranslations = {
  'normal': 'Normal',
  'fire': 'Fogo',
  'water': 'Água',
  'electric': 'Elétrico',
  'grass': 'Planta',
  'ice': 'Gelo',
  'fighting': 'Lutador',
  'poison': 'Venenoso',
  'ground': 'Terra',
  'flying': 'Voador',
  'psychic': 'Psíquico',
  'bug': 'Inseto',
  'rock': 'Pedra',
  'ghost': 'Fantasma',
  'dragon': 'Dragão',
  'dark': 'Sombrio',
  'steel': 'Aço',
  'fairy': 'Fada'
};

function getTypeColor(type) {
  return typeColors[type] || '#A8A77A';
}

export default function Pokedex({ onNavigate }) {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    filterPokemons();
  }, [searchText, pokemons]);

  const fetchPokemons = async () => {
    try {
      const pokemonList = [];
      
      // Buscar os 151 pokémon da primeira geração
      for (let i = 1; i <= 151; i++) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const data = await response.json();
          
          const pokemon = {
            id: String(data.id).padStart(4, '0'),
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            types: data.types.map(type => typeTranslations[type.type.name] || type.type.name),
            image: data.sprites.versions['generation-v']['black-white'].animated.front_default || 
                   data.sprites.front_default,
            height: (data.height / 10).toFixed(1) + ' m',
            weight: (data.weight / 10).toFixed(1) + ' kg',
            stats: data.stats,
            abilities: data.abilities
          };
          
          pokemonList.push(pokemon);
        } catch (error) {
          console.error(`Erro ao buscar Pokémon ${i}:`, error);
        }
      }
      
      setPokemons(pokemonList);
      setFilteredPokemons(pokemonList);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar Pokémon:', error);
      Alert.alert('Erro', 'Não foi possível carregar os Pokémon. Verifique sua conexão.');
      setLoading(false);
    }
  };

  const filterPokemons = () => {
    if (!searchText) {
      setFilteredPokemons(pokemons);
      return;
    }

    const filtered = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase()) ||
      pokemon.id.includes(searchText) ||
      pokemon.types.some(type => type.toLowerCase().includes(searchText.toLowerCase()))
    );
    
    setFilteredPokemons(filtered);
  };

  const handlePokemonPress = (pokemon) => {
    onNavigate('Details', pokemon);
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#E63946" />
        <Text style={{ marginTop: 10, fontSize: 16, color: '#666' }}>
          Carregando Pokédex...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>

      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => onNavigate('Login')}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#888" style={{ marginLeft: 8 }} />
          <TextInput 
            placeholder="Pesquisar Pokémon..." 
            style={styles.searchInput} 
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Ionicons name="close" size={18} color="#888" style={{ marginRight: 8 }} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Text style={styles.resultCount}>
        {filteredPokemons.length} Pokémon encontrados
      </Text>

      <FlatList
        data={filteredPokemons}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => handlePokemonPress(item)}
            activeOpacity={0.8}
          >
            <Text style={styles.id}>#{item.id}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.typesRow}>
              {item.types.map((type, index) => (
                <Text
                  key={index}
                  style={[
                    styles.typePill,
                    { backgroundColor: getTypeColor(type) },
                  ]}
                >
                  {type}
                </Text>
              ))}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}