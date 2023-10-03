export default function Input({ label, type, placeholder, value, required, onChange}) {
  return (
    <div className="flex font-sourceCodePro flex-col justify-center gap-x-5">
      <label className="text-2xl font-black font-serif">{label}</label>
      <input
        type={type}
        className="h-12 w-96 rounded-2xl pl-5 pr-5 outline-none focus:outline-[0.5px] focus:outline-slate-300"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required = {required}
      />
    </div>
  );
}
