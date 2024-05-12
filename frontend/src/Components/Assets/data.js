import p1_img from './bamboobottle.jpg'
import p2_img from './bamboomug.jpg'
import p3_img from './NeemwoodComb.png'
import p4_img from './Corkyogamat.png'

let data_product = [
  {
    id: 1,
    name: "Bamboo Bottle 750ml",
    image: p1_img,
    new_price: 599,
    old_price: 999,
    url: "http://localhost:3000/product/7"
  },
  { id: 2,
    name: "Bamboo Coffee Mug - 300ml",
    image: p2_img,
    new_price: 245,
    old_price: 399,
    url: "http://localhost:3000/product/9"
  },
  { id: 3,
    name: "Neemwood Comb (Double-Sided)",
    image: p3_img,
    new_price: 199,
    old_price: 249,
    url: "http://localhost:3000/product/14"
  },
  { id: 4,
    name: "Cork Yoga Mat",
    image: p4_img,
    new_price: 1299,
    old_price: 2499,
    url: "http://localhost:3000/product/7"
  },
];

export default data_product;
