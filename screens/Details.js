import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles, { typeColors } from './styles/detailsStyles';

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

const categoryTranslations = {
  'seed': 'Semente',
  'lizard': 'Lagarto',
  'flame': 'Chama',
  'tiny-turtle': 'Tartaruga Pequena',
  'turtle': 'Tartaruga',
  'shellfish': 'Molusco',
  'worm': 'Minhoca',
  'cocoon': 'Casulo',
  'butterfly': 'Borboleta',
  'hairy-bug': 'Inseto Peludo',
  'poison-bee': 'Abelha Venenosa',
  'tiny-bird': 'Pássaro Pequeno',
  'bird': 'Pássaro',
  'mouse': 'Rato',
  'beak': 'Bico',
  'snake': 'Cobra',
  'cobra': 'Cobra',
  'poison-pin': 'Espinho Venenoso',
  'drill': 'Broca',
  'fairy': 'Fada',
  'fox': 'Raposa',
  'balloon': 'Balão',
  'bat': 'Morcego',
  'weed': 'Erva Daninha',
  'flower': 'Flor',
  'mushroom': 'Cogumelo',
  'insect': 'Inseto',
  'poison-moth': 'Mariposa Venenosa',
  'mole': 'Toupeira',
  'scratch-cat': 'Gato Arranhão',
  'classy-cat': 'Gato Elegante',
  'duck': 'Pato',
  'pig-monkey': 'Porco Macaco',
  'puppy': 'Filhote',
  'legendary': 'Lendário',
  'tadpole': 'Girino',
  'psi': 'Psíquico',
  'superpower': 'Superpoder',
  'flycatcher': 'Papa-Moscas',
  'jellyfish': 'Água-Viva',
  'rock': 'Pedra',
  'megaton': 'Megatonelada',
  'fire-horse': 'Cavalo de Fogo',
  'dopey': 'Bobo',
  'hermit-crab': 'Caranguejo Eremita',
  'magnet': 'Ímã',
  'wild-duck': 'Pato Selvagem',
  'twin-bird': 'Pássaro Gêmeo',
  'triple-bird': 'Pássaro Triplo',
  'sea-lion': 'Leão Marinho',
  'sludge': 'Lodo',
  'bivalve': 'Bivalve',
  'gas': 'Gás',
  'shadow': 'Sombra',
  'rock-snake': 'Cobra de Pedra',
  'hypnosis': 'Hipnose',
  'river-crab': 'Caranguejo do Rio',
  'pincer': 'Pinça',
  'ball': 'Bola',
  'egg': 'Ovo',
  'coconut': 'Coco',
  'lonely': 'Solitário',
  'bone-keeper': 'Guardião de Ossos',
  'kicking': 'Chute',
  'punching': 'Soco',
  'licking': 'Lambida',
  'poison-gas': 'Gás Venenoso',
  'spikes': 'Espinhos',
  'vine': 'Videira',
  'parent': 'Parental',
  'dragon': 'Dragão',
  'goldfish': 'Peixe Dourado',
  'starshape': 'Estrela',
  'mysterious': 'Misterioso',
  'barrier': 'Barreira',
  'mantis': 'Louva-Deus',
  'humanshape': 'Forma Humana',
  'electric': 'Elétrico',
  'spitfire': 'Cospe Fogo',
  'beetle': 'Besouro',
  'wild-bull': 'Touro Selvagem',
  'fish': 'Peixe',
  'atrocious': 'Atroz',
  'transport': 'Transporte',
  'transform': 'Transformação',
  'evolution': 'Evolução',
  'bubble-jet': 'Jato de Bolha',
  'lightning': 'Raio',
  'flame': 'Chama',
  'freeze': 'Congelar',
  'genetic': 'Genético',
  'new-species': 'Nova Espécie'
};

