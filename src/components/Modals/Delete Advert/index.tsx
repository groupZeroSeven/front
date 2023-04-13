import { Dispatch, SetStateAction } from "react"
import { StyledDeleteAdvertModal } from "./style"
import { api } from "@/src/services/api"
import { toast } from "react-toastify"
import { Body_2_500, Heading_7_500 } from "@/src/styles/global"
import { StyledDivButtons } from "../Create Advert/style"

export interface iDeleteAdvertModalProps {
  setIsDeleteModal: Dispatch<SetStateAction<boolean>>
  advertId: string
  setIsEditAdvertModal: Dispatch<SetStateAction<boolean>>
}
export const DeleteAdvertModal = ({setIsDeleteModal, advertId, setIsEditAdvertModal}: iDeleteAdvertModalProps) => {

  const deleteAdvert = async () => {
    try {
      await api.delete(`/api/anoucements/${advertId}`);
      toast.success("Anúncio deletado com sucesso", {
        theme: "dark",
      });
      setIsDeleteModal(false)
      setIsEditAdvertModal(false)
    } catch (err) {
      console.log(err)
      toast.error("Não foi possível deletar o anúncio", {
        theme: "dark",
      })
    }
  }
  return (
    <StyledDeleteAdvertModal>
      <div className="modal">
        <Heading_7_500>Excluir anúncio</Heading_7_500>
        <Heading_7_500>Tem certeza que deseja remover este anúncio?</Heading_7_500>
        <Body_2_500>Essa ação não pode ser desfeita. Isso excluirá permanentemente seu anúncio</Body_2_500>
        <StyledDivButtons>
          <button className="cancel" onClick={() => setIsDeleteModal(false)}>Cancelar</button>
          <button className="delete" onClick={deleteAdvert}>Sim, excluir anúncio</button>
        </StyledDivButtons>
      </div>
    </StyledDeleteAdvertModal>
  )
}