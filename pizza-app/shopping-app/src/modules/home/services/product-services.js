import { Pizzas } from "../../../app/pizza-store";
let arr=[];
let copyarr=[];
const {Vegetarian}=Pizzas;
const destructure=(index)=>{
    const {toppings}=Vegetarian[index];
toppings.forEach((element,NewIndex)=> {
    const {id,name,description,asset,price}=toppings[NewIndex];
    const { url } = asset;
    const object = {
      id: id,
      name: name,
      description: description,
      url: url,
      price: price,
    };
    arr.push(object);
    copyarr=[...copyarr,object];
});
return arr;
}

Vegetarian.forEach((element,index) => arr.push(destructure(index)));
export default arr;













