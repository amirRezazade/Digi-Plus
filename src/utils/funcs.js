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
  let cart = getLocal("cart");
  let total = 0;
  cart.forEach((item) => (total += item.quantity * item.price));
  let formatted = total.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted ? formatted : 0;
}

export { setLocal, getLocal, cartTotalPrice, formatedPrice };
