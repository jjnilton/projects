import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('renders the header and its children', () => {
  test('renders all three children elements', () => {
    const { container } = render(<Header toggleDrawerVisibility={() => {}}></Header>);
    const headerElement = container.firstChild;
    expect(headerElement?.childNodes.length).toEqual(3); 
  }); 

  test('renders logo in the header', () => {
    const { container } = render(<Header toggleDrawerVisibility={() => {}} />);
    const logoElement = container.querySelector('header')?.firstChild;
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('viewBox');
  });

  test('renders the header', () => {
    const { container } = render(<Header toggleDrawerVisibility={() => {}} />);
    const h1Element = container.querySelector('header')?.childNodes[1];
    expect(h1Element).toBeInTheDocument();
    expect(h1Element?.nodeName).toEqual('h1'.toUpperCase());
  });

  test('renders the settings button', () => {
    const { container } = render(<Header toggleDrawerVisibility={() => {}}></Header>);
    const settingsElement = container.querySelector('header')?.lastChild;
    expect(settingsElement).toBeInTheDocument();
    expect(settingsElement?.nodeName).toEqual('button'.toUpperCase());
  })

});
