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

  it('should have widht and height 40px', () => {
    expect.assertions(2);

    const component = render(<Logo />);
    const logo = component.getByTitle('logo');

    expect(logo).toHaveStyle('height: 40px');
    expect(logo).toHaveStyle('width: 40px');
  });

  it('should have widht and height 20px with small size prop', () => {
    expect.assertions(2);

    const component = render(<Logo size="small" />);
    const logo = component.getByTitle('logo');

    expect(logo).toHaveStyle('height: 20px');
    expect(logo).toHaveStyle('width: 20px');
  });

  it('should have widht and height 135px with large size prop', () => {
    expect.assertions(2);

    const component = render(<Logo size="large" />);
    const logo = component.getByTitle('logo');

    expect(logo).toHaveStyle('height: 135px');
    expect(logo).toHaveStyle('width: 135px');
  });
});
