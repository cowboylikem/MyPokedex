import React from 'react';
import { SafeAreaView } from 'react-native';

import Login from './screens/Pokedex';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Login />
    </SafeAreaView>
  );
}
