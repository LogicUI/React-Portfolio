import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import TabBar from './TabBar';

describe('tabs', () => {
  it('should be able to render the home link in the sideList correctly', () => {
    const { getByText } = render(<TabBar />);
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should be able to render the about link in the sideList correctly', () => {
    const { getByText } = render(<TabBar />);
    expect(getByText('About')).toBeInTheDocument();
  });

  it('should be able to render the Project link in the sideList correctly', () => {
    const { getByText } = render(<TabBar />);
    expect(getByText('Projects')).toBeInTheDocument();
  });

  it('should be about the Contact Me in the sideBar correctly', () => {
    const { getByText } = render(<TabBar />);
    expect(getByText('Contact Me')).toBeInTheDocument();
  });
});
