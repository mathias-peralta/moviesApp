import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
      title: '007',
      year: '2022',
    });
    setMovieResponse(response);
    setLoading(false);
  };

  const handleOnSubmit = () => {
    navigation.navigate('MovieDetails', movieResponse!);
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Este campo no puede ir vacio'),
    year: Yup.string().required('Este campo no puede ir vacio'),
  });
  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    setValues,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<FormikDatosProps>({
    initialValues: {
      title: '',
      year: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleOnSubmit,
  });
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Ingresar titulo"
            style={styles.textInput}
            mode="outlined"
            value={values.title}
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
          />
          {touched.title && errors.title && <Text>{errors.title}</Text>}
          <TextInput
            label="Ingresar año"
            style={styles.textInput}
            mode="outlined"
            value={values.year}
            onChangeText={handleChange('year')}
            onBlur={handleBlur('year')}
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
      {movieResponse && (
        <MoviesCard movie={movieResponse} onPress={handleSubmit} />
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
});
