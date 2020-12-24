import styled from 'styled-components';
import { ButtonAnimation } from '../../../styles/settings/animations';

export const CommentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
`;

export const CommentLabel = styled.label`
  grid-area: 1 / span 3;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const CommentTextArea = styled.textarea`
  grid-area: 2/2;
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: var(--typeFirst);
  resize: none;
  border: 1px solid var(--quarternary-color);
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: var(--quarternary-color);
  transition: 0.2s;

  :focus,
  :hover {
    outline: none;
    border-color: var(--primary-color);
    background: var(--default-color-light);
    box-shadow: 0 0 0 3px var(--tertiary-color);
  }
`;

export const CommentButton = styled.button`
  grid-area: 2/3;
  border: none;
  cursor: pointer;
  color: var(--default-color);
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  :focus,
  :hover {
    outline: none;
    svg {
      path {
        fill: var(--tertiary-color);
        stroke: var(--primary-color);
      }
      g {
        animation-duration: 0.6s;
        animation-name: ${ButtonAnimation};
        animation-iteration-count: infinite;
      }
    }
  }
`;
