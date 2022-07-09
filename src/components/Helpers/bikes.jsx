import image1 from "../../assets/images/1aVenge.png";
import image2 from "../../assets/images/2bEpic.png";
import image3 from "../../assets/images/3bTarmac.png";
import image4 from "../../assets/images/4bTurboLevo.png";

const profesionals= [
    {
        id: 1,
        model: "S-Works Venge", 
        frameset: 'S-Works FACT 11r carbon, Rider-First Engineered™, Win Tunnel Engineered, internal electric only cable routing, OSBB, 12x142mm thru-axle, flat-mount disc',
        image: image1
    },
    {
        id: 2,
        model: "Epic EVO Pro",
        frameset: "FACT 11m Full Carbon, Progressive XC Geometry, Rider-First Engineered™, threaded BB, 12x148mm rear spacing, internal cable routing, 110mm of travel",
        image: image2
    },
    {
        id: 3,
        model: "Tarmac SL7",
        frameset:"Tarmac SL7 FACT 12r Carbon, Rider First Engineered™, Win Tunnel Engineered, Clean Routing, Threaded BB, 12x142mm thru-axle, flat-mount disc",
        image: image3
    },
    {
        id: 4,
        model: "Turbo Levo",
        frameset:"FACT 11m full carbon, 29 Trail Geometry, Integrated down tube battery, enclosed internal cable, Command Post routing, 148mm spacing, fully sealed cartridge bearings, 150mm of travel",
        image: image4
    }
];

export const gFetchProfesional = new Promise((res, rej) => {
    let condition = true;
    setTimeout(() => {
      if (condition) {
        res(profesionals);
      } else {
        rej("Error");
      }
    }, 2000);
  });