import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { keys } from '../../utils/createQueryKey';
import api from '../../axios/api';
import { getCookie } from '../../auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { CalendarInfo, CalendarProps } from '../../../pages/SubMain/interfaces';

interface GetMainProps {
  type: boolean;
  year: string;
  month: string;
}

interface MainInfo {
  data: CalendarInfo;
  isLoading: boolean;
}

const useGetMain = ({ type, year, month }: GetMainProps): MainInfo => {
  const { data, isLoading } = useQuery({
    queryKey: [keys.GET_MAIN, type, month],
    queryFn: async () => {
      const token = getCookie('token');
      const decoded = token && jwtDecode<JwtPayload>(token);
      const teamId = decoded.teamId;

      if (type === false) {
        const data = await api.get(
          `/totalSchedule/${teamId}?year=${year}&month=${month}`
        );
        return data.data.main;
      } else if (type === true) {
        const data = await api.get(
          `/totalVacation/${teamId}?year=${year}&month=${month}`
        );
        return data.data.main;
      }
    },
  });
  return { data, isLoading };
};

export default useGetMain;
