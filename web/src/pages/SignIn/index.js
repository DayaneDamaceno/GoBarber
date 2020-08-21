import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';

import logo from '../../assets/gobarber_logo.svg';

export default function SignIn() {
  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail valido')
          .required('A senha é obrigatória'),
        password: Yup.string().required('A senha é obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.tron.log(data);
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
