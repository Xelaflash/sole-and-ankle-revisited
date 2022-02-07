/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { keyframes } from 'styled-components';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <Filler />
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};


const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right:0;
  padding: 16px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 300px;
  }
`;

const backdropFadeIn = keyframes`
  0% {
    background: hsl(220deg 5% 40% / 0.0);
  }
  100% {
    background: hsl(220deg 5% 40% / 0.8);
  }
`;

// we compose from reach ui styles
const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
  animation: 350ms ${backdropFadeIn} ease-out;
`;

const Content = styled(DialogContent)`
  background: var(--color-white);
  height: 100%;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  animation: 250ms ${slideIn} ease-out;
`;



const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeIn} ease-in 300ms backwards;
  animation-delay: 250ms;
`;

const NavLink = styled.nav`
  color:var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.125rem;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default MobileMenu;
