import { Body_1_400, Heading_7_500 } from "@/src/styles/global";
import { StyledConfirmModal } from "./style";
import { StyledButtonClose } from "../Create Advert/style";
import { AdvertsContext } from "@/src/contexts/advertsContext";
import React from "react";


export interface iConfirmModalProps {
  title: string;
  message: string;
}

export const ConfirmModal = ({title, message}: iConfirmModalProps) => {
  const {setIsConfirmModal} = React.useContext(AdvertsContext)
  return (
    <StyledConfirmModal>
      <div className="modal">
        <div className="head">
          <Heading_7_500>Sucesso!</Heading_7_500>
          <StyledButtonClose onClick={() => setIsConfirmModal(false)}>X</StyledButtonClose>
        </div>
        <div className="body">
          <Heading_7_500>{title}</Heading_7_500>
          <Body_1_400>{message}</Body_1_400>
        </div>
      </div>
    </StyledConfirmModal>
  )
}