const EmptyState = () => {
  return (
    <div className='flex-center flex-col h-64'>
      <svg
        className='w-16 h-16 text-gray-400 mb-4'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path d='M3 3h18v18H3z'></path>
        <path d='M9 9h6v6H9z'></path>
      </svg>

      <h2 className='text-dark-gray'>No Todos Yet</h2>
      <p className='text-dark-gray'>
        Your todo list is empty. Start adding tasks!
      </p>
    </div>
  );
};

export default EmptyState;
