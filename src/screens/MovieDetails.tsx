import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {AppRouterList} from '../models/types/AppRouter';

const MovieDetailsScreen = ({
  route: {params},
}: NativeStackScreenProps<AppRouterList, 'MovieDetails'>) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: params.Poster}} style={styles.poster} />
      <View style={styles.body}>
        <Text variant="titleLarge">Titulo</Text>
        <Text variant="bodyMedium">{params.Title}</Text>
        <Text variant="titleLarge">Ratings</Text>
        <Text variant="bodyMedium">{params.Ratings[0]?.Value ?? 'N/A'}</Text>
        <Text variant="titleLarge">Director</Text>
        <Text variant="bodyMedium">{params.Director}</Text>
        <Text variant="titleLarge">Actores</Text>
        <Text variant="bodyMedium">{params.Actors}</Text>
        <Text variant="titleLarge">Idioma</Text>
        <Text variant="bodyMedium">{params.Language}</Text>
        <Text variant="titleLarge">Pais</Text>
        <Text variant="bodyMedium">{params.Country}</Text>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});
