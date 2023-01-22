import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: calc(100% / 5);
`;

export const CastName = styled.div`
  flex-grow: 1;
`;
