import { styled } from 'styled-components';
import logotype from '../assets/point-logo.svg';

export const Header = () => {
  return (
    <HeaderWrapper>
      <a href='/'>
        <LogotypeWrapper src={logotype} />
      </a>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: full;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
  @media (max-width: 835px) {
    padding-bottom: 12px;
    padding-top: 12px;
  }
`;

const LogotypeWrapper = styled.img`
  width: 170px;
  height: 48px;
  @media (max-width: 835px) {
    width: 85px;
    height: 24px;
  }
`;
