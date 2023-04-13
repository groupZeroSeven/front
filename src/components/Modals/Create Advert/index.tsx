import { Dispatch, SetStateAction } from "react"
import { StyledCreateAdvertModal } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "@/src/services/api";
import { toast } from "react-toastify";

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
  price: string | number;
  description: string;
  banner: string;
  is_bargain?: boolean;
  is_published?: boolean;
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
  banner: yup.string().required("Obrigatório inserir a imagem do veículo")
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
    data["price"] = +data.price
    data["is_bargain"] = false
    data["is_published"] = true
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
          <h2>Criar anúncio</h2>
          <button onClick={() => setIsCreateAdvertModal(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(handleSubmitFunction)}>
          <h3>Informações do veículo</h3>

          <div className="formSingleInput">
            <label htmlFor="brand">Marca</label>
            <input type="text" id="brand" placeholder="Mercedes Benz" {...register("brand")}/>
            <span>{errors.brand?.message}</span>

            <label htmlFor="model">Modelo</label>
            <input type="text" id="model" placeholder="A 200 CGI ADVANCE SEDAN" {...register("model")}/>
            <span>{errors.model?.message}</span>
          </div>
          <div className="formDoubleInput">
            <div className="containerInput">
              <label htmlFor="year">Ano</label>
              <input type="text" id="year" placeholder="2018" {...register("year")}/>
              <span>{errors.year?.message}</span>
            </div>

            <div className="containerInput">
              <label htmlFor="fuel">Combustível</label>
              <input type="text" id="fuel" placeholder="Gasolina/Etanol" {...register("fuel")}/>
              <span>{errors.fuel?.message}</span>
            </div>

            <div className="containerInput">
              <label htmlFor="mileage">Quilometragem</label>
              <input type="text" id="mileage" placeholder="30.000" {...register("mileage")}/>
              <span>{errors.mileage?.message}</span>
            </div>

            <div className="containerInput">
              <label htmlFor="color">Cor</label>
              <input type="text" id="color" placeholder="Branco" {...register("color")}/>
              <span>{errors.color?.message}</span>
            </div>

            <div className="containerInput">
              <label htmlFor="fipe">Preço tabela FIPE</label>
              <input type="text" id="fipe" placeholder="R$ 48.000,00" {...register("fipe")}/>
              <span>{errors.fipe?.message}</span>
            </div>

            <div className="containerInput">
              <label htmlFor="price">Preço</label>
              <input type="text" id="price" placeholder="R$ 50.000,00" {...register("price")}/>
              <span>{errors.price?.message}</span>
            </div>
          </div>
          <div className="formSingleInput">
            <label htmlFor="description">Descrição</label>
            <input type="text" id="description" placeholder="Descrição do anúncio" {...register("description")}/>
            <span>{errors.description?.message}</span>

            <label htmlFor="banner">Imagem da Capa</label>
            <input type="text" id="banner" placeholder="https://image.com" {...register("banner")}/>
            <span>{errors.banner?.message}</span>

            <label htmlFor="firstImage">1º Imagem da galeria</label>
            <input type="text" id="firstImage" placeholder="https://image.com"/>

            <label htmlFor="secondImage">2º Imagem da galeria</label>
            <input type="text" id="secondImage" placeholder="https://image.com"/>

            <span>Adicionar campo para imagem da galeria</span>

            <div>
              <button onClick={() => setIsCreateAdvertModal(false)}>Cancelar</button>
              <button type="submit">Criar anúncio</button>
            </div>
          </div>
        </form>
      </div>
    </StyledCreateAdvertModal>
  )
}