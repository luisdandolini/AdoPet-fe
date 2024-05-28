import {
  Container,
  ContainerPet,
  ContainerIcons,
  State,
  ContainerButton,
} from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import exampleIMG from "../../assets/example.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { useEffect, useState } from "react";

export function Carousel() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [spaceBetween, setSpaceBetween] = useState(60);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(3);
        setSpaceBetween(80);
      } else if (window.innerWidth < 980) {
        setSlidesPerView(2);
        setSpaceBetween(-20);
      } else if (window.innerWidth < 1380) {
        setSlidesPerView(2);
        setSpaceBetween(-20);
      } else if (window.innerWidth < 1480) {
        setSlidesPerView(3);
        setSpaceBetween(-20);
      } else {
        setSlidesPerView(6);
        setSpaceBetween(-40);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <ContainerPet>
            <img src={exampleIMG} alt="" />
            <ContainerIcons>
              <p>Marmitex</p>
              <div>
                <FavoriteIcon color="warning" />
                <MaleIcon color="primary" />
              </div>
            </ContainerIcons>
            <State>Centro, Florianópolis, SC</State>
            <ContainerButton>
              <button>Quero adotar</button>
            </ContainerButton>
          </ContainerPet>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerPet>
            <img src={exampleIMG} alt="" />
            <ContainerIcons>
              <p>Marmitex</p>
              <div>
                <FavoriteIcon color="warning" />
                <FemaleIcon color="secondary" />
              </div>
            </ContainerIcons>
            <State>Centro, Florianópolis, SC</State>
            <ContainerButton>
              <button>Quero adotar</button>
            </ContainerButton>
          </ContainerPet>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerPet>
            <img src={exampleIMG} alt="" />
            <ContainerIcons>
              <p>Marmitex</p>
              <div>
                <FavoriteIcon color="warning" />
                <FemaleIcon color="secondary" />
              </div>
            </ContainerIcons>
            <State>Centro, Florianópolis, SC</State>
            <ContainerButton>
              <button>Quero adotar</button>
            </ContainerButton>
          </ContainerPet>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerPet>
            <img src={exampleIMG} alt="" />
            <ContainerIcons>
              <p>Marmitex</p>
              <div>
                <FavoriteIcon color="warning" />
                <MaleIcon color="primary" />
              </div>
            </ContainerIcons>
            <State>Centro, Florianópolis, SC</State>
            <ContainerButton>
              <button>Quero adotar</button>
            </ContainerButton>
          </ContainerPet>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerPet>
            <img src={exampleIMG} alt="" />
            <ContainerIcons>
              <p>Marmitex</p>
              <div>
                <FavoriteIcon color="warning" />
                <MaleIcon color="primary" />
              </div>
            </ContainerIcons>
            <State>Centro, Florianópolis, SC</State>
            <ContainerButton>
              <button>Quero adotar</button>
            </ContainerButton>
          </ContainerPet>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerPet>
            <img src={exampleIMG} alt="" />
            <ContainerIcons>
              <p>Marmitex</p>
              <div>
                <FavoriteIcon color="warning" />
                <FemaleIcon color="secondary" />
              </div>
            </ContainerIcons>
            <State>Centro, Florianópolis, SC</State>
            <ContainerButton>
              <button>Quero adotar</button>
            </ContainerButton>
          </ContainerPet>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerPet>
            <img src={exampleIMG} alt="" />
            <ContainerIcons>
              <p>Marmitex</p>
              <div>
                <FavoriteIcon color="warning" />
                <FemaleIcon color="secondary" />
              </div>
            </ContainerIcons>
            <State>Centro, Florianópolis, SC</State>
            <ContainerButton>
              <button>Quero adotar</button>
            </ContainerButton>
          </ContainerPet>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerPet>
            <img src={exampleIMG} alt="" />
            <ContainerIcons>
              <p>Marmitex</p>
              <div>
                <FavoriteIcon color="warning" />
                <FemaleIcon color="secondary" />
              </div>
            </ContainerIcons>
            <State>Centro, Florianópolis, SC</State>
            <ContainerButton>
              <button>Quero adotar</button>
            </ContainerButton>
          </ContainerPet>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
