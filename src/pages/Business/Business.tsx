import React from 'react';
import styled from 'styled-components';
import MaxInput from '../../components/Inputs/Input/MaxInput';
import ButtonInput from '../../components/Inputs/ButtonInput/ButtonInput';
import Dropdown from '../../components/Dropdown/Dropdown';
import { StButton } from '../../components/Button/styles';
import Modal from '../../components/Modal/Modal';
import { UserSignupInfo } from './interfaces';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useUserIdValidation } from './hooks/useUserIdValidation';
import { useLogin } from '../Login/hooks/useLogin';
import { useSignup } from './hooks/useSignup';
// import 'business.css';

const Business = () => {
  // 모달 상태변수, 콜백함수
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };

  // 유저생성 상태변수
  const [userInfo, setUserInfo] = React.useState<UserSignupInfo>({
    userName: '',
    team: '',
    rank: '',
    job: '',
    userId: '',
    joinDay: new Date(),
    salaryDay: 0,
    authLevel: 0,
  });

  // 유저생성 인풋 체인지 핸들러
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // 유저생성 권한 드롭 다운 체인지 핸들러
  const selecteAuthorityHandler = (value: number | string) => {
    setUserInfo({ ...userInfo, authLevel: Number(value) });
  };

  const changeDateHandler = (date: Date) => {
    setUserInfo({ ...userInfo, joinDay: date });
  };

  const changeDateHandler2 = (date: Date) => {
    const day = date.getDate();
    setUserInfo({ ...userInfo, salaryDay: day });
  };

  // 권한 드롭 다운 배열
  const authority = [
    { name: '관리자', value: 2 },
    { name: '팀원', value: 3 },
  ];
  // 아이디 유효성 검사, 중복확인 콜백함수
  const { validUserId, checkUserId, userIdValidation, setUserIdValidation } =
    useUserIdValidation();

  // 아이디 유호성 검사, 중복확인 핸들러
  const checkUserIdHandler = (item: string) => {
    if (validUserId(item)) {
      checkUserId.mutate(item);
    } else {
      setUserIdValidation(false);
      alert('아이디 양식을 재확인 해주세요');
    }
  };

  const { signup } = useSignup();

  const submitSignInfoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userIdValidation) {
      signup.mutate(userInfo);
    } else {
      alert('가입에 실패하였습니다 입력한 내용을 확인해주세요');
    }
  };

  // const teams = ['개발팀', '경영팀', '광고팀'];

  const check = () => {
    console.log('중간점검', userInfo);
  };
  return (
    <MainWrapper>
      <ViewUser>
        <VuHeader>
          {/* <Dropdown items={teams}>부서</Dropdown> */}
          <MaxInput types="max" type="search">
            검색
          </MaxInput>
        </VuHeader>
        <Vubody>
          <button onClick={() => setShowModal(true)}>유저 조회 영역</button>
          {showModal && (
            <Modal closeModal={closeModal}>
              <MaxInput types="max">이름</MaxInput>
              <MaxInput types="max">부서</MaxInput>
              <MaxInput types="max">직급</MaxInput>
              <MaxInput types="max">직무</MaxInput>
              <MaxInput types="max">아이디</MaxInput>
              <MaxInput types="max">입사일</MaxInput>
              <MaxInput types="max">월급일</MaxInput>
              <Dropdown items={authority}>권한</Dropdown>
              <StButton>수정</StButton>
              <StButton>삭제</StButton>
              <StButton onClick={closeModal}>닫기</StButton>
            </Modal>
          )}
        </Vubody>
      </ViewUser>
      <CreateUser onSubmit={submitSignInfoHandler}>
        <h1>유저 생성</h1>
        {/* <-----------이름 : userName-----------> */}
        <MaxInput
          types="max"
          type="text"
          name="userName"
          value={userInfo.userName}
          onChange={changeInputHandler}
        >
          이름
        </MaxInput>
        {/* <-----------이름 : userName-----------> */}
        {/* <-----------부서 : team-----------> */}
        <MaxInput
          types="max"
          type="text"
          name="team"
          value={userInfo.team}
          onChange={changeInputHandler}
        >
          부서
        </MaxInput>
        {/* <-----------부서 : team----------> */}
        {/* <-----------직급 : rank-----------> */}
        <MaxInput
          types="max"
          type="text"
          name="rank"
          value={userInfo.rank}
          onChange={changeInputHandler}
        >
          직급
        </MaxInput>
        {/* <-----------직급 : rank-----------> */}
        {/* <-----------직무 : job-----------> */}
        <MaxInput
          types="max"
          type="text"
          name="job"
          value={userInfo.job}
          onChange={changeInputHandler}
        >
          직무
        </MaxInput>
        {/* <-----------직무 : job-----------> */}
        {/* <-----------아이디 : userID-----------> */}
        <ButtonInput
          types="button"
          type="text"
          name="userId"
          value={userInfo.userId}
          onChange={changeInputHandler}
          onClick={() => checkUserIdHandler(userInfo.userId)}
          buttonTag="중복검사"
        >
          아이디
        </ButtonInput>
        {/* <-----------아이디 : userID-----------> */}
        {/* <-----------입사일 : joinDay-----------> */}
        입사일
        <br />
        <DatePicker selected={userInfo.joinDay} onChange={changeDateHandler} />
        {/* <-----------입사일 : joinDay-----------> */}
        {/* <-----------월급일 : salaryDay-----------> */}
        <br />
        월급일
        <br />
        <DatePicker
          selected={new Date(userInfo.salaryDay)}
          onChange={changeDateHandler2}
        />
        {/* <-----------월급일 : salaryDay-----------> */}
        {/* <-----------권한 : authLevel-----------> */}
        <br />
        <Dropdown
          items={authority}
          value={userInfo.authLevel}
          onChange={selecteAuthorityHandler}
        >
          권한
        </Dropdown>
        {/* <-----------권한 : authLevel-----------> */}
        <br />
        <StButton onClick={check}>생성</StButton>
      </CreateUser>
    </MainWrapper>
  );
};

export default Business;

const MainWrapper = styled.div`
  width: 1200px;
  height: 800px;
  margin: auto;

  display: flex;
  flex-direction: row;

  border: 1px solid black;
  box-sizing: border-box;
`;

const ViewUser = styled.div`
  width: 600px;
  height: 100%;

  border: 1px solid red;
  box-sizing: border-box;
`;

const CreateUser = styled.form`
  width: 600px;
  height: 100%;

  border: 1px solid blue;
  box-sizing: border-box;
`;

const VuHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Vubody = styled.div`
  width: 500px;
  height: 600px;
  margin: 20px auto;
  padding: 20px;

  border: 1px solid black;
  box-sizing: border-box;
`;
