import React, { useState } from "react";

// function Item({ name, category }) {
//   const [isInCart, setIsInCart] = useState(false);

//   function handleAddToCartClick() {
//     setIsInCart((isInCart) => !isInCart);
//   }

//   return (
//     <li className={isInCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button
//         className={isInCart ? "remove" : "add"}
//         onClick={handleAddToCartClick}
//       >
//         {isInCart ? "Remove From" : "Add to"} Cart
//       </button>
//     </li>
//   );
// }

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false,
    }
  }

  handleAddToCartClick = () => {
    this.setState((state) => ({
      isInCart: !state.isInCart,
    }));
  }

  render() {
    const { name, category } = this.props;
    const { isInCart } = this.state;
    return (
      <li className={isInCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button
          className={isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}
export default Item;
