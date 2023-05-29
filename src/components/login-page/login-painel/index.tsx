import "../../../styles/utilities/display.css";
import "../../../styles/utilities/spaces.css";
import "../../../styles/components/card.css";
import "../../../styles/components/container.css";
import "../../../styles/components/button.css";
import "../../../styles/components/input.css";

import "./styles.css";

export function LoginPainel() {
  return (
    <div className="height__full flex__center--center">
      <div className="card flex__center--start column width__half">
        <div className="flex__start--center width__full column gap__1-5">
          <div className="flex__center--center column gap__1">
            <h1>Bem Vindo</h1>
            <p>Entre com sua Conta para ser Autenticado</p>
          </div>

          <div className="flex__center--start column gap__1 width__full ">
            <div className="flex__center--start column gap__0-2  width__full">
              <label htmlFor="login-field">Login:</label>
              <div className="input-container width__full">
                <input
                  id="login-field"
                  name="login-field"
                  type="text"
                  placeholder="Digite seu E-mail"
                />
              </div>
            </div>
            <div className="flex__center--start column gap__0-2  width__full">
              <label htmlFor="senha-field">Senha:</label>
              <div className="input-container width__full">
                <input
                  id="senha-field"
                  name="senha-field"
                  type="text"
                  placeholder="Digite sua Senha"
                />
              </div>
            </div>
          </div>
          <button className="button__primary padding__1 width__full">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
