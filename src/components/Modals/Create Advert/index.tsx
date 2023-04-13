import { Dispatch, SetStateAction } from "react"
import { StyledButtonClose, StyledButtonImg, StyledCreateAdvertModal, StyledDivButtons, StyledInput } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "@/src/services/api";
import { toast } from "react-toastify";
import { Body_2_500, Heading_7_500, Input_label } from "@/src/styles/global";

export interface iCreateAdvertModalProps {
  setIsCreateAdvertModal: Dispatch<SetStateAction<boolean>>
}

export interface iCreateAdvert {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: string | number;
  color: string;
  fipe: string;
  price: string;
  description: string;
  banner: string;
  is_bargain?: boolean;
  is_published?: boolean;
  firstImage?: string;
  secondImage?: string;
  images: string[]
}

const schemaNewAdvert = yup.object({
  brand: yup.string().required("Obrigatório inserir uma marca"),
  model: yup.string().required("Obrigatório inserir um modelo"),
  year: yup.string().required("Obrigatório inserir o ano"),
  fuel: yup.string().required("Obrigatório inserir o tipo de combustível"),
  mileage: yup.string().required("Obrigatório inserir a quilometragem"),
  color: yup.string().required("Obrigatório inserir a cor do veículo"),
  fipe: yup.string().required("Obrigatório inserir o valor FIPE"),
  price: yup.string().required("Obrigatório inserir o preço"),
  description: yup.string().required("Obrigatório inserir uma descrição"),
  banner: yup.string().required("Obrigatório inserir a imagem do veículo"),
  firstImage: yup.string().notRequired(),
  secondImage: yup.string().notRequired()
});

export const CreateAdvertModal = ({setIsCreateAdvertModal}: iCreateAdvertModalProps) => {
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<iCreateAdvert>({
  resolver: yupResolver(schemaNewAdvert),
});

  const handleSubmitFunction = async (data: iCreateAdvert) => {
    data["mileage"] = +data.mileage
    data["is_bargain"] = false
    data["is_published"] = true
    const firstImg = data.firstImage
    delete data.firstImage
    const secondImg = data.secondImage
    delete data.secondImage
    data.images = []
    if (firstImg) {
      data.images.push(firstImg)
    }
    if (secondImg) {
      data.images.push(secondImg)
    }
    try {
      await api.post("/api/anoucements", data);
      toast.success("Anúncio criado com sucesso", {
        theme: "dark",
      });
      setIsCreateAdvertModal(false)
    } catch (err) {
      console.log(err)
      toast.error("Não foi possível criar o anúncio", {
        theme: "dark",
      })
    }
  }
  return (
    <StyledCreateAdvertModal>
      <div className="modal">
        <div className="head">
          <Heading_7_500>Criar anúncio</Heading_7_500>
          <StyledButtonClose className="close" onClick={() => setIsCreateAdvertModal(false)}>X</StyledButtonClose>
        </div>
        <form onSubmit={handleSubmit(handleSubmitFunction)}>
          <Body_2_500 className="info">Informações do veículo</Body_2_500>

          <div className="formSingleInput">
            <Input_label>Marca</Input_label>
            <StyledInput type="text" id="brand" placeholder="Mercedes Benz" {...register("brand")}/>
            <span>{errors.brand?.message}</span>

            <Input_label>Modelo</Input_label>
            <StyledInput type="text" id="model" placeholder="A 200 CGI ADVANCE SEDAN" {...register("model")}/>
            <span>{errors.model?.message}</span>
          </div>
          <div className="formDoubleInput">
            <div className="containerInput">
              <Input_label>Ano</Input_label>
              <StyledInput type="text" id="year" placeholder="2018" {...register("year")}/>
              <span>{errors.year?.message}</span>
            </div>

            <div className="containerInput">
              <Input_label>Combustível</Input_label>
              <StyledInput type="text" id="fuel" placeholder="Gasolina/Etanol" {...register("fuel")}/>
              <span>{errors.fuel?.message}</span>
            </div>

            <div className="containerInput">
              <Input_label>Quilometragem</Input_label>
              <StyledInput type="text" id="mileage" placeholder="30.000" {...register("mileage")}/>
              <span>{errors.mileage?.message}</span>
            </div>

            <div className="containerInput">
              <Input_label>Cor</Input_label>
              <StyledInput type="text" id="color" placeholder="Branco" {...register("color")}/>
              <span>{errors.color?.message}</span>
            </div>

            <div className="containerInput">
              <Input_label>Preço tabela FIPE</Input_label>
              <StyledInput type="text" id="fipe" placeholder="R$ 48.000,00" {...register("fipe")}/>
              <span>{errors.fipe?.message}</span>
            </div>

            <div className="containerInput">
              <Input_label>Preço</Input_label>
              <StyledInput type="text" id="price" placeholder="R$ 50.000,00" {...register("price")}/>
              <span>{errors.price?.message}</span>
            </div>
          </div>
          <div className="formSingleInput">
            <Input_label>Descrição</Input_label>
            <StyledInput type="text" id="description" placeholder="Descrição do anúncio" {...register("description")}/>
            <span>{errors.description?.message}</span>

            <Input_label>Imagem da Capa</Input_label>
            <StyledInput type="text" id="banner" placeholder="https://image.com" {...register("banner")}/>
            <span>{errors.banner?.message}</span>

            <Input_label>1º Imagem da galeria</Input_label>
            <StyledInput type="text" id="firstImage" placeholder="https://image.com" {...register("firstImage")}/>

            <Input_label>2º Imagem da galeria</Input_label>
            <StyledInput type="text" id="secondImage" placeholder="https://image.com" {...register("secondImage")}/>

            <StyledButtonImg type="button">Adicionar campo para imagem da galeria</StyledButtonImg>

            <StyledDivButtons>
              <button className="cancel" onClick={() => setIsCreateAdvertModal(false)}>Cancelar</button>
              <button className="confirm" type="submit">Criar anúncio</button>
            </StyledDivButtons>
          </div>
        </form>
      </div>
    </StyledCreateAdvertModal>
  )
}