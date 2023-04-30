function removeIteminCart(item){
   let update = {};
    update[item] =0;
    fetch('/cart/update.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        updates: {
          [item]: 0
        }
      })
      })
    .then( (response) => {
      console.log("item removed from cart");
    })
    .catch( (error) => {
      console.error('Error:', error);
    });
}
removeIteminCart(id);


// fetch cart
const cartData =  fetch('/cart.json')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('cart', JSON.stringify(data));
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
      const cartJson = localStorage.getItem('cart');
      const cartResult = JSON.parse(cartJson);
      console.log(cartResult)
