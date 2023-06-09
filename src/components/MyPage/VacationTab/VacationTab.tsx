import { useRef } from 'react';
// 스타일, 인터페이스
import { LoadingBlock } from './Vacation/style';
import { VacationList } from './interfaces';
// 서버 요청
import { PageData, useGetVacation } from '../../../api/hooks/Vacation/useGetVacation';
import { useInfiniteQueryHook } from '../../../hooks/common/useInfiniteQueryHook';
// 컴포넌트
import Vacation from './Vacation';
import Board from '../Board';
import Loading from '../../Loading/Loading';
// SVG파일
import CalendarIcon from '../../../assets/Icons/CalendarIcon';

const VacationTab = () => {
  // Vacation 리스트 GET 요청
  const { data, fetchNextPage, hasNextPage, isLoading } = useGetVacation();

  // 무한스크롤을 적용할 div를 타겟하기 위해 추가한 useRef
  const targetDiv = useRef<HTMLDivElement | null>(null);

  // 무한스크롤 커스텀훅
  useInfiniteQueryHook<PageData>({ targetDiv, fetchNextPage, hasNextPage });

  // data.pages를 풀어서 하나의 배열로 -> useInfiniteQuery 에서 return 하는 data 형식 참고.
  const vacations = data ? data.pages.flatMap(page => page.vacation) : [];

  // Board title에 들어갈 icon
  const icon = <CalendarIcon usage="title" />;

  // 데이터 없을 시 true 변수
  const NoData = vacations.length === 0;

  return (
    <Board icon={icon} title="휴가 요청" targetDiv={targetDiv}>
      {isLoading ? (
        <LoadingBlock>
          <Loading />
        </LoadingBlock>
      ) : NoData ? (
        <LoadingBlock>요청된 휴가가 없습니다.</LoadingBlock>
      ) : (
        vacations?.map((vacation: VacationList) => {
          return <Vacation key={vacation.Id} vacation={vacation} />;
        })
      )}
    </Board>
  );
};

export default VacationTab;
