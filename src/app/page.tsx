"use client";
import { InputField } from "@components/index";
import { COLOR_PALETTE } from "@constants/color.constants";
import { useState } from "react";

export default function HomePage() {

  const [name, setName] = useState("");

  const handleChangeInput = (value: any) => {
    setName(value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <InputField
        id="name"
        name="name"
        label="Name"
        value={name}
        customStyles={{
          textColor: COLOR_PALETTE.RED,
        }}
        handleChangeInput={handleChangeInput}
        disabled={false}
      />
    </div>
  );
}
