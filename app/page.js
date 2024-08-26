import React from "react";
import Button from "./_components/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <h1>Hello Button</h1>
      <div className="flex gap-10 items-center">
        <Button />
        <Button />
      </div>

      <h1>How are you?</h1>
    </div>
  );
}
