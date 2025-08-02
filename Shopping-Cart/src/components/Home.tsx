import { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([]);
    const [input, setInput] = useState('');

    const fetchdata = async () => {
        const api = await fetch('https://fakestoreapi.com/products/');
        const response = await api.json();
        setData(response);
    }

    useEffect(() => {
        fetchdata();
    }, []);

    const filteredData = data.filter((item:any) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );
    return (
        <>
            <div className="Header">
                <h1 className="heading"> Shoppin</h1>
                  <div className="inputWrapper">
                    <input type='text' 
                    placeholder='Search for any item...' 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='inputBox'
                    />
                    {input.trim() !== '' && (
                        <div className='filterData'>
                        {filteredData.map((ele: any, idx: number) => (
                            <div key={idx}>{ele.title}</div>
                        ))}
                        </div>
                    )}
                </div>
                <div className="navLinks">
                    <Link to="/" className="navItem">Home</Link>
                    <Link to="/about" className="navItem">About</Link>
                    <Link to="/contact" className="navItem">Contact</Link>
                </div>
            </div>
         <main className='content'>
        <div className="cardContainer">
            {(input.trim() !== '' ? filteredData : data).map((ele: any, index: number) => (
                <div className="card" key={index}>
                    <img src={ele.image} alt={ele.title} className="productImage" />
                    <h3 className="title">{ele.title}</h3>
                    <p className="rating">⭐ {ele.rating.rate} ({ele.rating.count} reviews)</p>
                    <button className="addToCartBtn">Add to Cart</button>
                </div>
            ))}
        </div>
    </main>
        </>
    )
}

export default Home