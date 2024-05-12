import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {SearchResponse} from '../models/responses/searchResponse';

interface moviesCardProps {
  movie: SearchResponse;
  onPress: () => void;
}

const MoviesCard = ({movie, onPress}: moviesCardProps) => {
  return (
    <Card onPress={onPress}>
      <Card.Content>
        <Image source={{uri: movie.Poster}} style={styles.moviePoster} />
        <Text variant="titleLarge">Titulo</Text>
        <Text variant="bodyMedium">{movie.Title}</Text>
        <Text variant="titleLarge">Ratings</Text>
        <Text variant="bodyMedium">{movie.Title}</Text>
        <Text variant="titleLarge">Descrición</Text>
        <Text variant="bodyMedium">{movie.Plot}</Text>
      </Card.Content>
    </Card>
  );
};

export default MoviesCard;

const styles = StyleSheet.create({
  moviePoster: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
});
