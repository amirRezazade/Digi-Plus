function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("local-changed"));
}
function getLocal(key) {
  let value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
function formatedPrice(num) {
  let formatted = num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted;
}
function cartTotalPrice() {
  let cart = getLocal("cart") || [];
  let total = 0;
  cart.forEach((item) => (total += item.quantity * item.price));
  let formatted = total.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted ? formatted : 0;
}
function cartTotalDiscount() {
  const products = getLocal("cart");
  let total = products.reduce((total, item) => {
    const discountedPrice = item.price || 0;
    const discountPercentage = item.discountPercentage || 0;
    const quantity = item.quantity || 1;
    let originalPrice = discountedPrice;
    if (discountPercentage > 0 && discountPercentage < 100) {
      originalPrice = discountedPrice / (1 - discountPercentage / 100);
    }
    const discountAmount = originalPrice - discountedPrice;
    return total + discountAmount * quantity;
  }, 0);
  return formatedPrice(total);
}
function cartRealPrice() {
  const products = getLocal("cart");
  let total = 0;
  products.forEach((item) => {
    const discountedPrice = item.price || 0;
    const discountPercentage = item.discountPercentage || 0;
    const quantity = item.quantity || 1;
    let originalPrice = discountedPrice;
    if (discountPercentage > 0 && discountPercentage < 100) {
      originalPrice = discountedPrice / (1 - discountPercentage / 100);
    }
    total += originalPrice * quantity;
  });
  return formatedPrice(total);
}
function calcRealPrice(price, discount) {
  return formatedPrice(price / (1 - discount / 100));
}

export { setLocal, getLocal, cartTotalPrice, formatedPrice, calcRealPrice, cartTotalDiscount, cartRealPrice };
