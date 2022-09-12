import React from "react";
import styles from "./Login.css"

export default function Login() {
  return (
    <>
      <section>
        <div className={styles.imgBx}>
          <img src="bg.jpg" />
        </div>
        <div class="contentBx">
          <div class="formBx">
            <h2>Login</h2>
            <form>
              <div class="inputBx">
                <span>Username</span>
                <input type="text" name="" />
              </div>
              <div class="inputBx">
                <span>Password</span>
                <input type="password" name="" />
              </div>
              <div class="remember">
                <label>
                  <input type="checkbox" name="" />
                  Remember me
                </label>
              </div>
              <div class="inputBx">
                <input type="submit" value="Sign in" name="" />
              </div>
              <div class="inputBx">
                <p>
                  Don't have an account? <a href="#">Sign up</a>
                </p>
              </div>
            </form>
            <h3>Login with social media</h3>
            <ul class="sci">
              <li>
                <img src="facebook.png" />
              </li>
              <li>
                <img src="twitter.png" />
              </li>
              <li>
                <img src="instagram.png" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
