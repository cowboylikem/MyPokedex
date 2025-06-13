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
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerInfo: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  id: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
    textAlign: 'center',
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  typesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  type: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
  },
  dataItem: {
    alignItems: 'center',
  },
  dataValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  dataLabel: {
    fontSize: 12,
    color: '#666',
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    marginTop: 20,
  },
  evolutionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
  },
  evolutionItem: {
    alignItems: 'center',
    flex: 1,
  },
  evolutionImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  evolutionName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  evolutionId: {
    fontSize: 10,
    color: '#666',
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'justify',
    marginBottom: 20,
  },
  statsContainer: {
    marginBottom: 30,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statName: {
    width: 80,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  statBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginHorizontal: 12,
  },
  statBar: {
    height: '100%',
    borderRadius: 4,
  },
  statValue: {
    width: 40,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
  },
});

export default styles;