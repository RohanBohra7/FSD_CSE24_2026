
import React, { useEffect, useState } from 'react';

function FetchProduct() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://dummyjson.com/products');

                

                const jsonData = await res.json();

                console.log(jsonData);
                setData(jsonData.products);
            } catch (e) {
                console.log('Error:', e);
            }
        }

        fetchData();
    }, []);

    function cartData()
    {

    }

    return (
        <div>
            <h1>FetchProduct</h1>

            <div style={{display:'flex', flexWrap:'wrap'}}>
            {data.map((ele) => (
                <div key={ele.id} style={{width: '33.33%', boxSizing: 'border-box', padding: '10px'
                }}>
                    
                    <img
                        src={ele.images[0]}
                        alt={ele.title}
                        height="100"
                        width="100"
                    />

                    <h2>{ele.title}</h2>
                    <p>Price: ${ele.price}</p>

                    <button onClick={cartData}>Add to cart</button>
                </div>
            ))}
            </div>
        </div>
    );
}

export default FetchProduct;
