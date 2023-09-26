import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setUserName,
  updateTotalPersons,
  setRoomCost,
  setAmenitiesCost,
  setTotalCost,
} from "../dataSlice";

import Header from "../components/Header";
import Input from "../components/Input";

import {
  amenetiesCostCalculator,
  roomCostCalculator,
  totalCostCalculator,
} from "../utilities/helper";

import delux from "../assets/delux.jpg";
import suite from "../assets/suite.jpg";
import Divider from "../components/Divider";
import Button from "../components/Button";

export default function Home() {
  const data = useSelector((state) => state.dataSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function nameChangeHandler(e) {
    dispatch(setUserName(e.target.value));
  }

  function confirmationHandler() {
    navigate("/confirmation");
  }

  function personChangeHandler(e) {
    dispatch(updateTotalPersons(e.target.value));
  }

  function calcDays(checkinDate, checkoutDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(checkinDate);
    const secondDate = new Date(checkoutDate);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    // console.log(firstDate, secondDate, diffDays);

    return diffDays;
  }

  function calculateCost() {
    const { roomType, totalPersons, checkinDate, checkoutDate, amenities } =
      data;

    console.log(typeof roomType);
    // console.log(roomType, totalPersons, checkinDate, checkoutDate, amenities);

    // Calculate the number of days between check-in and check-out dates
    const days = calcDays(checkinDate, checkoutDate);

    // Calculate room cost
    const roomCost = roomCostCalculator(roomType, days);

    // Calculate amenities cost
    const amenitiesCost = amenetiesCostCalculator(
      days,
      amenities.ac,
      amenities.locker,
    );

    // Calculate total cost
    const totalCost = totalCostCalculator(
      roomType,
      totalPersons,
      days,
      amenitiesCost,
    );

    // Dispatch actions to update the store
    dispatch(setRoomCost(roomCost));
    dispatch(setAmenitiesCost(amenitiesCost));
    dispatch(setTotalCost(totalCost));
  }

  return (
    <div className="flex flex-col items-center bg-amber-300">
      <Header />
      <Form className="mb-16 mt-5 flex w-9/12 flex-col items-center justify-center gap-y-5 rounded-xl bg-fuchsia-200 pt-10 shadow-2xl">
        <div className="flex gap-x-5">
          <Input type="date" label="Checkin" placeholder="" />
          <Input type="date" label="Checkout" placeholder="" />
        </div>

        <Divider />

        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          value={data.userName}
          onChange={nameChangeHandler}
        />
        <Input
          type="number"
          label="Persons"
          placeholder="Number of persons"
          value={data.totalPersons}
          onChange={personChangeHandler}
        />
        <Divider />
        <span className="text-3xl font-bold">Room Type</span>

        <div className="mt-8 flex gap-x-10 text-center">
          <div>
            <img
              src={delux}
              className="mb-5 h-64 rounded-3xl object-cover shadow-2xl shadow-black duration-150 hover:scale-105"
            />
            <div className="flex h-14 items-baseline justify-center">
              <input
                type="radio"
                id="Delux"
                value="Delux"
                name="roomType"
                className="mr-3 h-5 w-6"
              />
              <span className="text-2xl font-medium">
                Delux Room : Rs 2500*
              </span>
            </div>
          </div>

          <div>
            <img
              src={suite}
              className="mb-5 h-64 rounded-3xl object-cover shadow-2xl shadow-black duration-150 hover:scale-105"
            />
            <div className="flex h-14 items-baseline justify-center">
              <input
                type="radio"
                id="Suite"
                value="Suite"
                name="roomType"
                className="mr-3 h-5 w-6"
              />
              <span className="text-2xl  font-medium">
                Suite Room : Rs 4000*
              </span>
            </div>
          </div>
        </div>

        <Divider />
        <span className="mb-10 text-3xl font-bold">Additional Amenities</span>
        <div className="flex flex-col gap-y-6">
          <div className="flex h-10 items-center justify-between gap-x-5">
            <p className="text-2xl font-medium">AC</p>
            <input type="checkbox" className="h-6 w-6" />
          </div>

          <div className="flex h-10 items-center gap-x-5">
            <p className="text-2xl font-medium">Locker</p>
            <input type="checkbox" className="h-6 w-6" />
          </div>
        </div>

        <Divider />

        <Button onClick={calculateCost} text="Calculate Cost"></Button>

        <div className="flex h-32 w-[30rem] flex-col justify-between rounded-xl text-2xl font-medium outline outline-1 outline-offset-[10px] outline-slate-400">
          <p className="flex justify-between">
            Room Cost<span>Rs {data.roomCost}</span>
          </p>
          <p className="flex justify-between">
            Amenities Cost<span>Rs {data.amenitiesCost}0</span>
          </p>
          <p className="flex justify-between">
            Total Amount<span>Rs {data.totalCost}0</span>
          </p>
        </div>

        <Divider />

        <div className="mt-5 flex items-baseline gap-x-7 text-2xl font-medium">
          <div>
            <p className="">Advance Payment</p>
            <input
              type="number"
              className="mb-5 mt-2 h-12 w-96 rounded-2xl pl-5 pr-5 outline-none focus:outline-[0.5px] focus:outline-slate-300"
            />
          </div>

          <div>
            <p>Balance Amount</p>
            <p className="mb-5 mt-2 h-12 w-96 rounded-2xl bg-white pl-5 pt-2">
              {data.balance}
            </p>
          </div>
        </div>

        <Divider />

        <button
          onClick={confirmationHandler}
          className="mb-8 mt-8 h-14 w-60 rounded-xl bg-blue-600 text-center text-2xl font-medium text-white duration-150 hover:scale-105 hover:bg-blue-500"
        >
          Confirm Booking
        </button>
      </Form>
    </div>
  );
}