const Details = ({ pokemon, onNavigate }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokemon) {
      fetchPokemonDetails();
    }
  }, [pokemon]);

  const fetchPokemonDetails = async () => {
    try {
      setLoading(true);
      
      // Buscar informações da espécie
      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
      const speciesData = await speciesResponse.json();
      
      // Buscar cadeia evolutiva
      const evolutionResponse = await fetch(speciesData.evolution_chain.url);
      const evolutionData = await evolutionResponse.json();
      
      const evolution = await buildEvolutionChain(evolutionData.chain);
      
      setPokemonSpecies(speciesData);
      setEvolutionChain(evolution);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar detalhes:', error);
      setLoading(false);
    }
  };

  const buildEvolutionChain = async (chain) => {
    const evolutionList = [];
    let currentChain = chain;

    while (currentChain) {
      try {
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentChain.species.name}`);
        const pokemonData = await pokemonResponse.json();
        
        evolutionList.push({
          id: String(pokemonData.id).padStart(4, '0'),
          name: currentChain.species.name.charAt(0).toUpperCase() + currentChain.species.name.slice(1),
          image: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default || 
                 pokemonData.sprites.front_default,
        });
      } catch (error) {
        console.error('Erro ao buscar evolução:', error);
      }

      currentChain = currentChain.evolves_to[0];
    }

    return evolutionList;
  };

  const getDescription = () => {
    if (!pokemonSpecies || !pokemonSpecies.flavor_text_entries) return 'Descrição não disponível.';
    
    const portugueseEntry = pokemonSpecies.flavor_text_entries.find(
      entry => entry.language.name === 'en'
    );
    
    return portugueseEntry ? 
      portugueseEntry.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ') : 
      'Descrição não disponível.';
  };

  const getCategory = () => {
    if (!pokemonSpecies || !pokemonSpecies.genera) return 'Desconhecido';
    
    const englishGenus = pokemonSpecies.genera.find(
      genus => genus.language.name === 'en'
    );
    
    if (englishGenus) {
      const category = englishGenus.genus.replace(' Pokémon', '').toLowerCase();
      return categoryTranslations[category] || englishGenus.genus.replace(' Pokémon', '');
    }
    
    return 'Desconhecido';
  };

  if (!pokemon) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }]}>
        <Text>Pokémon não encontrado</Text>
      </View>
    );
  }

  const mainTypeColor = typeColors[pokemon.types[0]] || '#A8A77A';

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: mainTypeColor, justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{ color: '#fff', marginTop: 10 }}>Carregando detalhes...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: mainTypeColor }]}>
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => onNavigate('Pokedex')}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.id}>#{pokemon.id}</Text>
        </View>
      </View>

      <View style={styles.imageWrapper}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>

      <View style={styles.infoCard}>
        <View style={styles.typesRow}>
          {pokemon.types.map((type, index) => (
            <Text key={index} style={[styles.type, { backgroundColor: typeColors[type] || '#ccc' }]}>
              {type}
            </Text>
          ))}
        </View>

        <View style={styles.dataRow}>
          <View style={styles.dataItem}>
            <Text style={styles.dataValue}>{pokemon.height}</Text>
            <Text style={styles.dataLabel}>Altura</Text>
          </View>
          <View style={styles.dataItem}>
            <Text style={styles.dataValue}>{getCategory()}</Text>
            <Text style={styles.dataLabel}>Categoria</Text>
          </View>
          <View style={styles.dataItem}>
            <Text style={styles.dataValue}>{pokemon.weight}</Text>
            <Text style={styles.dataLabel}>Peso</Text>
          </View>
        </View>

        {evolutionChain.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Evolução</Text>
            <View style={styles.evolutionRow}>
              {evolutionChain.map((evo, index) => (
                <View key={evo.id} style={styles.evolutionItem}>
                  <Image source={{ uri: evo.image }} style={styles.evolutionImage} resizeMode="contain" />
                  <Text style={styles.evolutionName}>{evo.name}</Text>
                  <Text style={styles.evolutionId}>#{evo.id}</Text>
                </View>
              ))}
            </View>
            {evolutionChain.length === 1 && (
              <Text style={{ color: '#999', fontStyle: 'italic', textAlign: 'center', marginBottom: 10 }}>
                {pokemon.name} não possui evolução.
              </Text>
            )}
          </>
        )}

        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.bio}>{getDescription()}</Text>

        {pokemon.stats && (
          <>
            <Text style={styles.sectionTitle}>Estatísticas Base</Text>
            <View style={styles.statsContainer}>
              {pokemon.stats.map((stat, index) => {
                const statNames = {
                  'hp': 'HP',
                  'attack': 'Ataque',
                  'defense': 'Defesa',
                  'special-attack': 'Atq. Esp.',
                  'special-defense': 'Def. Esp.',
                  'speed': 'Velocidade'
                };
                
                return (
                  <View key={index} style={styles.statRow}>
                    <Text style={styles.statName}>
                      {statNames[stat.stat.name] || stat.stat.name}
                    </Text>
                    <View style={styles.statBarContainer}>
                      <View 
                        style={[
                          styles.statBar, 
                          { 
                            width: `${(stat.base_stat / 255) * 100}%`,
                            backgroundColor: stat.base_stat > 100 ? '#4CAF50' : 
                                           stat.base_stat > 50 ? '#FF9800' : '#F44336'
                          }
                        ]} 
                      />
                    </View>
                    <Text style={styles.statValue}>{stat.base_stat}</Text>
                  </View>
                );
              })}
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Details;