import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useForm, Controller } from 'react-hook-form';
import './MultiStageForm'; // Adjust the path according to your project structure
import '@testing-library/jest-dom/extend-expect';

describe('MultiStageForm', () => {
    test('should display an error message when full name is empty', async () => {
        render(<MultiStageForm />);

        // Navigate to the next stage
        fireEvent.click(screen.getByRole('button', { name: /next/i }));

        expect(await screen.findByText(/full name is required/i)).toBeInTheDocument();
    });

    test('should display an error message when date of birth is empty', async () => {
        render(<MultiStageForm />);

        fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
        fireEvent.click(screen.getByRole('button', { name: /next/i }));

        expect(await screen.findByText(/date of birth is required/i)).toBeInTheDocument();
    });

    test('should display an error message for invalid email', async () => {
        render(<MultiStageForm />);

        fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
        fireEvent.input(screen.getByLabelText(/date of birth/i), { target: { value: '1990-01-01' } });
        fireEvent.input(screen.getByLabelText(/nationality/i), { target: { value: 'American' } });
        fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'invalidEmail' } });
        fireEvent.input(screen.getByLabelText(/phone/i), { target: { value: '1234567890' } });
        fireEvent.click(screen.getByRole('button', { name: /next/i }));

        expect(await screen.findByText(/email is not valid/i)).toBeInTheDocument();
    });

    test('should display an error message for invalid phone number', async () => {
        render(<MultiStageForm />);

        fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
        fireEvent.input(screen.getByLabelText(/date of birth/i), { target: { value: '1990-01-01' } });
        fireEvent.input(screen.getByLabelText(/nationality/i), { target: { value: 'American' } });
        fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
        fireEvent.input(screen.getByLabelText(/phone/i), { target: { value: '123' } });
        fireEvent.click(screen.getByRole('button', { name: /next/i }));

        expect(await screen.findByText(/phone number must be 10 digits/i)).toBeInTheDocument();
    });

    test('should allow valid form submission', async () => {
        render(<MultiStageForm />);

        fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
        fireEvent.input(screen.getByLabelText(/date of birth/i), { target: { value: '1990-01-01' } });
        fireEvent.input(screen.getByLabelText(/nationality/i), { target: { value: 'American' } });
        fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
        fireEvent.input(screen.getByLabelText(/phone/i), { target: { value: '1234567890' } });
        fireEvent.click(screen.getByRole('button', { name: /next/i }));

        // Continue filling out stage 1 form and submit...
        fireEvent.input(screen.getByLabelText(/departure date/i), { target: { value: '2025-01-01' } });
        fireEvent.input(screen.getByLabelText(/return date/i), { target: { value: '2025-12-31' } });
        fireEvent.input(screen.getByLabelText(/accommodation preference/i), { target: { value: 'Space Hotel' } });
        fireEvent.click(screen.getByRole('button', { name: /next/i }));

        // Continue filling stage 2 and submit...
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        // Expect success message
        expect(await screen.findByText(/form submission successful/i)).toBeInTheDocument();
    });
});
