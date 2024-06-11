import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className='bg-primary border-b border-b-secondary p-5 md:py-10 h-[60px] flex-center'>
      <img
        src={logo}
        alt='Computesphere Logo'
        className='mr-2.5 w-8 h-8 md:w-10 md:h-10'
      />
      <h2 className='font-semibold text-2xl md:text-3xl'>ComputeSphere</h2>
    </header>
  );
};

export default Header;
