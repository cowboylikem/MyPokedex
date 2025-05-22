import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#E63946',
    width: '100%',
    height: 140,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#E63946',
  },
  formArea: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  button: {
    width: '100%',
    backgroundColor: '#E63946',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    color: '#555',
  },
  link: {
    color: '#E63946',
    fontWeight: 'bold',
  },
});

export default authStyles;
