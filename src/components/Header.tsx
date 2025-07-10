import Link from 'next/link';

// Header component for navigation
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white p-4 transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Your Name or Logo */}
        <div className="text-2xl font-bold rounded-md">
          <Link href="/">
            <span className="hover:text-blue-300 transition-colors">YourName</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="#home">
              <span className="hover:text-blue-300 transition-colors rounded-md p-2">Home</span>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <span className="hover:text-blue-300 transition-colors rounded-md p-2">About</span>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <span className="hover:text-blue-300 transition-colors rounded-md p-2">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <span className="hover:text-blue-300 transition-colors rounded-md p-2">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
