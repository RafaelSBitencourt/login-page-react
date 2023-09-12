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

  async function onLogin() {
    const loginRequest = await auth.authenticate(email, password);
    return loginRequest;
  }

  return (
    <div className="h-full w-full bg-bgl flex justify-center items-start lg:items-center pt-10">
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
