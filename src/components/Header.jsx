import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="section-navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <Image
              src="/logoipsum-297.svg"
              alt="myLogo"
              width={150}
              height={60}
            />
          </Link>
        </div>

        <nav className="navbar">
          <ul>
            <li className="nav-items">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" href="/service">
                Service
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
