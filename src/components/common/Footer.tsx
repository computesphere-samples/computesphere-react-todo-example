const Footer = () => {
  return (
    <footer className='flex-between bg-white'>
      <p>
        Copyright &copy; <span></span> ComputeSphere LLC
      </p>
      <div className='space-x-2.5'>
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
