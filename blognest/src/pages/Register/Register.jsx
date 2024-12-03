import styles from "./Register.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useState, useEffect } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password != confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter ao menos 6 caracteres.");
      return;
    }

    const res = await createUser(user);

    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <section className={styles.register}>
      <div id={styles.register_wrapper}>
        <div className={styles.register_titles}>
          <h1>Cadastro</h1>
          <h2>
            Crie sua conta e <span>junte-se</span> a nossa comunidade!
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
              type="text"
              name="displayName"
              required
              placeholder="Nome de usuário"
            />
          </label>
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
          <label>
            <span>Confirmar senha:</span>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirme sua senha"
            />
          </label>
          <button type="submit" className="submit-btn">
            Cadastrar
          </button>
          {error && <p className="error">{error}</p>}
          {loading && <p>Aguarde...</p>}
        </form>
      </div>
    </section>
  );
};

export default Register;
