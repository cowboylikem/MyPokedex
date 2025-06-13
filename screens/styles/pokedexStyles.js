import { StyleSheet } from 'react-native';

export const typeColors = {
  'Normal': '#A8A77A',
  'Fogo': '#EE8130',
  'Água': '#6390F0',
  'Elétrico': '#F7D02C',
  'Planta': '#7AC74C',
  'Gelo': '#96D9D6',
  'Lutador': '#C22E28',
  'Venenoso': '#A33EA1',
  'Terra': '#E2BF65',
  'Voador': '#A98FF3',
  'Psíquico': '#F95587',
  'Inseto': '#A6B91A',
  'Pedra': '#B6A136',
  'Fantasma': '#735797',
  'Dragão': '#6F35FC',
  'Sombrio': '#705746',
  'Aço': '#B7B7CE',
  'Fada': '#D685AD'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E63946',
    textAlign: 'center',
    marginBottom: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    marginLeft: 16,
    height: 45,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#333',
  },
  resultCount: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  id: {
    fontSize: 12,
    color: '#999',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  typesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  typePill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    margin: 2,
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 50,
  },
});

export default styles;