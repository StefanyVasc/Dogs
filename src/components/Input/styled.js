import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;
export const Input = styled.input`
  border: 1px solid var(--quarternary-color);
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: var(--quarternary-color);
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: var(--primary-color);
    background: var(--default-color-light);
    box-shadow: 0 0 0 3px var(--tertiary-color);
  }
`;
export const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;
export const InputError = styled.p`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
