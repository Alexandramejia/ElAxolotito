import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Menu() {
  const [cart, setCart] = useState([]);
  const [purchased, setPurchased] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.name === item.name);
      if (existing) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, qty: 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const updateQty = (name, qty) => {
    if (qty < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, qty: qty } : item
      )
    );
  };

  const calculateTotal = () =>
    cart
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);

  const handlePurchase = () => {
    setPurchased(true);
    setCart([]);
  };
  const foodSections = [
    {
      title: 'Breakfast',
      items: [
        {
          name: 'Chilaquiles con Huevo',
          price: 8.99,
          description:
            'Fried tortilla strips in red or green salsa, topped with egg, crema, and queso fresco.',
        },
        {
          name: 'Tamales de Desayuno',
          price: 8.0,
          description:
            'Chicken, pork, or pineapple tamales with crema and beans.',
        },
        {
          name: 'Café de Olla',
          price: 2.75,
          description: 'Spiced coffee with cinnamon and piloncillo.',
        },
      ],
    },
    {
      title: 'Main Dishes',
      items: [
        {
          name: 'Tacos Tradicionales',
          price: 10.5,
          description:
            'Soft corn tortillas with onions, cilantro, and salsa. Choice of carne asada, pollo, al pastor, carnitas, or birria.',
        },
        {
          name: 'Burrito Especial',
          price: 9.75,
          description:
            'Flour tortilla with rice, beans, cheese, salsa, and choice of carne asada, pollo, al pastor, or veggies.',
        },
        {
          name: 'Quesadilla Clásica',
          price: 8.0,
          description:
            'Grilled tortilla with Oaxaca cheese. Optional fillings: pollo, carnitas, squash blossom, or huitlacoche.',
        },
        {
          name: 'Enchiladas Rojas o Verdes',
          price: 9.25,
          description:
            'Rolled tortillas filled with cheese or chicken, topped with red or green salsa, crema, and queso fresco.',
        },
      ],
    },
    {
      title: 'Sides',
      items: [
        {
          name: 'Arroz Mexicano',
          price: 2.99,
          description: 'Seasoned Mexican-style rice.',
        },
        {
          name: 'Frijoles Refritos',
          price: 2.99,
          description: 'Creamy refried pinto beans.',
        },
        {
          name: 'Elote Callejero',
          price: 4.5,
          description:
            'Grilled corn with lime, mayo, cotija cheese, and chili.',
        },
      ],
    },
    {
      title: 'Desserts',
      items: [
        {
          name: 'Churros con Canela',
          price: 3.5,
          description: 'Fried pastry sticks dusted with cinnamon sugar.',
        },
        {
          name: 'Flan Casero',
          price: 3.99,
          description: 'House-made vanilla caramel custard.',
        },
      ],
    },
  ];

  const drinkSections = [
    {
      category: 'Alcoholic Beverages',
      drinks: [
        {
          name: 'Margarita',
          price: 7.0,
          description: 'Lime, tequila, and orange liqueur.',
        },
        {
          name: 'Cantarito',
          price: 7.5,
          description: 'Tequila with citrus juices, served in a clay cup.',
        },
        {
          name: 'Mexican Beer',
          price: 5.0,
          description: 'Modelo, Pacifico, Negra Modelo.',
        },
      ],
    },
    {
      category: 'Juices & Sodas',
      drinks: [
        {
          name: 'Horchata',
          price: 2.5,
          description: 'Sweet rice milk with cinnamon.',
        },
        {
          name: 'Jamaica',
          price: 2.5,
          description: 'Chilled hibiscus tea.',
        },
        {
          name: 'Mexican Sodas',
          price: 2.5,
          description: 'Jarritos, Mexican Coca-Cola.',
        },
      ],
    },
  ];

    return (
    <div className="bg-[#f4f4ca] min-h-screen flex flex-col font-baloo">
      <Navbar />

      <main className="flex-grow px-4 py-8">
        <div className="text-center text-[#d95f76] bg-[#fff1e6] rounded-2xl shadow-md p-6 mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Menu</h2>
          <p className="text-[#5c3c4a] mt-2">Add items to cart!</p>
        </div>

        {!purchased && (
          <>
            {foodSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-2xl text-center my-6 text-[#d95f76] font-semibold">
                  {section.title}
                </h3>
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#fff1e6] border rounded-xl shadow-md max-w-2xl mx-auto mb-6 p-6 text-center"
                  >
                    <h4 className="font-bold text-lg text-[#d95f76]">
                      {item.name} - ${item.price.toFixed(2)}
                    </h4>
                    <p className="text-sm text-[#5c3c4a] my-2">
                      {item.description}
                    </p>
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-3 bg-[#f8bdbd] hover:bg-[#f3a3a3] text-[#5c3c4a] py-2 px-4 rounded-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            ))}

            <h3 className="text-2xl text-center my-6 text-[#d95f76] font-semibold">
              Drinks
            </h3>

            <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
              {drinkSections.map((section) => (
                <div
                  key={section.category}
                  className="flex-1 min-w-[280px] mb-6"
                >
                  <h4 className="text-xl text-center font-semibold mb-4 text-[#d95f76]">
                    {section.category}
                  </h4>
                  {section.drinks.map((item) => (
                    <div
                      key={item.name}
                      className="bg-[#fff1e6] border rounded-xl shadow-md max-w-2xl mx-auto mb-6 p-6 text-center"
                    >
                      <h5 className="font-bold text-lg text-[#d95f76]">
                        {item.name} - ${item.price.toFixed(2)}
                      </h5>
                      <p className="text-[#5c3c4a] text-sm text-[#FFB6C1] text- my-2">
                        {item.description}
                      </p>
                      <button
                        onClick={() => addToCart(item)}
                        className="text-white mt-3 bg-[#f8bdbd] hover:bg-[#f3a3a3] text-[#5c3c4a] py-2 px-4 rounded-lg"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* CART */}
            <div className="bg-[#fff1e6] max-w-2xl mx-auto mt-10 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl text-center text-[#d95f76] mb-4 font-semibold">
                Your Cart
              </h3>
              {cart.length === 0 ? (
                <p className="text-center text-sm text-[#5c3c4a]">Your cart is empty</p>
              ) : (
                <>
                  <div className="flex justify-between border-b pb-2 font-semibold text-gray-700">
                    <span>Item</span>
                    <span>Price</span>
                  </div>
                  {cart.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center py-2 border-b text-sm text-[#5c3c4a]"
                    >
                      <div className="text-left">
                        <p className="font-medium">{item.name}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <button
                            className="bg-[#f3a3a3] px-2 rounded"
                            onClick={() =>
                              updateQty(item.name, item.qty - 1)
                            }
                          >
                            -
                          </button>
                          <span>{item.qty}</span>
                          <button
                            className="bg-[#f3a3a3] px-2 rounded"
                            onClick={() =>
                              updateQty(item.name, item.qty + 1)
                            }
                          >
                            +
                          </button>
                          <button
                            className="ml-3 text-red-600 underline"
                            onClick={() => removeFromCart(item.name)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <span className="font-semibold">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div className="text-right mt-4 text-lg font-bold">
                    Total: ${calculateTotal()}
                  </div>
                  <button
                    className="mt-4 bg-[#f8bdbd] hover:bg-[#f3a3a3] text-[#5c3c4a] py-2 px-6 rounded-lg block mx-auto"
                    onClick={handlePurchase}
                  >
                    Purchase
                  </button>
                </>
              )}
            </div>
          </>
        )}

        {/* Purchase Confirmation */}
        {purchased && (
          <div className="text-center bg-[#fff1e6] text-[#d95f76] mt-10 max-w-xl mx-auto p-10 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold mb-4">Thank You for Your Order!</h2>
            <p className="text-lg">We appreciate your support! 💖</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}