import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles, { typeColors } from './styles/detailsStyles';

const Details = () => {
  const pokemon = {
    id: '0151',
    name: 'Mew',
    types: ['Psíquico'],
    image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif',
    height: '0.4 m',
    category: 'Novo Espécie',
    weight: '4.0 kg',
    evolution: [
      {
        id: '0151',
        name: 'Mew',
        image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif',
      },
    ],
    bio: 'Mew é dito conter o DNA de todos os Pokémon. Pode se tornar invisível à vontade, o que o torna muito difícil de ser visto, mesmo por treinadores experientes.',
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
              <Image source={{ uri: evo.image }} style={styles.evolutionImage} resizeMode="contain" />
              <Text style={styles.evolutionName}>{evo.name}</Text>
              <Text style={styles.evolutionId}>#{evo.id}</Text>
            </View>
          ))}
        </View>
        <Text style={{ color: '#999', fontStyle: 'italic', textAlign: 'center', marginBottom: 10 }}>
          Mew não possui evolução.
        </Text>

        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.bio}>{pokemon.bio}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;
