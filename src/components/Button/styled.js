import styled from 'styled-components';

export const ButtonForm = styled.button`
  font-size: 1rem;
  font-family: var(--typeFirst);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: var(--primary-color);
  color: var(--secondary-color);
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  min-width: 0.8rem;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--tertiary-color), 0 0 0 4px var(--primary-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
