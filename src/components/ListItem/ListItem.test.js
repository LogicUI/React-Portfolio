import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import ListItem from './ListItem';

describe('ListItemComponent', () => {
  it('should be able to render the home text correctly', () => {
    const { getByText } = render(<ListItem text="Home" />);
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should be able to render the about text correctly', () => {
    const { getByText } = render(<ListItem text="About" />);
    expect(getByText('About')).toBeInTheDocument();
  });
});
