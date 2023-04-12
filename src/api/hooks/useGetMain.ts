import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { keys } from '../utils/createQueryKey';
import api from '../../axios/api';

const useGetMain = (type: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_MAIN, type],
    queryFn: async () => {
      if (type === 0) {
        const data = await api.get('/totalSchedule');
        console.log('schedule', data);
        return data.data.main;
      } else if (type === 1) {
        console.log('vacation');
        const data = await api.get('/totalVacation');
        return data.data.main;
      }
    },
  });
  return { data, isLoading };
};

export default useGetMain;
