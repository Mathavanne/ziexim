import { Link } from 'react-router-dom';

const navigations = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/ContactUs' },
];

function Header() {
  return (
    <header className="text-black body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
      to="/"
      className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
      {/* Correct image path from public folder */}
      <img
        src="/images/logo.png"
        alt="ZI Global ExIm Logo"
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="ml-3 text-xl">ZI Global ExIm</span>
    </Link>


        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation, index) => (
            <Link
              key={index}
              to={navigation.path}
              className="mr-5 hover:text-gray-600"
            >
              {navigation.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
