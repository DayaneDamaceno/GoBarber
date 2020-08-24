import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Input';

import logo from '../../assets/gobarber_logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();

  async function handleSubmit({ email, password }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail valido')
          .required('A senha é obrigatória'),
        password: Yup.string().required('A senha é obrigatória'),
      });
      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );
      // Validation passed

      dispatch(signInRequest(email, password));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Validation failed
        console.tron.log(err);
      }
    }
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Email address" />
        <Input type="password" name="password" placeholder="Password secret" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
