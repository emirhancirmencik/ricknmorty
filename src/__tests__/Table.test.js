
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

    await screen.findByTestId("fetchedData")
    
    const nextButton = screen.getByTestId("next");
    const prevButton = screen.queryByTestId("prev");
    
    expect(screen.getByTestId('pageNumber')).toBeInTheDocument();
    await screen.findByTestId("fetchedData")
    fireEvent.click(nextButton);
    expect(screen.getByTestId('pageNumber').textContent).toBe("2");
    
    fireEvent.click(prevButton);
    expect(screen.getByTestId('pageNumber').textContent).toBe("1");
  });


  test('renders input that filters characters by name', async () => {
    render(<Table nav="Name"/>)

    await screen.findByTestId("loaded")
    
    const nameInput = screen.getByTestId("nameInput")

    let countBeforeRicks = 0;
    let countAfterRicks = 0;

    await waitFor(() => screen.findAllByTestId("element").then(
      (e) => {
        e.forEach((i) => {
          if(i.textContent.toLowerCase().includes("rick")){
            countBeforeRicks++;
          }
        })
      }
    ))
    
    fireEvent.change(nameInput, {target: {value:"rick"}})
    
    expect(nameInput.value).toBe("rick")

    await screen.findByTestId("loading")
    
   
    await screen.findByTestId("loaded")
    
    
      
    await screen.findByTestId("fetchedData")
    await screen.findByTestId("fetchedData")

    await waitFor(() => screen.findAllByTestId("element").then(
      (e) => {
        e.forEach((i) => {
          if(i.textContent.toLowerCase().includes("rick")){
            countAfterRicks++;
          }
        })
      }
    ))

    expect(countAfterRicks).toBeGreaterThanOrEqual(countBeforeRicks)

  });