import { CreateAdvertModal } from "@/src/components/Modals/Create Advert";
import {  useState } from "react";

const Teste = () => {
  const [isCreateAdvertModal, setIsCreateAdvertModal] = useState<boolean>(false)

  return (
    <div>
      {isCreateAdvertModal ? (
        <CreateAdvertModal setIsCreateAdvertModal={setIsCreateAdvertModal}/>
      ) : null
      }
        <h1>Teste</h1>
        <button onClick={() => setIsCreateAdvertModal(true)}>Criar</button>
    </div>
  )
}

export default Teste