import Contador from "@/components/clase_05/Contador";
import Contador2 from "@/components/clase_05/Contador2";
import { useState } from "react";


export default function Home() {

  const [visible, setVisible] = useState(false)


  return (
    <>
      <Contador/>
      <Contador2/>
    </>
  );
}


