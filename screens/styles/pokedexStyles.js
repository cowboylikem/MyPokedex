import { StyleSheet } from 'react-native';

export const typeColors = {
  Planta: '#78C850',
  Poison: '#A33EA1',
  Fogo: '#F08030',
  Flying: '#A890F0',
  Água: '#6890F0',
  Psíquico: '#F95587',
};

export const typeCardColors = typeColors;

const pokedexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E63946',
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  card: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    margin: '1%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: '#eee',
  },
  id: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  typesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 4,
  },
  typePill: {
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    margin: 2,
    fontSize: 12,
    overflow: 'hidden',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginLeft: 10,
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    color: '#333',
  },
});

export default pokedexStyles;
