import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Nav from './Nav';

describe('Nav component', () => {
  describe('Links', () => {
    let history;
    beforeEach(() => {
      history = createMemoryHistory({ initialEntries: ['/'] });
    });

    it('should be able to render the home link', () => {
      const { getByText } = render(
        <Router history={history}>
          <Nav />
        </Router>
      );
      expect(getByText('Home')).toBeInTheDocument();
    });

    it('should be able to render the about link', () => {
      const { getByText } = render(
        <Router history={history}>
          <Nav />
        </Router>
      );
      expect(getByText('About')).toBeInTheDocument();
    });

    it('should be able to render the Projects link', () => {
      const { getByText } = render(
        <Router history={history}>
          <Nav />
        </Router>
      );
      expect(getByText('Projects')).toBeInTheDocument();
    });

    it('should be able to render the Contact Me link', () => {
      const { getByText } = render(
        <Router history={history}>
          <Nav />
        </Router>
      );
      expect(getByText('Contact Me')).toBeInTheDocument();
    });

    describe('menu', () => {
      it('should be able to render the menu button correctly', () => {
        const { getByLabelText } = render(
          <Router history={history}>
            <Nav />
          </Router>
        );

        expect(getByLabelText('menuButton')).toBeInTheDocument();
      });

      it('should be able to render the menu icon correctly', () => {
        const { getByTestId } = render(
          <Router history={history}>
            <Nav />
          </Router>
        );
        expect(getByTestId('menuIcon')).toBeInTheDocument();
      });
    });
  });
});
