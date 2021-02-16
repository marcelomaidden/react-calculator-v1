/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import regeneratorRuntime from 'regenerator-runtime';
import App from './App';

describe('Calculator', () => {
  it('Renders the Calculator page', () => {
    const calculator = renderer
      .create(<App />)
      .toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Calculator component', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('Adds two numbers', async () => {
    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/300/);
    expect(display).toBeInTheDocument();
  });

  it('Substracts two numbers', async () => {
    await userEvent.click(screen.getByText('4'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('-'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/420/);
    expect(display).toBeInTheDocument();
  });

  it('Multiplies two numbers', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('X'));
    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/20/);
    expect(display).toBeInTheDocument();
  });

  it('Divides two numbers', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('÷'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/10/);
    expect(display).toBeInTheDocument();
  });

  it('Turns number in percentage', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('%'));
    const display = await screen.findByText(/0.02/);
    expect(display).toBeInTheDocument();
  });

  it('Turns positive number into negative number', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('+/-'));
    const display = await screen.findByText(/-2/);
    expect(display).toBeInTheDocument();
  });

  it('Turns negative number into positive number', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('+/-'));
    await userEvent.click(screen.getByText('+/-'));
    const display = await screen.findByText(/20/);
    expect(display).toBeInTheDocument();
  });

  it('Clears the display', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('AC'));
    expect(screen.queryByText('20')).toBeNull();
  });
});
