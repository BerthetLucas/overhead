import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import musicians from "../data/musicians";

function HorizontalCard() {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      {musicians.map((musician, idm) => (
        <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={musician.img}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              {musician.nom}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {musician.instrument}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Description : {musician.description}
            </Typography>
            <a href="#" className="inline-block"></a>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default HorizontalCard;
