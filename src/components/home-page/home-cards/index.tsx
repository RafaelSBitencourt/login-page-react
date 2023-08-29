import { Card } from "../../card/Card";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../../button/Button";

export function HomeCards() {
  const navigate = useNavigate();

  function onBack() {
    navigate("/");
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
