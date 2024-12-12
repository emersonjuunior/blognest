import styles from "./Login.module.css"
import { useAuthentication } from "../../hooks/useAuthentication";
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <section className={styles.login}>
      <div className={styles.login_wrapper}>
        <div className={styles.login_titles}>
          <h1>Login</h1>
          <h2>
            Entre para continuar <span>escrevendo</span> histórias!
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email:</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              required
              placeholder="Insira seu email"
            />
          </label>
          <label>
            <span>Senha:</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              required
              placeholder="Insira sua senha"
            />
          </label>
          <button type="submit" className="submit-btn">
            Entrar
          </button>
          {error && <p className="error">{error}</p>}
          {loading && <p>Aguarde...</p>}
        </form>
      </div>
    </section>
  );
}

export default Login
