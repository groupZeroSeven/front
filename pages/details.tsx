import { ButtonBig } from '@/src/components/button-big';
import { ButtonMedium } from '@/src/components/button-medium';
import { Header } from '@/src/components/header';
import { ProfileAdvertiser } from '@/src/components/profile';
import { MainDetailsStyle } from '@/src/styles/details';
import {
  Body_1_400,
  Body_2_400,
  Details,
  Heading_6_600,
  Heading_7_500,
} from '@/src/styles/global';
import Image from 'next/image';

const fotos = [
  '/image/car.png',
  '/image/car.png',
  '/image/car.png',
  '/image/car.png',
  '/image/car.png',
  '/image/car.png',
];

const commits = [
  {
    img: '/image/profile.png',
    name: 'Júlia Lima',
    date: 'há 3 dias',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    img: '/image/profile.png',
    name: 'Marcos Antônio',
    date: 'há 7 dias',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    img: '/image/profile.png',
    name: 'Camila Silva',
    date: 'há 1 mês',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default function DetailsPage() {
  return (
    <>
      <Header />
      <MainDetailsStyle>
        <div className="container">
          <span>
            <span>
              <div className="menu-one">
                <section className="img-default">
                  <Image
                    src="/image/car2.png"
                    alt="Car"
                    width={294}
                    height={253}
                  />
                </section>

                <section className="info-car">
                  <Heading_6_600>
                    Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                  </Heading_6_600>
                  <div>
                    <Details href="">2013</Details>
                    <Details href="">0 KM</Details>
                  </div>
                  <Heading_7_500>R$ 00.000,00</Heading_7_500>
                  <span>
                    <ButtonMedium
                      bgColor="var(--color-brand-1)"
                      fontColor="var(--color-whiteFixed)"
                      borderColor="var(--color-brand-1)"
                    >
                      Comprar
                    </ButtonMedium>
                  </span>
                </section>

                <section className="description">
                  <Heading_6_600>Descrição</Heading_6_600>
                  <Body_1_400>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Body_1_400>
                </section>
              </div>

              <div className="menu-two">
                <section className="photo-car">
                  <Heading_6_600>Fotos</Heading_6_600>
                  <ul>
                    {fotos.map((el, i) => (
                      <li key={i}>
                        <Image src={el} alt="Fotos" width={95} height={55} />
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="profile">
                  <Image
                    src="/image/profile.png"
                    alt="Profile"
                    width={77}
                    height={77}
                  ></Image>
                  <Heading_6_600>Samuel Leão</Heading_6_600>
                  <Body_1_400>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                  </Body_1_400>
                  <div>
                    <ButtonBig
                      bgColor="var(--color-grey-0)"
                      fontColor="var(--color-whiteFixed)"
                      borderColor="var(--color-grey-0)"
                    >
                      Ver todos anuncios
                    </ButtonBig>
                  </div>
                </section>
              </div>
            </span>
            <span>
              <div className="menu-three">
                <section className="commits">
                  <Heading_6_600>Comentários</Heading_6_600>
                  <ul>
                    {commits.map((el, i) => (
                      <li key={i}>
                        <div>
                          <ProfileAdvertiser
                            imgProfile={el.img}
                            nameProfile={el.name}
                          />
                          <Image
                            src="/image/ellipse.png"
                            alt="Ellipse"
                            width={4}
                            height={4}
                          ></Image>
                          <p>{el.date}</p>
                        </div>
                        <Body_2_400>{el.text}</Body_2_400>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="commit">
                  <ProfileAdvertiser
                    imgProfile="/image/profile.png"
                    nameProfile="Diego"
                  />
                  <textarea placeholder="Carro muito confortável, foi uma ótima experiência de compra..."></textarea>
                  <span>
                    <ButtonMedium
                      bgColor="var(--color-brand-1)"
                      fontColor="var(--color-whiteFixed)"
                      borderColor="var(--color-brand-1)"
                    >
                      Comentar
                    </ButtonMedium>
                  </span>
                  <div>
                    <p>Gostei muito!</p>
                    <p>Incrível</p>
                    <p>Recomendarei para meus amigos!</p>
                  </div>
                </section>
              </div>
            </span>
          </span>
        </div>
      </MainDetailsStyle>
    </>
  );
}
