import pizza from "../assets/foods/pizza.jpg";
import burger from "../assets/foods/burger.jpg";
import pasta from "../assets/foods/pasta.jpg";
import cake from "../assets/foods/cake.jpg";

const foods = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic cheese pizza with fresh basil.",
    price: 299,
    rating: 4.8,
    image: pizza,
  },
  {
    id: 2,
    name: "Cheese Burger",
    description: "Juicy burger with cheddar cheese.",
    price: 199,
    rating: 4.7,
    image: burger,
  },
  {
    id: 3,
    name: "White Sauce Pasta",
    description: "Creamy pasta with herbs and parmesan.",
    price: 249,
    rating: 4.9,
    image: pasta,
  },
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with creamy frosting.",
    price: 179,
    rating: 4.9,
    image: cake,
  },
];

export default foods;