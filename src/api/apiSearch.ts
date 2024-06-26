import {Config} from '../../env';
import {searchMovieDto} from '../models/dto/search.dto';
import {SearchResponse} from '../models/responses/searchResponse';
import API from './api';

export const searchMovie = async ({title, year}: searchMovieDto) => {
  try {
    const res = await API.get<SearchResponse>(
      `?apikey=${Config.apiKey}&t=${title}&y=${year}`,
    );
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch {
    return null;
  }
};
