const Input = ({ label, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-semibold mb-1">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 ring-red-500"
            : "border-gray-300 ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
