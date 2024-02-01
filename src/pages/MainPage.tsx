import styled from 'styled-components';
import { Header } from '../components/Header';
import { ArticleList } from '../components/ArticleList';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  font-family: 'Onest', sans-serif;
`;

export const MainPage = () => {
  return (
    <MainWrapper>
      <Header />
      <ArticleList />
    </MainWrapper>
  );
};
