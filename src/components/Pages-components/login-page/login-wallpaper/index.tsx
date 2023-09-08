import React from "react";

export function LoginWallpaper() {
  return (
    <div className="bg-[url('/ondes.jpg')] bg-cover bg-no-repeat bg-initial bg-center">
      <div className="h-full w-full flex flex-col justify-center items-center gap-2">
        <img src="/boat-blue-logo.svg" width="250px" height="250px" />
        <h1 className="text-bgl font-bold text-3xl">Maré Náutica</h1>
      </div>
    </div>
  );
}
