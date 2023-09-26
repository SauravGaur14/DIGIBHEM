import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Header from "../components/Header";

export default function Confirmation() {
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
        <p>
          Congratulations 🎉 <br />
          Your boooking has been confirmed, looking forward to serve you the
          best😊
        </p>
      </div>
    </div>
  );
}
