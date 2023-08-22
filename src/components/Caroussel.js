import { Carousel } from "@material-tailwind/react";
import batteur from "../assets/img/batteur-concert.jpg";
import concert from "../assets/img/concert.jpg";
import foule from "../assets/img/foule.jpg"


function CarouselDefault() {
  return (
    <Carousel className="rounded">
      <img
        src={batteur}
        alt="image 1"
        className="h-screen w-full object-cover"
      />
      <img
        src={concert}
        alt="image 2"
        className="h-screen w-full object-cover"
      />
      <img
        src={foule}
        alt="image 3"
        className="h-screen w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselDefault