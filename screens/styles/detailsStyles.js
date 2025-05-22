import { StyleSheet } from 'react-native';

export const typeColors = {
  Planta: '#78C850',
  Venenoso: '#A33EA1',
  Psíquico: '#F95587',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  id: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
  imageWrapper: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
    infoCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,  
    borderBottomRightRadius: 30, 
    padding: 30,
    marginTop: -10,
    width: '92%',
    alignSelf: 'center',
    },
  typesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  type: {
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginHorizontal: 6,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dataItem: {
    alignItems: 'center',
  },
  dataValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dataLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E63946',
    marginBottom: 10,
    textAlign: 'center',
  },
  evolutionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  evolutionItem: {
    alignItems: 'center',
  },
  evolutionImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  evolutionName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  evolutionId: {
    fontSize: 12,
    color: '#999',
  },
  bio: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    textAlign: 'justify',
  },
});

export default styles;
