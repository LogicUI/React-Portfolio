import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import './node_modules/@testing-library/jest-dom/extend-expect';
import ListComponent from './ListComponent';

describe('ListItemComponent', () => {
  it('should be able to render the home text correctly', () => {
    const { getByText } = render(<ListComponent text="Home" />);
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should be able to render the about text correctly', () => {
    const { getByText } = render(<ListComponent text="About" />);
    expect(getByText('About')).toBeInTheDocument();
  });
});
