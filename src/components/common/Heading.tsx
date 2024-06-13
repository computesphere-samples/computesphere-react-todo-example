const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className='text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-logo-gradient'>
      {title}
    </h1>
  );
};

export default Heading;
