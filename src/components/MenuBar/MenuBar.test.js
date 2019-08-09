import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import MenuBar from './MenuBar';

describe('menu', () => {
  let NavNames;
  beforeEach(() => {
    NavNames = ['Home', 'About', 'Projects', 'Contact Me'];
  });

  it('should be able to render the menu button correctly', () => {
    const { getByLabelText } = render(<MenuBar links={NavNames} />);

    expect(getByLabelText('menuButton')).toBeInTheDocument();
  });

  it('should be able to render the menu icon correctly', () => {
    const { getByTestId } = render(<MenuBar links={NavNames} />);
    expect(getByTestId('menuIcon')).toBeInTheDocument();
  });
});

describe('sidelist', () => {
  let NavNames;
  beforeEach(() => {
    NavNames = ['Home', 'About', 'Projects', 'Contact Me'];
  });

  it('should be able to render the home link in the sideList correctly', () => {
    const { getByText, getByLabelText } = render(<MenuBar links={NavNames} />);
    fireEvent.click(getByLabelText('menuButton'));
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should be able to render the about link in the sideList correctly', () => {
    const { getByText, getByLabelText } = render(<MenuBar links={NavNames} />);
    fireEvent.click(getByLabelText('menuButton'));
    expect(getByText('About')).toBeInTheDocument();
  });

  it('should be able to render the Project link in the sideList correctly', () => {
    const { getByText, getByLabelText } = render(<MenuBar links={NavNames} />);
    fireEvent.click(getByLabelText('menuButton'));
    expect(getByText('Projects')).toBeInTheDocument();
  });

  it('should be about the Contact Me in the sideBar correctly', () => {
    const { getByText, getByLabelText } = render(<MenuBar links={NavNames} />);
    fireEvent.click(getByLabelText('menuButton'));
    expect(getByText('Contact Me')).toBeInTheDocument();
  });
});
