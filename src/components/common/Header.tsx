const Header = () => {
  return (
    <header className='bg-primary border-b border-b-secondary flex-center'>
      <img
        src='/assets/logo.svg'
        alt='Computesphere Logo'
        className='mr-2.5 w-8 h-8 md:w-10 md:h-10'
      />
      <h2 className='font-bold text-2xl md:text-3xl text-primary-text'>
        ComputeSphere
      </h2>
    </header>
  );
};

export default Header;
