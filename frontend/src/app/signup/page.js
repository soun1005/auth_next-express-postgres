import styles from './page.module.css';

const page = () => {
  return (
    <main className="formMain">
      <div className="formContainer">
        <h1>Sign up</h1>
        <div className="formDiv">
          <form className="form">
            <label for="email">Email</label>
            <input type="text" name="email" value="" />

            <label for="password">Password</label>
            <input type="password" name="password" value="" />

            <label for="firstName">First name</label>
            <input type="firstName" name="text" value="" />

            <label for="lastName">Last name</label>
            <input type="lastName" name="text" value="" />
          </form>
          <div className={styles.buttonWrap}>
            <button className="loginBtn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
