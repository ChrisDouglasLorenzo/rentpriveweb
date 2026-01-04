import Link from 'next/link';


export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          RENTPRIVÉ
        </Link>

        <nav className="nav">
          <Link href="/about" className="nav-link">Sobre Rentprivé</Link>
          <Link href="/operations" className="nav-link">Operaciones</Link>
          <Link href="/contact" className="nav-link">Contacto</Link>
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary">
            Acceso Club
          </Link>
        </div>
      </div>


    </header>
  );
}
