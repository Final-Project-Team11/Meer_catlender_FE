import React from 'react';
import Tag from '../../components/Tag/Tag';
import styled from 'styled-components';
import Feed from '../../components/Feed/Feed';
import VacationTab from '../../components/VacationTab/VacationTab';
import UploadedFileTab from '../../components/UploadedFileTab';
import Card from '../../components/Card';

const MyPage = () => {
  return (
    <Frame>
      <Wrapper>
        <Header>
          <Card />
          <Calendar>캘린더영역</Calendar>
        </Header>
        <MainArea>
          <Feed />
          <Tag />
          <UploadedFileTab />
          <VacationTab />
        </MainArea>
      </Wrapper>
    </Frame>
  );
};

const Frame = styled.div`
  width: 1920px;
  height: 1080px;

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: beige;
  width: 1200px;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #d5f09f;
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 150px;

  padding: 15px;
  box-sizing: border-box;
`;

const Calendar = styled.div`
  background-color: aliceblue;
  width: 900px;
  height: 120px;
`;

const MainArea = styled.div`
  background-color: #ffeff2;
  width: 100%;
  height: 100%;

  padding: 15px;
  box-sizing: border-box;

  display: flex;
  /* justify-content: space-between; */
  gap: 15px;
`;

export default MyPage;
