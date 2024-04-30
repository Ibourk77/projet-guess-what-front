import { render, fireEvent } from '@testing-library/svelte';
import Register from './Register.svelte';

describe('Register component', () => {
  it('renders the registration form', () => {
    const { getByText, getByLabelText } = render(Register);

    // Check if the form elements are rendered
    expect(getByText('Inscription')).toBeInTheDocument();
    expect(getByLabelText('Pseudo')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Mot de passe')).toBeInTheDocument();
    expect(getByLabelText('Confirmation du mot de passe')).toBeInTheDocument();
    expect(getByText('Créer un compte')).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    const { getByLabelText, getByText } = render(Register);

    // Fill in the form fields
    fireEvent.input(getByLabelText('Pseudo'), { target: { value: 'JohnDoe' } });
    fireEvent.input(getByLabelText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.input(getByLabelText('Mot de passe'), { target: { value: 'password123' } });
    fireEvent.input(getByLabelText('Confirmation du mot de passe'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(getByText('Créer un compte'));

    // Assert that the form is submitted successfully
    // You can add your own assertions here based on your application logic
  });

  it('displays an error message for invalid form data', async () => {
    const { getByLabelText, getByText } = render(Register);

    // Fill in the form fields with invalid data
    fireEvent.input(getByLabelText('Pseudo'), { target: { value: '' } });
    fireEvent.input(getByLabelText('Email'), { target: { value: 'invalid-email' } });
    fireEvent.input(getByLabelText('Mot de passe'), { target: { value: 'password123' } });
    fireEvent.input(getByLabelText('Confirmation du mot de passe'), { target: { value: 'password456' } });

    // Submit the form
    fireEvent.click(getByText('Créer un compte'));

    // Assert that the error message is displayed
    // You can add your own assertions here based on your application logic
  });
});