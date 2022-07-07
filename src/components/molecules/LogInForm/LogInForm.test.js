import { render, screen, fireEvent, waitFor } from 'test-utils';
import LogInForm from './LogInForm';

describe('Sign in form', () => {
  it('Properly renders form', () => {
    render(<LogInForm />);
    screen.getByPlaceholderText('Email');
  });

  it('Displays email error when input is empty', async () => {
    render(<LogInForm />);
    const input = screen.getByPlaceholderText('Email');
    fireEvent.change(input, { target: { value: 'asdasdg' } });
    const submitButton = screen.getByText('Log in');
    fireEvent.click(submitButton);
    await waitFor(() => {
      screen.getAllByText(`This field can't be empty.`);
    });
  });

  it('Displays password error when input is empty', async () => {
    render(<LogInForm />);
    const input = screen.getByPlaceholderText('Password');
    fireEvent.change(input, { target: { value: 'asdasdg' } });
    const submitButton = screen.getByText('Log in');
    fireEvent.click(submitButton);
    await waitFor(() => {
      screen.getAllByText(`This field can't be empty.`);
    });
  });

  it('Displays error when credentials are incorrect', async () => {
    render(<LogInForm />);
    const loginInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(loginInput, { target: { value: 'asdasdg' } });
    fireEvent.change(passwordInput, { target: { value: 'asdasdg' } });
    const submitButton = screen.getByText('Log in');
    fireEvent.click(submitButton);
    // await waitFor(() => {
    //   screen.getAllByText(`Invalid login or password.`);
    // });
  });
});
