import { Header } from "../../components/Header";
import {
  Container,
  ContainerAdopt,
  ContainerBoxAdopt,
  ContainerCarousel,
} from "./styles";
import imageAdoptPet from "../../assets/adopt-dog.png";
import { Carousel } from "../../components/Carousel";

export function LandingPage() {
  return (
    <Container>
      <Header />
      <ContainerAdopt>
        <img src={imageAdoptPet} alt="Imagem de um pet adotado muito feliz" />
        <ContainerBoxAdopt>
          <h1>
            Adote um Amigo para a <span>Vida Toda.</span>
          </h1>
          <button>Veja os Pets Disponíveis</button>
        </ContainerBoxAdopt>
      </ContainerAdopt>
      <ContainerCarousel>
        <Carousel></Carousel>
      </ContainerCarousel>
    </Container>
  );
}
