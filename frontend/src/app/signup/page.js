'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { string } from 'yup';
import { useRouter } from 'next/navigation';

const nameRules = /^[A-Za-z\s]{1,20}$/;
// alphabets, max 20, white space allowed
const passwordRules = /^(?=.*[A-Za-z]).{4,}$/;
// minimum 4, at least one alphabets

const schema = yup
  .object({
    email: string().required('Required').email('Cet email nest pas valide'),
    password: string().required('Required').matches(passwordRules, {
      message: 'Password should have min 4characters, more than 1 letter',
    }),
    confirmPassword: string()
      .required('Required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    firstName: string().required('Required').matches(nameRules, {
      message: 'Only alphabets are allowed.',
    }),
    lastName: string().required('Required').matches(nameRules, {
      message: 'Only alphabets are allowed.',
    }),
  })
  .required();

const page = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    router.push('/');
    // redirect('/');
    // actions after the redirection
  };

  return (
    <main className="formMain">
      <div className="formContainer">
        <h1>Sign up</h1>
        <div className="formDiv">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Email</label>
              <input
                {...register('email')}
                placeholder="E-mail"
                required
                type="text"
                name="email"
              />
            </div>
            <div className="error">
              {formState.errors.email?.message !== undefined
                ? `${formState.errors.email?.message}`
                : ''}
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                {...register('password')}
                placeholder="Password"
                required
              />
            </div>
            <div className="error">
              {formState.errors.password?.message !== undefined
                ? `${formState.errors.password?.message}`
                : ''}
            </div>

            <div>
              <label>Confirm password</label>

              <input
                className="form-input"
                type="password"
                placeholder="Confirm password"
                {...register('confirmPassword')}
              />
            </div>
            <div className="error">
              {formState.errors.confirmPassword?.message !== undefined
                ? `${formState.errors.confirmPassword?.message}`
                : ''}
            </div>

            <div>
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                {...register('firstName')}
                placeholder="First Name"
                required
              />
            </div>
            <div className="error">
              {formState.errors.firstName?.message !== undefined
                ? `${formState.errors.firstName?.message}`
                : ''}
            </div>

            <div>
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                {...register('lastName')}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="error">
              {formState.errors.lastName?.message !== undefined
                ? `${formState.errors.lastName?.message}`
                : ''}
            </div>
            <button className="loginBtn">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;
