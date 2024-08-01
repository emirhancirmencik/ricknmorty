
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Table from "../Components/Table.js"
import { handlers } from '../mocks/handler.js'

import { setupServer } from 'msw/node'





export const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())




test('renders a button that changes gender filter', () => {
  render(<Table />)
  const genderButton = screen.queryByTestId("gender");
  expect(screen.getByText('Gender')).toBeInTheDocument();   
  fireEvent.click(genderButton);
  expect(screen.getByText('Male')).toBeInTheDocument();
  fireEvent.click(genderButton);
  expect(screen.getByText('Female')).toBeInTheDocument();
  fireEvent.click(genderButton);
  expect(screen.getByText('Gender')).toBeInTheDocument();
});



test('renders a button that changes status filter', () => {
  render(<Table />)
  const status = screen.queryByTestId("status");
  expect(screen.getByText('Status')).toBeInTheDocument();
  fireEvent.click(status);
  expect(screen.getByText('Alive')).toBeInTheDocument();
  fireEvent.click(status);
  expect(screen.getByText('Dead')).toBeInTheDocument();
  fireEvent.click(status);
  expect(screen.getByText('Status')).toBeInTheDocument();
});

test('renders buttons that navigate pages', async () => {
    render(<Table nav="All"/>)
    const nextButton = screen.getByTestId("next");
    const prevButton = screen.queryByTestId("prev");

    
    expect(screen.getByTestId('pageNumber')).toBeInTheDocument();
    fireEvent.click(nextButton);
    await waitFor(async () => await expect(screen.getByTestId("pageNumber")).toBeInTheDocument());
    
    fireEvent.click(prevButton);
    await waitFor(async () => await expect(screen.getByTestId("pageNumber")).toBeInTheDocument());
  });