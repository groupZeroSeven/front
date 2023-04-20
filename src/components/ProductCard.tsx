import Image from 'next/image';
import {
  Body_2_400,
  Details,
  Heading_7_500,
  Heading_7_600,
  ProductCardStyled,
} from '../styles/global';
import { ProfileAdvertiser } from './profile';

export const ProductCard = ({
  img,
  title,
  desc,
  imageProfile,
  nameProfile,
  km,
  age,
  price,
}: any) => {
  const user = {
    is_seller: true,
  };

  return (
    <>
      <ProductCardStyled>
        <div className="img">
          <Image src={img} alt="" width="250" height="140" />
        </div>
        <Heading_7_600>{title}</Heading_7_600>
        <Body_2_400>{desc}</Body_2_400>
        <ProfileAdvertiser
          imgProfile={imageProfile}
          nameProfile={nameProfile}
        />
        <span>
          <Details href="">{km}</Details>
          <Details href="">{age}</Details>
          <Heading_7_500>{price}</Heading_7_500>
        </span>
      </ProductCardStyled>
    </>
  );
};
