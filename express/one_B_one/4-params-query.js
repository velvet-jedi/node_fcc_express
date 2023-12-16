/**
 *          APIs are meant to interact with the data and make changes to it
 *          ---------------------------------------------------------------
 *                                API <-----> JSON/XML
 *          ---------------------------------------------------------------
 *           1) Server provides data in JSON lets say
 *           2) Frontent can make http reuests and 
 *              set up api using the data from the server
 *      we will eventually use a DB for that
 */         

const express = require('express');
const app = express();

const { products } = require('./data')

/////////////////////////               ROUTE HANDLES             ///////////////////////////////

app.get('/',(req, res)=>{
    //res.json(products)                  // remember content type is managed by express itself
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

/**  we dont always need to send the whole file data
 *   as a response to a request coming from each location
 *   cases: where we send part data and where the whole is needed
 *  example: products page, a product's description page
 */


/**
 * The map() method in JavaScript allows you to iterate over an array and apply 
 * a function to each element. It returns a new array with the results 
 * of the function call for each element.
 */
app.get('/api/products',(req, res)=>{
    const partProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.json(partProducts)
})

/* the one product page with all info
 but its an overkill solution to harcode the id
*/

// app.get('/api/products/1',(req, res)=>{
//     const singleProduct = products.find((product)=> product.id===1)
//     res.json(singleProduct)                
// })


app.get('/api/products/:productID',(req, res)=>{    // The :productID is a route PARAMETER, indicates that this part of the path will be dynamic and can be of any value.
    //console.log(req.params)
    
    /* The req.params property contains properties mapped to the named route “parameters”. 
       /api/products/:productID, “productID” property is available as req.params.productID
       
       extracts the productID from the route parameters using destructuring. */
    const {productID} = req.params;  // comes back as a string
    /** find a product in products array,  based on productid 
        The function works by iterating over the products array and comparing each product's ID 
        to the productID parameter. If the product's ID matches the productID parameter, 
        the function returns the product. Otherwise, the function continues iterating.
*/
    const singleProduct = products.find((product)=> product.id === Number(productID))  
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    res.json(singleProduct)                
})

// more complexity
app.get('/api/products/:productID/reviews/:reviewID',(req, res)=>{
    // console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query',(req, res)=>{
    console.log(req.query);
    /** http://localhost:5000/api/v1/query?param1=john&param2=ola
     *  results in { param1: 'john', param2: 'ola' }
     */
    const { search, limit } = req.query
    let sortedProducts = [...products] // spread operator to create a copy of the array to modify but leave the original untouched

// if a search term/parameter provided
if(search){
    sortedProducts = sortedProducts.filter((product)=>{
        return product.name.startsWith(search)
    })
}

if(sortedProducts.length < 1){
    // res.status(200).send('no products matched your search term')
   return res.status(200).json({success:true, data:[] })
}

if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
}
return res.status(200).json(sortedProducts)

})


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})