import { Card } from "../../card/Card";
import Button from "../../button/Button";
import { useAuth } from "../../../context/Auth/useAuth";

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
