import styled, { createGlobalStyle } from 'styled-components';
import { List, CircularProgress } from '@material-ui/core';

export default createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    width: 100vw;
    /* background: #E6EAF9; */
    background: #F6F6F6;
  }

  a {
    font-weight: bold;
    color: #086288;

    &:hover {
      color: #54ccff;
      text-decoration: underline;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #71767C;
    border-radius: 4px;
  }
`;

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

export const StyledBody = styled.main`
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const CenteredSection = styled.div`
  flex-basis: 600px;
  min-height: 400px;
  padding: 25px;
  background: white;
  margin: 50px 0;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 12%);

  @media (min-width: 425px) {
    padding: 25px 70px;
  }
`;

export const StyledList = styled(List)`
  margin-top: 20px;
  font-size: 18px;

  li {
    padding: 0;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h1`
  text-transform: capitalize;
`;

export const ButtonLoader = styled(CircularProgress)`
  margin-left: 10px;
`;

ButtonLoader.defaultProps = {
  size: 18,
};

export const StyledImage = styled.img`
  margin: 10px 0;
`;

StyledImage.defaultProps = {
  height: '150px',
  width: '150px',
};

export const ApplicationStatusDescription = styled.p`
  font-size: 20px;
`;
