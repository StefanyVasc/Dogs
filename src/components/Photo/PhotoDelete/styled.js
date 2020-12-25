import styled from 'styled-components';

export const PhotoDeleteButton = styled.button`
  background: var(--grey-lightner);
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--typeFirst);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  :focus,
  :hover {
    outline: none;
    background: var(--default-color-light);
    box-shadow: 0 0 0 3px var(--quarternary-color);
    border-color: var(--default-color);
  }
`;
