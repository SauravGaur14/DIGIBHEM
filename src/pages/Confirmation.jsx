import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Header from "../components/Header";
import { useSelector } from "react-redux";

export default function Confirmation() {
  const data = useSelector((state) => state.dataSlice);
  let [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  if (isLoading && LoadingSpinner) {
    return (
      <div className="h-screen w-full bg-amber-300">
        <Header />
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-amber-300">
      <Header />
      <div className="mt-24 text-center text-3xl font-medium leading-loose">
        <p className="font-serif text-zinc-950">
          Congratulations {data.userName}🎉 <br />
          Your booking has been confirmed !<br /> Looking forward to serve you
          the best😊
        </p>
      </div>
    </div>
  );
}
