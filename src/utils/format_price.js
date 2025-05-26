const format_price = (price) =>
  typeof price === "number" ? `${price.toLocaleString("ru-RU")} ₸` : "—";

export default format_price;