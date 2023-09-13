import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('submits the form with user input', async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const messageTextarea = screen.getByLabelText('Message:');
    const submitButton = screen.getByText('Submit');

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Hello, World!' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // You can assert that a success message is displayed or any other behavior you expect after submission.
    // For example, if you expect a success message:
    await waitFor(() => {
      expect(screen.getByText('Message sent successfully')).toBeInTheDocument();
    });
  });
});
