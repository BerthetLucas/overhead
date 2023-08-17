import Nav from "../components/NavBar";
import Footer from "../components/footer";
import HorizontalCard from "../components/PresentationCard";

function Presentation() {
  return (
<div>
    <div className="fixed top-0 w-full z-10 bg-white">
    <Nav />
     </div>


    <div className="flex flex-col justify-center items-center mt-20 md:mt-44 md:mx-10">
      <HorizontalCard />
      <h2 className="mt-10 font-bold text-xl mb-5 md:mb-20 md:mt-20 md:text-4xl">Notre Histoire</h2>
      <p className="text-justify container mx-auto md:mb-10">
        OverHead est un groupe de rock composé de quatre amis qui se sont
        rencontrés au lycée. Le guitariste, Martin, est le leader du groupe. Il
        a toujours été passionné de musique et a commencé à jouer de la guitare
        à l'âge de 12 ans. Le bassiste, Thomas, est le membre le plus calme du
        groupe. Il est très doué pour jouer de la basse et il apporte une touche
        de douceur aux chansons du groupe. Le batteur, Jean, est le plus fou du
        groupe. Il adore jouer de la batterie et il met toujours de l'ambiance
        lors des concerts. Le chanteur, Paul, est le plus récent membre du
        groupe. Il a rejoint OverHead il y a quelques mois et il apporte un
        nouveau souffle au groupe. Les quatre amis ont une passion commune pour
        la musique et ils sont déterminés à réussir. Ils ont déjà sorti un album
        et ils tournent régulièrement dans toute la France. Ils ont également
        été invités à jouer dans des festivals de rock majeurs. OverHead est un
        groupe prometteur qui a de l'avenir. Ils ont un talent fou et ils ne
        cessent de se surpasser. Ils sont sûrs de faire parler d'eux dans les
        années à venir.
      </p>
      <Footer />
    </div>
    </div>
  );
}

export default Presentation