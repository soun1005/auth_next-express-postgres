import styles from './page.module.css';
import ButtonWithLink from './components/ButtonWithLink';

export default function Home() {
  return (
    <main className="formMain">
      <div className="formContainer">
        <h1>Log-in</h1>
        <div className="formDiv">
          <form className="form">
            <label for="email">Email</label>
            <input type="text" name="email" value="" />

            <label for="password">Password</label>
            <input type="password" name="password" value="" />
          </form>
          <div className={styles.buttonWrap}>
            <button className="loginBtn" type="submit">
              Log in
            </button>
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
