import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import AddTask from '../Pages/AddTask';

jest.mock('axios');

describe('AddTask component', () => {
  test('renders AddTask component', () => {
    render(<AddTask />);
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  test('handles form submission', async () => {
    axios.post.mockResolvedValueOnce({ status: 201 });

    render(<AddTask />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Test Description' } });

    // Simulate button click
    fireEvent.click(screen.getByText('Add'));

    // Wait for the axios.post to be called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/add', {
        title: 'Test Title',
        description: 'Test Description',
      });
    });

    // Ensure data is cleared
    expect(screen.getByLabelText('Title').value).toBe('');
    expect(screen.getByLabelText('Description').value).toBe('');
  });

  test('handles form submission with empty fields', async () => {
    render(<AddTask />);

    // Simulate button click with empty fields
    fireEvent.click(screen.getByText('Add'));

  });
});
