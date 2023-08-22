import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
function ContactForm () {
    return (
      <Card color="transparent" shadow={false} className="justify-center items-center">
        <Typography variant="h4" color="blue-gray">
         Contactez nous 
        </Typography>
        <Typography color="gray" className="mt-3 font-normal mx-5">
         Laissez nous votre message pour en savoir plus sur nos prochains concerts !
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Nom" />
            <Input size="lg" label="Email" />
            <Input type="text-area" label="Votre message" className="h-36"/>
          </div>
        </form>
        
      
        <Button className="mt-36 w-36" >
            Envoyer
          </Button>
       
      </Card>
    );
  }

  export default ContactForm