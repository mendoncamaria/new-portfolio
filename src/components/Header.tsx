import Link from 'next/link';

// Header component for navigation
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white transition-colors duration-300">
      <nav className="w-full flex justify-between padding-header-side">
        {/* Your Name or Logo */}
        <div className="text-2xl rounded-md">
          <a href="/">
            <span className="hover:text-blue-300 transition-colors text-gray-600 font-mono text-xl">MARIA MENDONCA</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col text-right text-xl font-mono">
          <li>
            <Link href="#home">
              <span className="hover:text-blue-300 transition-colors rounded-md p-2 text-gray-600">INDEX</span>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <span className="hover:text-blue-300 transition-colors rounded-md p-2 text-gray-600">ABOUT</span>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <span className="hover:text-blue-300 transition-colors rounded-md p-2 text-gray-600">SKILLS</span>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <span className="hover:text-blue-300 transition-colors rounded-md p-2 text-gray-600">PROJECTS</span>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <span className="hover:text-blue-300 transition-colors rounded-md p-2 text-gray-600">CONTACT</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
