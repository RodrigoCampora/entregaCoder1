import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#eee'
    }}>
      <div>
        <h2>MiTienda</h2>
      </div>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
