import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';
import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileActions>
          <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} color={'var(--color-gray-900)'}/>
            <VisuallyHidden>
              Open cart
            </VisuallyHidden>
          </ UnstyledButton>
          <UnstyledButton>
              <Icon id="search" strokeWidth={2} color={'var(--color-gray-900)'}/>
            <VisuallyHidden>
              Search
            </VisuallyHidden>
          </ UnstyledButton>
          <UnstyledButton>
              <Icon id="menu" strokeWidth={2} color={'var(--color-gray-900)'} onClick={() => setShowMobileMenu(true)}/>
            <VisuallyHidden>
              Menu
            </VisuallyHidden>
          </ UnstyledButton>
        </ MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
  }
  @media ${QUERIES.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  /* gap: 48px; */
  gap: clamp(
    1rem,
    9.2vw - 4.5rem,
    3.5rem
  );
  margin: 0px 48px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
    @media ${QUERIES.tabletAndDown} {
      flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;
    @media ${QUERIES.tabletAndDown} {
      display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileActions = styled.div`
  display:none;
  @media ${QUERIES.tabletAndDown} {
    display:flex;
    align-items: center;
    justify-content: flex-end;
    gap: 32px
  }
  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

export default Header;
