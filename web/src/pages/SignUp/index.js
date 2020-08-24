import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Input';

import logo from '../../assets/gobarber_logo.svg';

export default function SignUp() {
  const dispatch = useDispatch();

  async function handleSubmit({ name, email, password }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Insira um e-mail valido')
          .required('A senha é obrigatória'),
        password: Yup.string()
          .min(6, 'A senha deve ter no mínimo 6 caracteres')
          .required('A senha é obrigatória'),
      });
      await schema.validate(
        { name, email, password },
        {
          abortEarly: false,
        }
      );
      // Validation passed

      dispatch(signUpRequest(name, email, password));
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
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Email address" />
        <Input type="password" name="password" placeholder="Password secret" />
        <button type="submit">Cadastrar</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
