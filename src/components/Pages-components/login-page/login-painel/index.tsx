import { Button } from "../../../Reusable-components/button/Button";
import { Card } from "../../../Reusable-components/card/Card";
import { Input } from "../../../Reusable-components/input/Input";

import { useState } from "react";
import { useAuth } from "../../../../context/Auth/useAuth";
import React from "react";

export function LoginPainel() {
  const auth = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMensage, setErrorMensage] = useState<string>("");

  async function onLogin() {
    const response = await auth
      .authenticate(email, password)
      .catch((e) => setErrorMensage(e));
    return response;
  }

  return (
    <div className="h-full w-full bg-bgl items-center flex sm:flex-col sm:gap-3 sm:justify-start lg:justify-center pt-10">
      {errorMensage && (
        <div className=" w-4/6 p-2 border-solid border border-rose-600 rounded bg-red-300">
          Usuário ou senha incorretos , verifique no site:{" "}
          <a className="text-actdark" target="_blank" href="http://reqres.in">
            http://reqres.in
          </a>
        </div>
      )}
      <Card size="md">
        <div className="p-8 h-full w-full flex flex-col justify-around  items-center">
          <div className="flex flex-col justify-between  items-center gap-2">
            <h1 className="text-action font-bold text-3xl	 ">Bem Vindo</h1>
            <p className="font-medium">
              Use seu login e senha para entrar no nosso sistema
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Input
              value={email}
              id="emailInput"
              label="Login:"
              type="text"
              placeholder="Digite seu E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              value={password}
              id="passwordInput"
              label="Senha:"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={onLogin} variant="primary" label="Entrar" />
          </div>
        </div>
      </Card>
    </div>
  );
}
