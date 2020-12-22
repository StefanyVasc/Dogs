import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const activeClassName = 'nav-item-active';

export const HeaderNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: var(--quarternary-color);
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    :hover,
    :focus {
      background: var(--default-color-light);
      box-shadow: 0 0 0 3px var(--quarternary-color);
      border-color: var(--default-color);
      outline: none;
    }
  }
`;

export const NavLinkMenu = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    background: var(--default-color-light);
    box-shadow: 0 0 0 3px var(--tertiary-color);
    border-color: var(--primary-color);
    outline: none;

    svg > * {
      fill: var(--primary-color);
    }
  }
`;
