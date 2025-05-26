const Button = ({ text, onClick, type = 'normal' }) => {
  const getButtonClass = () => {
    switch (type) {
      case 'operation':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'clear':
        return 'bg-red-500 hover:bg-red-600 text-white col-span-2';
      case 'equals':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'function':
        return 'bg-purple-500 hover:bg-purple-600 text-white';
      default:
        return 'bg-blue-400 hover:bg-blue-500';
    }
  };

  return (
    <button
      className={`h-12 border border-black rounded-lg font-bold text-lg transition-colors ${getButtonClass()}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
