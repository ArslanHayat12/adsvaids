import styled from 'styled-components';

export const StyledNavBar = styled('nav')`
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;

  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (min-width: 992px) {
    .menu {
      display: none;
    }
  }

  .logo {
    height: 32px;
    margin-left: 1rem;
  }
`;
