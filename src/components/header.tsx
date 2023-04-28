import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { UserContext } from '../contexts/userContext';
import { Body_1_400, Body_1_600, Button_medium_text } from '../styles/global';
import { HeaderStyled } from '../styles/header';
import { ButtonBig } from './button-big';
import { ProfileAdvertiser } from './profile';
import { EditUserModal } from './Modals/Edit User';
import { EditAddressModal } from './Modals/Edit Addres';

export const Header = () => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);

  const { user, userLogout } = React.useContext(UserContext);
  const { setIsEditUserModal, isEditUserModal, isEditAddressModal, setIsEditAddressModal }  = React.useContext(UserContext);

  const openMenuHandler = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  const openMenuMobileHandler = () => {
    if (openMenuMobile) {
      setOpenMenuMobile(false);
    } else {
      setOpenMenuMobile(true);
    }
  };

  return (
    <>
    {isEditUserModal ? (<><EditUserModal/></>) : null}
    {isEditAddressModal ? (<><EditAddressModal/></>) : null}
    <HeaderStyled>
      <Image
        src="/image/logo.png"
        alt="Logo"
        width={153}
        height={26}
        onClick={() => router.push('/')}
        style={{ cursor: 'pointer' }}
      />
      <nav>
        <div className="mobile">
          {openMenuMobile ? (
            <>
              <CloseIcon
                fontSize="large"
                onClick={() => openMenuMobileHandler()}
              />
              <span>
                {user ? (
                  <div>
                    <Button_medium_text
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--color-grey-2)',
                        borderColor: 'transparent',
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        setIsEditUserModal(true)
                      }}
                    >
                      <Body_1_400>Editar Perfil</Body_1_400>
                    </Button_medium_text>

                    <Button_medium_text
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--color-grey-2)',
                        borderColor: 'transparent',
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        setIsEditAddressModal(true)
                      }}
                    >
                      <Body_1_400>Editar endereço</Body_1_400>
                    </Button_medium_text>
                    {user.is_seller && (
                      <Button_medium_text
                        style={{
                          backgroundColor: 'transparent',
                          color: 'var(--color-grey-2)',
                          borderColor: 'transparent',
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          router.push('/dashboard');
                        }}
                      >
                        <Body_1_400>Meus Anúncios</Body_1_400>
                      </Button_medium_text>
                    )}

                    <Button_medium_text
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--color-grey-2)',
                        borderColor: 'transparent',
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        userLogout();
                      }}
                    >
                      <Body_1_400>Sair</Body_1_400>
                    </Button_medium_text>
                  </div>
                ) : (
                  <div>
                    <ButtonBig
                      bgColor="transparent"
                      fontColor="var(--color-grey-2)"
                      borderColor="transparent"
                    >
                      <Body_1_600
                      onClick={() => router.push('/login')}
                        style={{
                          textAlign: 'start',
                          width: '100%',
                        }}
                      >
                        Fazer Login
                      </Body_1_600>
                    </ButtonBig>
                    <ButtonBig
                      bgColor="transparent"
                      fontColor="var(--color-grey-2)"
                      borderColor="var(--color-grey-4)"
                    >
                      <Body_1_600 style={{ padding: '12px 28px' }}
                      onClick={() => router.push('/register')}>
                        Cadastrar
                      </Body_1_600>
                    </ButtonBig>
                  </div>
                )}
              </span>
            </>
          ) : (
            <>
              <MenuIcon
                fontSize="large"
                onClick={() => openMenuMobileHandler()}
              />
            </>
          )}
        </div>

        {!user ? (
          <div className="computer">
            <ButtonBig
              bgColor="transparent"
              fontColor="var(--color-grey-2)"
              borderColor="transparent"
            >
              <Body_1_600 onClick={() => router.push('/login')} style={{ width: '100px' }}>Fazer Login</Body_1_600>
            </ButtonBig>
            <ButtonBig
              bgColor="transparent"
              fontColor="var(--color-grey-2)"
              borderColor="var(--color-grey-4)"
            >
              <Body_1_600 style={{ padding: '12px 28px' }} onClick={() => router.push('/register')}>
                Cadastrar
              </Body_1_600>
            </ButtonBig>
          </div>
        ) : (
          <>
            <div
              className="computer"
              onClick={() => openMenuHandler()}
              style={{ cursor: 'pointer' }}
            >
              <ProfileAdvertiser
                imgProfile="/image/profile.png"
                nameProfile="Diego Monteiro"
              />
            </div>
            {openMenu && (
              <span className="computerSpan">
                <Button_medium_text
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--color-grey-2)',
                    borderColor: 'transparent',
                  }}
                  onClick={(event) => {
                    event.preventDefault();
                    setIsEditUserModal(true)
                  }}
                >
                  <Body_1_400>Editar Perfil</Body_1_400>
                </Button_medium_text>

                <Button_medium_text
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--color-grey-2)',
                    borderColor: 'transparent',
                  }}
                  onClick={(event) => {
                    event.preventDefault();
                    setIsEditAddressModal(true)
                  }}
                >
                  <Body_1_400>Editar endereço</Body_1_400>
                </Button_medium_text>
                {user.is_seller && (
                  <Button_medium_text
                    style={{
                      backgroundColor: 'transparent',
                      color: 'var(--color-grey-2)',
                      borderColor: 'transparent',
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      router.push('/dashboard');
                    }}
                  >
                    <Body_1_400>Meus Anúncios</Body_1_400>
                  </Button_medium_text>
                )}

                <Button_medium_text
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--color-grey-2)',
                    borderColor: 'transparent',
                  }}
                  onClick={(event) => {
                    event.preventDefault();
                    userLogout();
                  }}
                >
                  <Body_1_400>Sair</Body_1_400>
                </Button_medium_text>
              </span>
            )}
          </>
        )}
      </nav>
    </HeaderStyled>
    </>
  );
};
