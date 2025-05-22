import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles, { typeColors } from './styles/detailsStyles';

const Details = () => {
  const pokemon = {
    id: '0001',
    name: 'Bulbasaur',
    types: ['Planta', 'Venenoso'],
    image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
    height: '0.7 m',
    category: 'Semente',
    weight: '6.9 kg',
    evolution: [
      {
        id: '0001',
        name: 'Bulbasaur',
        image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
      },
      {
        id: '0002',
        name: 'Ivysaur',
        image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif',
      },
      {
        id: '0003',
        name: 'Venusaur',
        image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif',
      },
    ],
    bio: 'Nascido com uma semente ancestral nas costas, Bulbasaur carrega o mistério da natureza em seu corpo. Conectado ao ciclo da vida, ele cresce com a luz do sol e simboliza o equilíbrio entre força e compaixão.',
  };

  const mainTypeColor = typeColors[pokemon.types[0]] || '#A8A77A';

  return (
    <ScrollView style={[styles.container, { backgroundColor: mainTypeColor }]}>
      <View style={styles.topHeader}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.id}>#{pokemon.id}</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>

      <View style={styles.infoCard}>
        <View style={styles.typesRow}>
          {pokemon.types.map((type) => (
            <Text key={type} style={[styles.type, { backgroundColor: typeColors[type] || '#ccc' }]}>
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
            <Text style={styles.dataValue}>{pokemon.category}</Text>
            <Text style={styles.dataLabel}>Categoria</Text>
          </View>
          <View style={styles.dataItem}>
            <Text style={styles.dataValue}>{pokemon.weight}</Text>
            <Text style={styles.dataLabel}>Peso</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Evolução</Text>
        <View style={styles.evolutionRow}>
          {pokemon.evolution.map((evo) => (
            <View key={evo.id} style={styles.evolutionItem}>
              <Image source={{ uri: evo.image }} style={styles.evolutionImage} />
              <Text style={styles.evolutionName}>{evo.name}</Text>
              <Text style={styles.evolutionId}>#{evo.id}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.bio}>{pokemon.bio}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;
