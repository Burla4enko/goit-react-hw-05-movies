import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
`;

export const MoviesItem = styled.li`
  width: calc((100% / 3) - 32px);
  padding-bottom: 8px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 8px;
    object-fit: contain;
  }

  span {
    padding: 4px 8px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: black;
`;
