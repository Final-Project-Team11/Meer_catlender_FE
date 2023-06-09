import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import styled from 'styled-components';
import Loading from '../components/Loading/Loading';

const Main = lazy(() => import('../pages/Main/Main'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const MasterSignup = lazy(() => import('../pages/MasterSignup/MasterSignup'));
const MyPage = lazy(() => import('../pages/MyPage/MyPage'));
const Manager = lazy(() => import('../pages/Manager/Manager'));
const Business = lazy(() => import('../pages/Business/Business'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Wrapper>
            <Loading sizes="big" />
          </Wrapper>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/masterSignup" element={<MasterSignup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/business" element={<Business />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Router;
