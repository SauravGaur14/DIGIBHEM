export default function Button({onClick, text}) {
  return (
    <button
      onClick={onClick}
      className="mb-8 mt-8 h-14 w-60 rounded-xl bg-blue-600 text-center text-2xl font-medium text-white duration-150 hover:scale-105 hover:bg-blue-500"
    >
      {text}
    </button>
  );
}
