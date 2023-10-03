export default function LoadingSpinner() {
  return (
    <button
      type="button"
      className="flex flex-col mt-36 w-full items-center justify-around text-black text-4xl gap-x-2 font-medium"
      disabled
    >
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
      <p className="font-serif text-zinc-950 text-4xl">Processing your request...</p>
    </button>
  );
}
