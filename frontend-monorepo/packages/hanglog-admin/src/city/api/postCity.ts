import type { CityFormData } from '@type/city';

import { END_POINTS } from '@constants/api';

import { axiosInstance } from '@api/axiosInstance';

export const postCity = async (cityFormData: CityFormData) => {
  const response = await axiosInstance.post(END_POINTS.CITY, cityFormData);

  const cityId = response.headers.location.replace(`${END_POINTS.CITY}/`, '');

  return cityId;
};
