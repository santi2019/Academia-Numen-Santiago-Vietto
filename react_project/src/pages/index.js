import React from "react";
import Seccion from "@/components/clase_02/Seccion";
import Boton from "@/components/clase_02/Boton";

export default function Home() {
  return (
    <>
      <Seccion/>

      <Boton bgColor="Pink" text="Login"/>
      <Boton bgColor="Blue" text="Register"/>
    </>
  );
}


