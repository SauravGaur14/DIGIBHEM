import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex h-28 w-full self-start items-center justify-between pl-10 pr-10 text-blue-800">
      <Link to="/" className="font-fuggles text-7xl font-bold">Gaur's</Link>
      <div className="flex w-96 justify-between font-sourceCodePro text-2xl font-bold">
        <span>Contact</span>
        <span>Services</span>
        <span>Logout</span>
      </div>
    </div>
  );
}
