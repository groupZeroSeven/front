import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    :root {
        font-size: 62.5%;
      
        --color-brand-1: #4529E6;
        --color-brand-2: #5126EA;
        --color-brand-3: #B0A6F0;
        --color-brand-4: #EDEAFD;

        --color-grey-0: #0B0D0D;
        --color-grey-1: #212529;
        --color-grey-2: #495057;
        --color-grey-3: #868E96;
        --color-grey-4: #ADB5BD;
        --color-grey-5: #CED4DA;
        --color-grey-6:#DEE2E6;
        --color-grey-7:#E9ECEF;
        --color-grey-8:#F1F3F5;
        --color-grey-9:#F8F9FA;
        --color-grey-10:#FDFDFD;

        --color-whiteFixed: #FFFFFF;

        --color-alert-1: #CD2B31;
        --color-alert-2: #FDD8D8;
        --color-alert-3: #FFE5E5;

        --color-sucess-1: #18794E;
        --color-sucess-2: #CCEBD7;
        --color-sucess-3: #DDF3E4;

        --color-random-1: #E34D8C;
        --color-random-2: #C04277;
        --color-random-3: #7D2A4D;
        --color-random-4: #7000FF;
        --color-random-5: #6200E3;
        --color-random-6: #36007D;
        --color-random-7: #349974;
        --color-random-8: #2A7D5F;
        --color-random-9: #153D2E;
        --color-random-10: #6100FF;
        --color-random-11: #5700E3;
        --color-random-12: #30007D;

        --font-inter: 'Inter', sans-serif;
        --font-lexend: 'Lexend', sans-serif;
    }


    body {
        background-color: var(--color-grey-8);
        min-width: 42.5rem;
    }
    .container {
        max-width: 125rem;
        margin: 0 auto;
    }
    .my-toast {
        margin-top: 20px;
        font-size: 16px;
        padding: 20px;
    }
`;

export const Heading_1_700 = styled.h1`
  font-family: var(--font-lexend);
  font-weight: 700;
  font-size: 4.4rem;
`;

export const Heading_2_600 = styled.h2`
  font-family: var(--font-lexend);
  font-weight: 600;
  font-size: 3.6rem;
`;

export const Heading_3_600 = styled.h3`
  font-family: var(--font-lexend);
  font-weight: 600;
  font-size: 3.2rem;
`;

export const Heading_3_500 = styled.h3`
  font-family: var(--font-lexend);
  font-weight: 500;
  font-size: 3.2rem;
`;

export const Heading_4_600 = styled.h4`
  font-family: var(--font-lexend);
  font-weight: 600;
  font-size: 2.8rem;
`;

export const Heading_4_500 = styled.h4`
  font-family: var(--font-lexend);
  font-weight: 500;
  font-size: 2.8rem;
`;

export const Heading_5_600 = styled.h5`
  font-family: var(--font-lexend);
  font-weight: 600;
  font-size: 2.4rem;
`;

export const Heading_5_500 = styled.h5`
  font-family: var(--font-lexend);
  font-weight: 500;
  font-size: 2.4rem;
`;

export const Heading_6_600 = styled.h6`
  font-family: var(--font-lexend);
  font-weight: 600;
  font-size: 2rem;
`;

export const Heading_6_500 = styled.h6`
  font-family: var(--font-lexend);
  font-weight: 500;
  font-size: 2rem;
`;

export const Heading_7_600 = styled.h6`
  font-family: var(--font-lexend);
  font-weight: 600;
  font-size: 1.6rem;
`;

export const Heading_7_500 = styled.h6`
  font-family: var(--font-lexend);
  font-weight: 500;
  font-size: 1.6rem;
`;

export const Body_1_400 = styled.p`
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 1.6rem;
`;

export const Body_1_600 = styled.p`
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: 1.6rem;
`;

export const Body_2_400 = styled.p`
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 1.4rem;
`;

export const Body_2_500 = styled.p`
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: 1.4rem;
`;

export const Button_big_text = styled.button`
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: 1.6rem;
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  cursor: pointer;
  border-style: solid;
  border-width: 0.15rem;
  :hover {
    filter: brightness(1.1);
  }
`;

export const Button_medium_text = styled.p`
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: 1.4rem;
  width: 100%;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  cursor: pointer;
  border-style: solid;
  border-width: 0.15rem;
  :hover {
    filter: brightness(1.1);
  }
`;

export const Details = styled(Link)`
  background: var(--color-brand-4);
  border-radius: 0.4rem;
  color: var(--color-brand-1);
  padding: 0.4rem 0.8rem;
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: 1.4rem;
  text-decoration: none;
`;

export const Input_place_holder = styled.p`
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 1.6rem;
`;

export const Input_label = styled.p`
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: 1.4rem;
`;

export const ProductCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;
  max-width: 31.2rem;
  padding: 3px;
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15.2rem;
    background-color: var(--color-grey-7);
  }
  .buttons {
    display: flex;
    width: 100%;
    gap: 1.6rem;
  }
  > h6 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-line;
    text-overflow: ellipsis;
  }
  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > div {
    > img {
      object-fit: cover;
    }
  }
`;

export const AdvertiserStyled = styled.aside`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export default StyledGlobal;
