function Footer() {
  const currentHour = new Date().getHours(); // Get the current hour
  const openingHour = 11; // 11 AM
  const closingHour = 23; // 11 PM

  const isOpen = currentHour >= openingHour && currentHour < closingHour;

  return (
    <footer>
      {isOpen ? (
        <div>
          <p>We are open until 23:00. Come visit us or order online.</p>
          <button>Order now</button>
        </div>
      ) : (
        <p>We are currently closed.</p>
      )}
    </footer>
  );
}

export default Footer;
