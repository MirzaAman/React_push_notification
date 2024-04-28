import logo from './logo.svg';
import './App.css';

import pr from './img/product.jpeg'

import axios from 'axios';

function App() {

  const handleClick = async (title) => {
    const url = 'https://app.nativenotify.com/api/notification';

    const data = {
      appId: 21021,
      appToken: "2iJDeKcTcxAGHGZfy6KdUa",
      title: "New Order Recived",
      body: `New order for ${title} recived`,
      dateSent: "4-27-2024 9:34PM",
      pushData: { yourProperty: "yourPropertyValue" },
      bigPictureURL: "Big picture URL as a string"
    };

    try {
      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const products = [
    { id:1, img: pr, title: "Product 1", price: "$10" },
    { id:2, img: pr, title: "Product 2", price: "$20" },
    { id:3, img: pr, title: "Product 3", price: "$30" },

  ]

  return (
    <div className="App">
      <header className="App-header">
        <div className="pr">
          {
            products.map((item) => {
              return (
                <div className="productContainer" key={item.id}>
                  <img src={item.img} />
                  <h4>{item.title}</h4>
                  <h5>{item.price}</h5>
                  <button onClick={()=>handleClick(item.title)} >Place order</button>
                </div>
              )
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
