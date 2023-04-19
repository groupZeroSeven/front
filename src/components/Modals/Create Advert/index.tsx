import { UserContext } from '@/src/contexts/userContext';
import { api, apiKars } from '@/src/services/api';
import { Body_2_500, Heading_7_500, Input_label } from '@/src/styles/global';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import {
  StyledButtonClose,
  StyledButtonImg,
  StyledCreateAdvertModal,
  StyledDivButtons,
  StyledInput,
  StyledSelect,
  StyledSpanError,
} from './style';
import { schemaNewAdvert } from '@/src/schemas/createAdvert';
import { iCreateAdvert, iModel } from '@/src/interfaces/adverts';
import { AdvertsContext } from '@/src/contexts/advertsContext';

export const CreateAdvertModal = () => {
  const { setIsCreateAdvertModal, isCreateAdvertModal } = React.useContext(UserContext);
  const {brands, selectBrand, selectModelValues, setSelectModelValues, selectModel, selectModelData, setSelectModelData, inputImages, handleImages, handleBrandChange, handleModelChange, fuelType, setIsConfirmModal} = React.useContext(AdvertsContext)
  useEffect(() => {
    const res = async () => {
      try {
        const {data} = await apiKars.get(`/cars?brand=${selectBrand.toLocaleLowerCase()}`)
        setSelectModelValues(data)
      } catch (err) {
        console.log(err)
      }
    }
    if(selectBrand !== "") {
      res()
    }
  }, [selectBrand])

  useEffect(() => {
    const data = async () => {
      const modelData = selectModelValues.filter((model) => (
        model.name === selectModel
      ))
      setSelectModelData(modelData[0])
    }
    if(selectModel !== "") {
      data()
    }
    if (!isCreateAdvertModal) {
      setSelectModelData(undefined)
    }
  }, [selectModel])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreateAdvert>({
    resolver: yupResolver(schemaNewAdvert),
  });

  const handleSubmitFunction = async (data: iCreateAdvert) => {
    data['mileage'] = +data.mileage;
    data['is_bargain'] = false;
    data['is_published'] = true;
    data.fipe = selectModelData!.value.toString()
    data.fuel = fuelType(selectModelData!.fuel)
    data.year = selectModelData!.year

    const image1 = data.image1;
    delete data.image1;
    const image2 = data.image2;
    delete data.image2;
    const image3 = data.image3;
    delete data.image3;
    const image4 = data.image4;
    delete data.image4;
    const image5 = data.image5;
    delete data.image5;
    const image6 = data.image6;
    delete data.image6;

    data.images = [];
    if (image1) {
      data.images.push(image1);
    }
    if (image2) {
      data.images.push(image2);
    }
    if (image3) {
      data.images.push(image3);
    }
    if (image4) {
      data.images.push(image4);
    }
    if (image5) {
      data.images.push(image5);
    }
    if (image6) {
      data.images.push(image6);
    }
    try {
      // await toast.promise(
        api.post('/api/anoucements', data)
        // {
        //   pending: 'Waiting...',
        //   success: 'Anúncio criado com sucesso.',
        // },
        // {
        //   theme: 'dark',
        // }
      // );

      setIsCreateAdvertModal(false);
      setIsConfirmModal(true)
    } catch (err) {
      toast.error('Não foi possível criar o anúncio', {
        theme: 'dark',
      });
    }
  };

  return (
    <StyledCreateAdvertModal>
      <div className="modal">
        <div className="head">
          <Heading_7_500>Criar anúncio</Heading_7_500>
          <StyledButtonClose
            className="close"
            onClick={() => setIsCreateAdvertModal(false)}
          >
            X
          </StyledButtonClose>
        </div>
        <form onSubmit={handleSubmit(handleSubmitFunction)}>
          <Body_2_500 className="info">Informações do veículo</Body_2_500>

          <div className="formSingleInput">
            <Input_label>Marca</Input_label>
            <StyledSelect value={selectBrand} {...register('brand')} onChange={handleBrandChange} >
              <option value="">Selecione uma marca</option>
              {
                brands.map((brand, i) => (
                  <option value={brand} key={i}>{brand}</option>
                )
                )
              }
            </StyledSelect>
            <StyledSpanError>{errors.brand?.message}</StyledSpanError>

            <Input_label>Modelo</Input_label>
            <StyledSelect value={selectModel} {...register('model')} onChange={handleModelChange}>
              <option value="">Selecione um modelo</option>
              {
                selectModelValues.length > 0 && (
                  selectModelValues.map((model) => (
                    <option key={model.id} value={model.name.toLocaleLowerCase()}>{model.name}</option>
                  ))
                )
              }
            </StyledSelect>
            <StyledSpanError>{errors.model?.message}</StyledSpanError>
          </div>
          <div className="formDoubleInput">
            <div className="containerInput">
              <Input_label>Ano</Input_label>
              <StyledInput
                type="text"
                id="year"
                value={selectModelData ? selectModelData.year : ""}
                disabled
              />
              <StyledSpanError>{errors.year?.message}</StyledSpanError>
            </div>

            <div className="containerInput">
              <Input_label>Combustível</Input_label>
              <StyledInput
                type="text"
                id="fuel"
                value={selectModelData ? fuelType(selectModelData.fuel) : ""}
                disabled
              />
              <StyledSpanError>{errors.fuel?.message}</StyledSpanError>
            </div>

            <div className="containerInput">
              <Input_label>Quilometragem</Input_label>
              <StyledInput
                type="text"
                id="mileage"
                placeholder="30.000"
                {...register('mileage')}
              />
              <StyledSpanError>{errors.mileage?.message}</StyledSpanError>
            </div>

            <div className="containerInput">
              <Input_label>Cor</Input_label>
              <StyledInput
                type="text"
                id="color"
                placeholder="Branco"
                {...register('color')}
              />
              <StyledSpanError>{errors.color?.message}</StyledSpanError>
            </div>

            <div className="containerInput">
              <Input_label>Preço tabela FIPE</Input_label>
              <StyledInput
                type="text"
                id="fipe"
                value={selectModelData ? selectModelData.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ""}
                disabled
              />
              <StyledSpanError>{errors.fipe?.message}</StyledSpanError>
            </div>

            <div className="containerInput">
              <Input_label>Preço</Input_label>
              <StyledInput
                type="text"
                id="price"
                placeholder="R$ 50.000,00"
                {...register('price')}
              />
              <StyledSpanError>{errors.price?.message}</StyledSpanError>
            </div>
          </div>
          <div className="formSingleInput">
            <Input_label>Descrição</Input_label>
            <StyledInput
              type="text"
              id="description"
              placeholder="Descrição do anúncio"
              {...register('description')}
            />
            <StyledSpanError>{errors.description?.message}</StyledSpanError>

            <Input_label>Imagem da Capa</Input_label>
            <StyledInput
              type="text"
              id="banner"
              placeholder="https://image.com"
              {...register('banner')}
            />
            <StyledSpanError>{errors.banner?.message}</StyledSpanError>

            {
              inputImages.map((image, i) => (
                <div key={i} style={image ? {display: "block", width: "100%"} : {display: "none"}}>
                      <Input_label >{i + 1}º Imagem da galeria</Input_label>
                      <StyledInput
                        type="text"
                        placeholder="https://image.com"
                        {...i === 0 ? {...register('image1')} : null}
                        {...i === 1 ? {...register('image2')} : null}
                        {...i === 2 ? {...register('image3')} : null}
                        {...i === 3 ? {...register('image4')} : null}
                        {...i === 4 ? {...register('image5')} : null}
                        {...i === 5 ? {...register('image6')} : null}
                      />
                </div>
              ))
            }
    
            <StyledButtonImg type="button" onClick={handleImages}>
              Adicionar campo para imagem da galeria
            </StyledButtonImg>

            <StyledDivButtons>
              <button
                className="cancel"
                onClick={(event) => {
                  event.preventDefault();
                  setIsCreateAdvertModal(false);
                }}
              >
                Cancelar
              </button>
              <button className="confirm" type="submit">
                Criar anúncio
              </button>
            </StyledDivButtons>
          </div>
        </form>
      </div>
    </StyledCreateAdvertModal>
  );
};
