const Footer = () => {
  return (
    <footer className='flex-between flex-col sm:flex-row bg-white p-4'>
      <p className='text-center sm:text-left max-sm:mb-4 text-base lg:text-lg'>
        Copyright &copy; <span>ComputeSphere LLC</span>
      </p>
      <div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2.5 text-base lg:text-lg'>
        <span>All Rights Reserved |</span>
        <a
          className='text-link-color underline'
          href='https://computesphere.com/'
        >
          Terms & Conditions |
        </a>
        <a
          className='text-link-color underline'
          href='https://computesphere.com/'
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
