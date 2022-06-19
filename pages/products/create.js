import React, { useState } from 'react';
const initialState = { name: '', price: 0 }
function Create() {

  const [product, setProduct] = useState(initialState) //inicializa con un objeto vacio
  const handleChange = (e) => {

    const inputValue = e.target.value
    const inputName = e.target.name
    setProduct({
      ...product,
      [inputName]: inputValue
    })

  }
  const handleClick = (e) => {
    (e).preventDefault()
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(initialState)
        console.log('Producto creado exitosamente')
      })
      .catch((err) => {
        console.log({ err })
      })
  }


  return (
    <>
      <div>
        <h1>Crear nuevo producto</h1>
        <form>
          <input
            type='text'
            name='name'
            placeholder='Nombre del producto'
            onChange={handleChange}
            value={product.name}
          />


          <input
            type='number'
            name='price'
            placeholder='Precio del producto'
            onChange={handleChange}
            value={product.price}
          />


          <button onClick={handleClick}>Crear producto</button>
        </form>


      </div>
      <style jsx>
        {
          `
          form{
            display:flex;
            flex-direction:column;
            width:20rem;
            margin:0 auto;
          }
          input{
            margin-bottom:.5rem;
          }
          h1{
            text-align:center;
          }
          `
        }
      </style>
    </>
  );
}

export default Create;
