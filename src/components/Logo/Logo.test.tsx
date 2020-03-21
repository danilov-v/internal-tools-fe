import React from 'react';
import { render } from '@testing-library/react';

import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render and match snapshot', () => {
    const component = render(<Logo />);

    expect(component.baseElement).toMatchSnapshot();
  });

  it('should render logo with image logo_captioned.svg', () => {
    const component = render(<Logo captioned />);
    const logoFileName = component.getByAltText('logo').getAttribute('src');

    expect(logoFileName).toEqual('logo_captioned.svg');
  });

  it('should render logo with image logo.svg', () => {
    const component = render(<Logo />);
    const logoFileName = component.getByAltText('logo').getAttribute('src');

    expect(logoFileName).toEqual('logo.svg');
  });

  it('should have widht and height 3rem', () => {
    expect.assertions(2);

    const component = render(<Logo />);
    const logo = component.getByTitle('logo');

    expect(logo).toHaveStyle('height: 3rem');
    expect(logo).toHaveStyle('width: 3rem');
  });

  it('should have widht and height 1.5rem with small size prop', () => {
    expect.assertions(2);

    const component = render(<Logo size="small" />);
    const logo = component.getByTitle('logo');

    expect(logo).toHaveStyle('height: 1.5rem');
    expect(logo).toHaveStyle('width: 1.5rem');
  });

  it('should have widht and height 8.5rem with large size prop', () => {
    expect.assertions(2);

    const component = render(<Logo size="large" />);
    const logo = component.getByTitle('logo');

    expect(logo).toHaveStyle('height: 8.5rem');
    expect(logo).toHaveStyle('width: 8.5rem');
  });
});
