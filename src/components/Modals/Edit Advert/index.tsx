import { AdvertsContext } from '@/src/contexts/advertsContext';
import { UserContext } from '@/src/contexts/userContext';
import { iAdvert, iEditAdvert, iImage } from '@/src/interfaces/adverts';
import { schemaEditAdvert } from '@/src/schemas/editAdvert';
import { api } from '@/src/services/api';
import { Body_2_500, Heading_7_500, Input_label } from '@/src/styles/global';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  StyledButtonClose,
  StyledButtonImg,
  StyledDivButtons,
  StyledInput,
} from '../Create Advert/style';
import { DeleteAdvertModal } from '../Delete Advert';
import { StyledEditAdvertModal } from './style';

export const EditAdvertModal = ({ id }: any) => {
  const { getEspecificAdverts, patchAdverts } = useContext(AdvertsContext);
  const [advert, setAdvert] = useState<iAdvert>();
  const [isPublished, setIsPublished] = useState<boolean>(true);
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
  const [inputImageEdit, setInputImageEdit] = useState<boolean[]>([true, true])
  const {
    setIsEditAdvertModal,
    userLogout,
    myAnnouncement,
    setMyAnnouncement,
  } = React.useContext(UserContext);

  useEffect(() => {
    async function getAdvert(id: string | undefined) {
      const advert2: iAdvert = await getEspecificAdverts(id);
      setAdvert(advert2);
      setIsPublished(advert2.is_published)
    }

    getAdvert(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditAdvert>({
    resolver: yupResolver(schemaEditAdvert),
  });

  const handleImagesEdit = (): void => {
    setInputImageEdit((prevInputImages) => {
      if (prevInputImages.length < 6) {
        return [...prevInputImages, true];
      }
      return prevInputImages;
    });
  };

  const handleSubmitFunction = async (data: iEditAdvert) => {

    const token = localStorage.getItem('token');

    if (!token) return userLogout();
    if (advert) {
      if (advert.is_published !== isPublished) {
        data.is_published = isPublished;
      } else {
        delete data.is_published;
      }
      for (const key in data) {
        if (data.hasOwnProperty(key) && data[key] === '') {
            delete data[key];
           }
      }

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

      const images = [];
      if (image1) {
        images.push(image1);
      }
      if (image2) {
        images.push(image2);
      }
      if (image3) {
        images.push(image3);
      }
      if (image4) {
        images.push(image4);
      }
      if (image5) {
        images.push(image5);
      }
      if (image6) {
        images.push(image6);
      }
      if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          const req: iImage = {"url": ""}
          req["url"] = images[i]
          try {
            api.post(`/api/images/${advert.id}`, req, {
              headers: { Authorization: `Bearer ${token}` },
            });
          } catch (err) {
            console.log(err);
          }
        }
      }
      if (Object.keys(data).length > 0) {
        try {
          const res = await api.patch(`/api/anoucements/${advert.id}`, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const filter = myAnnouncement?.filter((el) => el.id !== advert.id);
          
          setMyAnnouncement([res.data, ...filter!]);

          toast.success('Anúncio alterado com sucesso', {
            theme: 'dark',
          });
    
          setIsEditAdvertModal(false);
        } catch (err) {
          toast.error('Não foi possível alterar o anúncio', {
            theme: 'dark',
          });
        }
      }

      if (Object.keys(data).length === 0 && images.length > 0) {
        toast.success('Anúncio alterado com sucesso', {
          theme: 'dark',
        });
        setIsEditAdvertModal(false)
      }
    }
  };

  return (
    <>
      <StyledEditAdvertModal>
        {isDeleteModal ? (
          <DeleteAdvertModal
            setIsDeleteModal={setIsDeleteModal}
            advertId={advert!.id}
            setIsEditAdvertModal={setIsEditAdvertModal}
          />
        ) : null}
        <div className="modal">
          <div className="head">
            <Heading_7_500>Editar anúncio</Heading_7_500>
            <StyledButtonClose onClick={() => setIsEditAdvertModal(false)}>
              X
            </StyledButtonClose>
          </div>
          <form onSubmit={handleSubmit(handleSubmitFunction)}>
            <Body_2_500>Informações do veículo</Body_2_500>

            <div className="formSingleInput">
              <Input_label>Marca</Input_label>
              <StyledInput
                type="text"
                id="brand"
                placeholder={advert ? advert.brand : ""}
                {...register('brand')}
                disabled
              />

              <Input_label>Modelo</Input_label>
              <StyledInput
                type="text"
                id="model"
                placeholder={advert ? advert.model : ""}
                {...register('model')}
                disabled
              />
            </div>
            <div className="formDoubleInput">
              <div className="containerInput">
                <Input_label>Ano</Input_label>
                <StyledInput
                  type="text"
                  id="year"
                  placeholder={advert ? advert.year : ""}
                  {...register('year')}
                  disabled
                />
              </div>

              <div className="containerInput">
                <Input_label>Combustível</Input_label>
                <StyledInput
                  type="text"
                  id="fuel"
                  placeholder={advert ? advert.fuel : ""}
                  {...register('fuel')}
                  disabled
                />
              </div>

              <div className="containerInput">
                <Input_label>Quilometragem</Input_label>
                <StyledInput
                  type="text"
                  id="mileage"
                  placeholder={advert ? advert.mileage.toString() : ""}
                  {...register('mileage')}
                />
              </div>

              <div className="containerInput">
                <Input_label>Cor</Input_label>
                <StyledInput
                  type="text"
                  id="color"
                  placeholder={advert ? advert.color : ""}
                  {...register('color')}
                />
              </div>

              <div className="containerInput">
                <Input_label>Preço tabela FIPE</Input_label>
                <StyledInput
                  type="text"
                  id="fipe"
                  placeholder={advert ? advert.fip : ""}
                  {...register('fip')}
                  disabled
                />
              </div>

              <div className="containerInput">
                <Input_label>Preço</Input_label>
                <StyledInput
                  type="text"
                  id="price"
                  placeholder={advert ? advert.price : ""}
                  {...register('price')}
                />
              </div>
            </div>
            <div className="formSingleInput">
              <Input_label>Descrição</Input_label>
              <StyledInput
                type="text"
                id="description"
                placeholder={advert ? advert.description : ""}
                {...register('description')}
              />

              <Input_label>Publicado</Input_label>
              <StyledDivButtons>
                <button
                  type="button"
                  style={
                    isPublished
                      ? {
                          backgroundColor: 'var(--color-brand-1)',
                          color: 'var(--color-whiteFixed)',
                        }
                      : {
                          backgroundColor: 'var(--color-whiteFixed)',
                          color: 'var(--color-grey-0)',
                        }
                  }
                  onClick={() => setIsPublished(true)}
                >
                  SIM
                </button>
                <button
                  type="button"
                  style={
                    isPublished
                      ? {
                          backgroundColor: 'var(--color-whiteFixed)',
                          color: 'var(--color-grey-0)',
                        }
                      : {
                          backgroundColor: 'var(--color-brand-1)',
                          color: 'var(--color-whiteFixed)',
                        }
                  }
                  onClick={() => setIsPublished(false)}
                >
                  NÃO
                </button>
              </StyledDivButtons>
              <Input_label>Imagem da Capa</Input_label>
              <StyledInput
                type="text"
                id="banner"
                placeholder="https://image.com"
                {...register('banner')}
              />

            {inputImageEdit.map((image, i) => (
              <div
                key={i}
                style={
                  image
                    ? { display: 'block', width: '100%' }
                    : { display: 'none' }
                }
              >
                <Input_label>{i + 1}º Imagem da galeria</Input_label>
                <StyledInput
                  type="text"
                  placeholder="https://image.com"
                  {...(i === 0 ? { ...register('image1') } : null)}
                  {...(i === 1 ? { ...register('image2') } : null)}
                  {...(i === 2 ? { ...register('image3') } : null)}
                  {...(i === 3 ? { ...register('image4') } : null)}
                  {...(i === 4 ? { ...register('image5') } : null)}
                  {...(i === 5 ? { ...register('image6') } : null)}
                />
              </div>
            ))}   

              <StyledButtonImg type="button" onClick={handleImagesEdit}>
                Adicionar campo para imagem da galeria
              </StyledButtonImg>

              <StyledDivButtons>
                <button
                  className="cancel"
                  type="button"
                  onClick={() => setIsDeleteModal(true)}
                >
                  Excluir anúncio
                </button>
                <button className="confirm" type="submit">
                  Salvar alterações
                </button>
              </StyledDivButtons>
            </div>
          </form>
        </div>
      </StyledEditAdvertModal>
    </>
  );
};
