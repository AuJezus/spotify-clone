"use client";

import React, { FC } from "react";
import { Toaster } from "react-hot-toast";

interface ToasterProviderProps {}

export const ToasterProvider: FC<ToasterProviderProps> = ({}) => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
};
