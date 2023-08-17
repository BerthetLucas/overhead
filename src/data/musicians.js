import guitariste from "../assets/img/guitariste.jpg";
import bassiste from "../assets/img/bassiste.jpg";
import batteur from "../assets/img/batteur.jpg";
import chanteur from "../assets/img/chanteur.jpg";

const musicians = [
  {
    idm: "0",
    nom: "Alex",
    instrument: "Guitare",
    description: "Je fait des riffs des enfers",
    img: guitariste,
  },

  {
    idm: "1",
    nom: "Bertrand",
    instrument: "Basse",
    description: "Du groove, toujours du groove",
    img: bassiste,
  },

  {
    idm: "2",
    nom: "Arnold",
    instrument: "Batterie",
    description: "Faut que ça tape fort !",
    img: batteur,
  },

  {
    idm: "3",
    nom: "Gérard",
    instrument: "Chant",
    description: "Haut les coeurs et les cordes vocales",
    img: chanteur,
  },
];

export default musicians; 