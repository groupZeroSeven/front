import { CreateAdvertModal } from "@/src/components/Modals/Create Advert";
import { EditAdvertModal } from "@/src/components/Modals/Edit Advert";
import {  useState } from "react";

const Teste = () => {
  const [isCreateAdvertModal, setIsCreateAdvertModal] = useState<boolean>(false)
  const [isEditAdvertModal, setIsEditAdvertModal] = useState<boolean>(false)
  const advert = 	{
		"id": "58182151-af42-474b-b3d4-ec9a5b00b3f0",
		"brand": "yyyyyyyyyyy",
		"banner": "yyyyyy",
		"model": "yyyyyyyyy",
		"year": "55",
		"fuel": "yyyyyyyy",
		"mileage": 55,
		"color": "yyyyyyyy",
		"price": "55.00",
		"description": "yyyyyyy",
		"is_bargain": false,
		"is_published": true,
		"created_at": "2023-04-13T20:07:09.109Z",
		"updated_at": "2023-04-13T20:07:09.109Z"
	}
  return (
    <>
      <div>
        {isCreateAdvertModal ? (
          <CreateAdvertModal setIsCreateAdvertModal={setIsCreateAdvertModal}/>
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