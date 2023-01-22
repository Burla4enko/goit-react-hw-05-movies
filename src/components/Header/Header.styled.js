import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: all 0.3s ease;

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover {
    box-shadow: 3px 3px 10px 3px gray;
  }
`;

export const StyledHeader = styled.header`
  padding: 20px;
  background-color: lightgray;
`;

export const NavList = styled.ul`
  display: flex;

  > li:not(last-child) {
    margin-right: 10px;
  }
`;
