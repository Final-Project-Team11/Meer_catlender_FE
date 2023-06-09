import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { keys } from '../../utils/createQueryKey';
import api from '../../axios/api';

interface TeamInfo {
  data: [{ userName: string; userId: string }];
  isLoading: boolean;
}

const useGetTeamInfo = (): TeamInfo => {
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_TEAM_INFO],
    queryFn: async () => {
      const data = await api.get('teamUsers');
      return data.data;
    },
  });

  return { data, isLoading };
};

export default useGetTeamInfo;
