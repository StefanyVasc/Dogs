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

export const NavMobile = styled(HeaderNav).attrs(({ customProperty }) => ({
  customProperty,
}))`
  display: block;
  grid-template-columns: none;
  gap: none;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background: var(--default-color-light);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: translateX(-10px);
  opacity: 0;
  pointer-events: none;

  &.navMobileActive {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    pointer-events: initial;
    z-index: 100;
  }

  button {
    border-bottom: none;
  }

  svg {
    margin-right: 0.5rem;
  }

  a,
  button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;

    :hover svg > * {
      fill: var(--primary-color);
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

export const MobileButton = styled.button`
  background: var(--quarternary-color);
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  ::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  :hover,
  :focus,
  &.mobileButtonActive {
    outline: none;
    background: var(--default-color-light);
    box-shadow: 0 0 0 3px var(--tertiary-color);
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  &.mobileButtonActive {
    ::after {
      transform: rotate(-90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
  }
`;
