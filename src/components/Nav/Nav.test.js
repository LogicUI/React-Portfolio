import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Nav from './Nav';

describe('menu', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory({ initialEntries: ['/'] });
  });
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
