const cart=[];
  let cartTotal = 0;
  updateCartNotification();
  function addTocart(productId,productName,price)
  {
    const cartObject = { productId, productName,price};
    cart.push(cartObject);
    console.log(cart.length);
    cartTotal += price;
    window.alert( productName +" is  added to cart.\n Total - \u20B9"+cartTotal);


    updateCartNotification();
  }
  function updateCartNotification(){
    const element = document.getElementById('cart-notification');
    if(cart.length != 0){
      element.style.display = 'block';
    element.innerHTML = cart.length;
    }
    else{
      element.style.display = 'none';
    }
  }