import Reloj from "@/components/clase_04/Reloj";
import { useState } from "react";


export default function Home() {

  const [visible, setVisible] = useState(false)


  return (
    <>
      <Reloj/>
    </>
  );
}


