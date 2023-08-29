import { useNavigate } from "react-router-dom";
import { Button } from "../../button/Button";
import { Card } from "../../card/Card";
import { Input } from "../../input/Input";

import React from "react";

export function LoginPainel() {
  const navigate = useNavigate();

  function onLogin() {
    navigate("/home");
  }

  return (
    <div className="h-full w-full bg-bgl flex justify-center items-center">
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
              id="emailInput"
              label="Login:"
              type="text"
              placeholder="Digite seu E-mail"
            />
            <Input
              id="passwordInput"
              label="Senha:"
              type="password"
              placeholder="Digite sua senha"
            />
            <Button onClick={onLogin} variant="primary" label="Entrar" />
          </div>
        </div>
      </Card>
    </div>
  );
}
