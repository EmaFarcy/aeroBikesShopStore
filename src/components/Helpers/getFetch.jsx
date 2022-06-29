const products = [
    {  
       id:1,
       title: "Sworks",
       model: "Venge",
       price: 5000,
       img: "../../assets/images/img1_tarmac.jpg" 
    },

    {   
        id:2,
        title: "S-works",
        model: "Epic-MTB 2021",
        price: 4500,
        img: "../../assets/images/img2_epic.jpg" 
     },

     {  
        id:3,
        title: "Specialized",
        model: "Tarmac SL7 Comp 2022",
        price: 3000,
        img: "../../assets/images/img3_rockhopper.jpg" 
   },

   {    id:4,
        title: "Specialized",
        model: "Turbo Levo",
        price: 5000,
        img: "../../assets/images/img4_Levo.jpg" 
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