import React from "react";
import GoodCard from "./GoodCard";

class Galery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        {
          id: 1,
          name: "Wood Sage&Sea Salt",
          brand: "JO MALONE LONDON",
          volume: "100ml",
          image: "https://www.brocard.ua/media/catalog/product/cache/39a08324f24a95494ff2c6ca11ab9865/image/2079226849/jo-malone-london-wood-sage-sea-salt.jpg",
          price: "4999 грн",
        },
        {
          id: 2,
          name: "Good Girl",
          brand: "CAROLINA HERRERA",
          volume: "80ml",
          image: "https://www.brocard.ua/media/catalog/product/cache/39a08324f24a95494ff2c6ca11ab9865/image/1388442677/carolina-herrera-good-girl.jpg",
          price: "5004 грн",
        },
        {
          id: 3,
          name: "Replica Spring Park",
          brand: "MAISON MARGIELA",
          volume: "100ml",
          image: "https://www.brocard.ua/media/catalog/product/cache/39a08324f24a95494ff2c6ca11ab9865/image/1490378975/maison-margiela-replica-spring-park.jpg",
          price: "3917 грн",
        },
        {
          id: 4,
          name: "Molecule M01 + Iris",
          brand: "ESCENTRIC MOLECULES",
          volume: "100ml",
          image: "https://www.brocard.ua/media/catalog/product/cache/39a08324f24a95494ff2c6ca11ab9865/image/2211668f3f/escentric-molecules-molecule-m01-plus-iris.jpg",
          price: "7350 грн",
        },
        {
          id: 5,
          name: "Gentleman Intense",
          brand: "GIVENCHY",
          volume: "100ml",
          image: "https://www.brocard.ua/media/catalog/product/cache/39a08324f24a95494ff2c6ca11ab9865/image/222352a845/givenchy-gentleman-intense.jpg",
          price: "4449 грн",
        },
        {
          id: 6,
          name: "Soleil De Capri",
          brand: "MONTALE",
          volume: "100ml",
          image: "https://www.brocard.ua/media/catalog/product/cache/39a08324f24a95494ff2c6ca11ab9865/image/139756afa5/montale-soleil-de-capri.jpg",
          price: "3750 грн",
        }
      ],
    };
  }
  render() {
    return (
      <div className="galery">
        {this.state.goods.map((g) => (
          <GoodCard key={g.id} good={g} />
        ))}
      </div>
    );
  }
}

export default Galery;
