import { createGlobalStyle } from "styled-components";
import ButtonSwiper from "../assets/arrow.webp";

const breakpoints = {
  sm: "768px",
  md: "1024px",
  lg: "1480px",
  xl: "1800px",
};

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY};

    -webkit-font-smoothing: antialiased;
  } 

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol, ul {
	list-style: none;
}

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  .swiper-button-prev {
    rotate: -90deg;
    width: 50px;
    background-image: url(${ButtonSwiper});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    color: transparent;

    @media(max-width: ${breakpoints.sm}) {
      width: 34px;
    }
  }

  .swiper-button-next {
    rotate: 90deg;
    width: 50px;
    background-image: url(${ButtonSwiper});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    color: transparent;
    
    @media(max-width: ${breakpoints.sm}) {
      width: 34px;
    }
  }
`;
