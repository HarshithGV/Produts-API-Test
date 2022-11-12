import './App.css';
import { useEffect, useState } from "react";

function App() {
   
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <tbody className="product">
      <tr>
          <th  className="colum">Id</th>
          <th  className="colum">Name</th>
          <th  className="colum">Brand</th>          
          <th  className="colum">Image</th>
          <th className="colum">Price</th>
          <th className="colum">Rating</th>
      </tr>
      {data.slice(0,3).map((item, index) => (
        <tr key={index}>
        <td className="row">{item.id}</td>
        <td className="row">{item.title}</td>
            <td className="row">{item.brand="Apple"}</td>           
            <td className="row">
              <img className="image" src={item.thumbnail} alt="" height={50}/>
            </td>
            <td className="row">{item.price}</td>
            <td className="row">{item.rating}</td>
       </tr>
      ))}
      <hr></hr>
      {data.slice(0,3).map((item, index) => (
        <tr key={index}>
        <td className="row">{item.id}</td>
        <td className="row">{item.title}</td>
            <td className="row">{item.brand="Samsung"}</td>           
            <td className="row">
              <img className="image" src={item.thumbnail} alt="" height={50}/>
            </td>
            <td className="row">{item.price}</td>
            <td className="row">{item.rating}</td>
       </tr>
      ))}
      </tbody>
      
    </div>
  );
}

  
export default App;
