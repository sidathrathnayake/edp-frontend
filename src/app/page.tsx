"use client"
import { InputField } from "@components/index";
import { useState } from "react";

export default function HomePage() {

  const [name, setName] = useState("");

  const handleChangeInput = (value: any) => {
    console.log(value);
    setName(value);
  };

  return (
    <form className="flex flex-col items-center justify-center min-h-screen py-2">
      <InputField
        id="name"
        name="name"
        label="Name"
        value={name}
        handleChangeInput={handleChangeInput}
        customStyles={{
          textColor: "blue",
        }}
        disabled={false}
      />
    </form>
  );
}
