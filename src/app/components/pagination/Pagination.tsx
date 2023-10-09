const Pagination = ({ currentPage, totalPages, onChange }:
  { currentPage: number, totalPages: number, onChange: any }) => {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onChange(index + 1)}
            className={`px-3 py-2 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
}

export default Pagination;