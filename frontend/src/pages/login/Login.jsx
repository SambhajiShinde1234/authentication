import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { POST } from '../../http';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const {
    mutate: mutateRegister,
    isPending: isPendingRegister,
    isError: isErrorRegister,
    error: errorRegister,
    // data: dataRegister,
  } = useMutation({
    mutationFn: (data) => {
      POST('user/register', data);
    },
    onSuccess: (response) => {
      console.log({response});
    },
    onError: (error) => {
      console.log({error})
    }
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    mutateRegister(user);
  };

  if (isPendingRegister) return <p style={{ fontSize: '5rem' }}>Registering.....</p>;
  if (isErrorRegister) { console.log(errorRegister)};

  return (
    <form onSubmit={handleRegister}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          flexDirection: 'column',
        }}
      >
        username:{' '}
        <input
          type="text"
          value={user.username}
          name="username"
          required
          onChange={handleChange}
        />
        email:
        <input
          type="email"
          value={user.email}
          name="email"
          required
          onChange={handleChange}
        />
        password:
        <input
          type="password"
          value={user.password}
          name="password"
          required
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default Login;
