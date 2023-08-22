import Nav from "../components/NavBar";
import ContactForm from "../components/form";
import Footer from "../components/footer";

function Contact() {
  return (
    <div>
      <div className="fixed top-0 w-full z-10 bg-white">
        <Nav />
      </div>

    <h2 className="mt-28 mb-20 text-center text-xl container">Présent pour vos évènements vous pouvez nous contacter pour une date !</h2>
    <div className="flex flex-col justify-center items-center">
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
