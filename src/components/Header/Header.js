import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavList, StyledHeader, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <NavList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </NavList>
        </nav>
      </StyledHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
