import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form">
        <label>
          Usuário
          <input type="text" name="username" />
        </label>
        <label>
          Senha
          <input type="password" name="password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
