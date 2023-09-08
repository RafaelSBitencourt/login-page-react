import React from "react";

import { useAuth } from "../../../../context/Auth/useAuth";
import { Card } from "../../../Reusable-components/card/Card";
import { Button } from "../../../Reusable-components/button/Button";

export function HomeCards() {
  const auth = useAuth();

  function onBack() {
    auth.logout();
  }
  return (
    <div className="bg-bgl flex flex-col justify-center items-center h-full w-full gap-4">
      <Card size="md">
        <div className=" p-4 ">
          <h1>Parábens você logou 😀</h1>
        </div>
      </Card>
      <Button variant="outline" label="Voltar" onClick={onBack}></Button>
    </div>
  );
}
