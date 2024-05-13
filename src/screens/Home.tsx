import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import * as Yup from 'yup';
import {searchMovie} from '../api/apiSearch';
import MoviesCard from '../components/moviesCard';
import {SearchResponse} from '../models/responses/searchResponse';
import {AppRouterList} from '../models/types/AppRouter';

interface FormikDatosProps {
  title: string;
  year: string;
}
const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<AppRouterList, 'Home'>) => {
  const [loading, setLoading] = useState(false);
  const [movieResponse, setMovieResponse] = useState<SearchResponse | null>(
    null,
  );

  const getMovie = async () => {
    setLoading(true);
    const response = await searchMovie({
      title: values.title,
      year: values.year,
    });
    if (response?.Error!) {
      Alert.alert('No se encontraron resultados!');
    } else {
      setMovieResponse(response);
    }
    setLoading(false);
  };

  const handleOnSubmit = () => {
    navigation.navigate('MovieDetails', movieResponse!);
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Este campo no puede ir vacio'),
    year: Yup.string().required('Este campo no puede ir vacio'),
  });
  const {values, errors, touched, handleChange, handleBlur, handleSubmit} =
    useFormik<FormikDatosProps>({
      initialValues: {
        title: '',
        year: '',
      },
      validationSchema: validationSchema,
      onSubmit: getMovie,
    });
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.textInput}>
            <TextInput
              label="Ingresar titulo"
              mode="outlined"
              value={values.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
            />
            {touched.title && errors.title && (
              <Text style={styles.error}>{errors.title}</Text>
            )}
          </View>
          <View style={styles.textInput}>
            <TextInput
              label="Ingresar año"
              mode="outlined"
              value={values.year}
              onChangeText={handleChange('year')}
              onBlur={handleBlur('year')}
            />
            {touched.year && errors.year && (
              <Text style={styles.error}>{errors.year}</Text>
            )}
          </View>

          <Button
            mode="contained"
            onPress={() => handleSubmit()}
            disabled={loading}
            loading={loading}>
            Buscar
          </Button>
        </Card.Content>
      </Card>

      {movieResponse && (
        <MoviesCard movie={movieResponse} onPress={handleOnSubmit} />
      )}
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
  error: {
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});
