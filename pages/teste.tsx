import { CreateAdvertModal } from "@/src/components/Modals/Create Advert";
import { EditAdvertModal } from "@/src/components/Modals/Edit Advert";
import { UserContext } from "@/src/contexts/userContext";
import React, {  useState } from "react";

const Teste = () => {
  const { setIsCreateAdvertModal, isCreateAdvertModal, isEditAdvertModal, setIsEditAdvertModal } = React.useContext(UserContext);
  const advert = 	{
		"id": "834f811b-6436-4e9e-b96f-cd6f765c50f9",
		"brand": "Fiat",
		"banner": "aaaaaaaaaa",
		"model": "aaaaaaaaaa",
		"year": "22",
		"fuel": "aaaaaaaa",
		"mileage": 22,
		"color": "aaaaaaa",
		"price": "22.00",
		"description": "aaaaaaa",
		"is_bargain": false,
		"is_published": true,
		"created_at": "2023-04-13T22:26:25.606Z",
		"updated_at": "2023-04-13T22:41:32.095Z"
	}
  return (
    <>
      <div>
        {isCreateAdvertModal ? (
          <CreateAdvertModal />
        ) : null
        }
        {isEditAdvertModal ? (
          <EditAdvertModal setIsEditAdvertModal={setIsEditAdvertModal} advert={advert}/>
        ) : null
        }
          <h1>Teste</h1>
          <button onClick={() => setIsCreateAdvertModal(true)}>Criar</button>
          <button onClick={() => setIsEditAdvertModal(true)}>Editar</button>
      </div>
    </>
  )
}

export default Teste