'use client';

import styles from './page.module.css';
import ButtonWithLink from './components/ButtonWithLink';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { string } from 'yup';
import { useRouter } from 'next/navigation';

const schema = yup
  .object({
    email: string().required('Required').email('Cet email nest pas valide'),
    password: string().required('Required'),
  })
  .required();

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    router.push('/articles');
  };

  return (
    <main className="formMain">
      <div className="formContainer">
        <h1>Log-in</h1>
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

            <button className="loginBtn" type="submit">
              Log in
            </button>
          </form>
          <div className={styles.buttonWrap}>
            <ButtonWithLink
              text="Sign up"
              page="signup"
              className="signupBtn"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
