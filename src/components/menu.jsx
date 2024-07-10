import Pizza from "./pizza";
import pizzaData from "../../public/data";
function Menu() {
  const numOfPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      {numOfPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our Menu. Please come back Later :)</p>
      )}
    </main>
  );
}
export default Menu;
