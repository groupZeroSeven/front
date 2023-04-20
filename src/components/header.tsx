import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Body_1_400, Body_1_600 } from '../styles/global';
import { HeaderStyled } from '../styles/header';
import { ButtonBig } from './button-big';
import { ButtonMedium } from './button-medium';
import { ProfileAdvertiser } from './profile';

export const Header = () => {
  const user = false;
  const vendedor = true;

  const router = useRouter();

  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);

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
              {' '}
              <CloseIcon
                fontSize="large"
                onClick={() => openMenuMobileHandler()}
              />
              <span>
                {user ? (
                  <div>
                    <ButtonMedium
                      bgColor="transparent"
                      fontColor="var(--color-grey-2)"
                      borderColor="transparent"
                    >
                      <Body_1_400 style={{ padding: 22 }}>
                        Editar Perfil
                      </Body_1_400>
                    </ButtonMedium>
                    <ButtonMedium
                      bgColor="transparent"
                      fontColor="var(--color-grey-2)"
                      borderColor="transparent"
                    >
                      <Body_1_400 style={{ padding: 22 }}>
                        Editar endereço
                      </Body_1_400>
                    </ButtonMedium>
                    {vendedor && (
                      <ButtonMedium
                        bgColor="transparent"
                        fontColor="var(--color-grey-2)"
                        borderColor="transparent"
                      >
                        <Body_1_400 style={{ padding: 22 }}>
                          Meus Anúncios
                        </Body_1_400>
                      </ButtonMedium>
                    )}
                    <ButtonMedium
                      bgColor="transparent"
                      fontColor="var(--color-grey-2)"
                      borderColor="transparent"
                    >
                      <Body_1_400 style={{ padding: 22 }}>Sair</Body_1_400>
                    </ButtonMedium>
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
                <ButtonMedium
                  bgColor="transparent"
                  fontColor="var(--color-grey-2)"
                  borderColor="transparent"
                >
                  <Body_1_400 style={{ width: '100%', padding: 22 }}>
                    Editar Perfil
                  </Body_1_400>
                </ButtonMedium>
                <ButtonMedium
                  bgColor="transparent"
                  fontColor="var(--color-grey-2)"
                  borderColor="transparent"
                >
                  <Body_1_400 style={{ width: '100%', padding: 22 }}>
                    Editar endereço
                  </Body_1_400>
                </ButtonMedium>
                {vendedor && (
                  <ButtonMedium
                    bgColor="transparent"
                    fontColor="var(--color-grey-2)"
                    borderColor="transparent"
                  >
                    <Body_1_400 style={{ width: '100%', padding: 22 }}>
                      Meus Anúncios
                    </Body_1_400>
                  </ButtonMedium>
                )}
                <ButtonMedium
                  bgColor="transparent"
                  fontColor="var(--color-grey-2)"
                  borderColor="transparent"
                >
                  <Body_1_400 style={{ width: '100%', padding: 22 }}>
                    Sair
                  </Body_1_400>
                </ButtonMedium>
              </span>
            )}
          </>
        )}
      </nav>
    </HeaderStyled>
  );
};
