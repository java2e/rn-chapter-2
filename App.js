import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartScreen from './screen/StartScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = number => {
    setGuessRounds(number);
  }

  const newGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let content = <StartScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  }
  else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} onNewGame={newGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Tahmin Et!" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
