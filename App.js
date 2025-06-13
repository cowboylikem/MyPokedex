import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import Login from './screens/Login';
import Register from './screens/Register';
import Pokedex from './screens/Pokedex';
import Details from './screens/Details';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const navigateToScreen = (screenName, pokemon = null) => {
    setCurrentScreen(screenName);
    if (pokemon) {
      setSelectedPokemon(pokemon);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <Login onNavigate={navigateToScreen} />;
      case 'Register':
        return <Register onNavigate={navigateToScreen} />;
      case 'Pokedex':
        return <Pokedex onNavigate={navigateToScreen} />;
      case 'Details':
        return <Details pokemon={selectedPokemon} onNavigate={navigateToScreen} />;
      default:
        return <Login onNavigate={navigateToScreen} />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderScreen()}
    </SafeAreaView>
  );
}