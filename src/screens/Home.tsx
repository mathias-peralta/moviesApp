import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import {searchMovie} from '../api/apiSearch';
import MoviesCard from '../components/moviesCard';
import {SearchResponse} from '../models/responses/searchResponse';
const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [movieResponse, setMovieResponse] = useState<SearchResponse | null>(
    null,
  );

  const getMovie = async () => {
    setLoading(true);
    const response = await searchMovie({
      title: '007',
      year: '2022',
    });
    setMovieResponse(response);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Ingresar titulo"
            style={styles.textInput}
            mode="outlined"
          />
          <TextInput
            label="Ingresar año"
            style={styles.textInput}
            mode="outlined"
          />
          <Button
            mode="contained"
            onPress={getMovie}
            disabled={loading}
            loading={loading}>
            Buscar
          </Button>
        </Card.Content>
      </Card>
      {movieResponse && <MoviesCard movie={movieResponse} onPress={() => {}} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
  },
});
