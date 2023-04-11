import Image from 'next/image';
import { AdvertiserStyled, Body_2_500 } from '../styles/global';

export const ProfileAdvertiser = ({ imgProfile, nameProfile }: any) => {
  return (
    <AdvertiserStyled>
      <Image src={imgProfile} alt={nameProfile} width="32" height="32" />
      <Body_2_500>{nameProfile}</Body_2_500>
    </AdvertiserStyled>
  );
};
