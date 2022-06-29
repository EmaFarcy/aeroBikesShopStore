import image1 from "../../assets/images/img1_tarmac.jpg";
import image2 from "../../assets/images/img2_epic.jpg";
import image3 from "../../assets/images/img3_rockhopper.jpg";
import image4 from "../../assets/images/img4_Levo.jpg";

const products = [
    {  
       id: 1,
       title: "Sworks",
       model: "Venge",
       price: 5000,
       image: image1 
    },

    {   
        id:2,
        title: "S-works",
        model: "Epic-MTB 2021",
        price: 4500,
        image: image2 
     },

     {  
        id:3,
        title: "Specialized",
        model: "Tarmac SL7 Comp 2022",
        price: 3000,
        image: image3 
   },

   {    id:4,
        title: "Specialized",
        model: "Turbo Levo",
        price: 5000,
        image: image4
   }
];



export const gFetch = new Promise((resolve, reject) => { //try catch
    let condition = true;

    if (condition) {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    }else{
        reject("404 Not Found. Task Failed");
    }
})