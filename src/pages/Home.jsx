import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setUserName,
  updateTotalPersons,
  setRoomCost,
  setRoomType,
  setAmenitiesCost,
  setTotalCost,
  toggleAc,
  toggleLocker,
  setAdvance,
  updateCheckin,
  updateCheckout,
  setAdditionalCharges,
  setBalance,
} from "../dataSlice";

import Header from "../components/Header";
import Input from "../components/Input";

import delux from "../assets/delux.jpg";
import suite from "../assets/suite.jpg";
import Divider from "../components/Divider";
import Button from "../components/Button";

export default function Home() {
  const data = useSelector((state) => state.dataSlice);

  const { ac: isAcChecked, locker: isLockerChecked } = data.amenities;
  const {
    roomType,
    totalPersons,
    checkinDate,
    checkoutDate,
    roomCost,
    amenitiesCost,
    additionalCharges,
    totalCost,
  } = data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function nameChangeHandler(e) {
    dispatch(setUserName(e.target.value));
  }
  function personChangeHandler(e) {
    dispatch(updateTotalPersons(e.target.value));
  }

  function checkinChangeHandler(e) {
    dispatch(updateCheckin(e.target.value));
  }

  function checkoutChangeHandler(e) {
    dispatch(updateCheckout(e.target.value));
  }

  function confirmationHandler() {
    navigate("/confirmation");
  }

  function calcDays(checkinDate, checkoutDate) {
    const startDate = new Date(checkinDate);
    const endDate = new Date(checkoutDate);

    // Check if the input dates are valid
    if (isNaN(startDate) || isNaN(endDate)) {
      throw new Error('Invalid date format. Please use "yyyy-mm-dd".');
    }

    // Initialize a count for the dates
    let dateCount = 0;

    // Iterate through the dates and count them
    while (startDate <= endDate) {
      dateCount++;
      startDate.setDate(startDate.getDate() + 1); // Move to the next day
    }

    return dateCount;
  }

  function roomCostCalculator(days) {
    let roomCost = 0;
    if (roomType === "suite") roomCost = 4000;
    else if (roomType === "delux") roomCost = 2500;
    roomCost *= days;
    dispatch(setRoomCost(roomCost));
    return roomCost;
  }

  function amenetiesCostCalculator(days) {
    let amenitiesCost = 0;
    if (isAcChecked) amenitiesCost += 1000;
    if (isLockerChecked) amenitiesCost += 300;
    amenitiesCost *= days;

    dispatch(setAmenitiesCost(amenitiesCost));
    return amenitiesCost;
  }

  function additionalChargeCalculator(days) {
    let additionalCharges = 0;
    if (totalPersons > 2) additionalCharges = days * 1000 * (totalPersons - 2);
    dispatch(setAdditionalCharges(additionalCharges));
  }

  function totalCostCalculator() {
    let totalCost = roomCost + amenitiesCost + additionalCharges;
    dispatch(setTotalCost(totalCost));
    dispatch(setBalance(totalCost));
  }

  function calculateCost(e) {
    e.preventDefault();
    
    // Calculate the number of days between check-in and check-out dates
    const days = calcDays(checkinDate, checkoutDate);

    // Calculate room cost
    roomCostCalculator(days);

    // Calculate amenities cost
    amenetiesCostCalculator(days);

    additionalChargeCalculator(days);
  }

  useEffect(() => {
    totalCostCalculator();
  }, [roomCost, amenitiesCost, additionalCharges]);

  function acCheckHandler() {
    dispatch(toggleAc(!isAcChecked));
  }

  function lockerCheckHandler(e) {
    dispatch(toggleLocker(!isLockerChecked));
  }

  function roomTypeSelectHandler(roomType) {
    dispatch(setRoomType(roomType));
  }

  function advanceChangeHandler(e) {
    dispatch(setAdvance(+e.target.value));
  }

  return (
    <div className="flex flex-col flex-wrap items-center bg-amber-300 md:flex-row">
      <Header />
      <Form className="mb-16 mt-5 flex w-9/12 flex-col items-center justify-center gap-y-5 rounded-xl bg-fuchsia-200 pt-10 shadow-2xl md:mt-20  md:w-11/12">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-8">
          <Input
            type="date"
            label="Checkin"
            placeholder=""
            required={true}
            onChange={checkinChangeHandler}
          />
          <Input
            type="date"
            label="Checkout"
            placeholder=""
            required={true}
            onChange={checkoutChangeHandler}
          />
        </div>

        <Divider />

        <div className="flex flex-col flex-wrap gap-y-8">
          <Input
            type="text"
            label="Name"
            required={true}
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
        </div>
        <Divider />
        <span className="text-3xl font-bold">Room Type</span>

        <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-8 text-center">
          <div>
            <img
              src={delux}
              className="mb-5 h-64 rounded-3xl object-cover shadow-2xl shadow-black duration-150 hover:scale-105"
            />
            <div className="flex h-14 items-baseline justify-center">
              <input
                type="radio"
                id="delux"
                value="Delux"
                name="roomType"
                className="mr-3 h-5 w-6"
                onChange={roomTypeSelectHandler.bind(this, "delux")}
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
                onChange={roomTypeSelectHandler.bind(this, "suite")}
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
            <input
              type="checkbox"
              className="h-6 w-6"
              checked={isAcChecked}
              onChange={acCheckHandler}
            />
          </div>

          <div className="flex h-10 items-center gap-x-5">
            <p className="text-2xl font-medium">Locker</p>
            <input
              type="checkbox"
              className="h-6 w-6"
              checked={isLockerChecked}
              onChange={lockerCheckHandler}
            />
          </div>
        </div>

        <Divider />

        <Button onClick={calculateCost} text="Calculate Cost"></Button>

        <div className="flex  w-[30rem] flex-col justify-between rounded-xl p-3 text-2xl font-medium outline outline-1 outline-offset-[10px] outline-slate-400">
          <p className="flex flex-wrap justify-between">
            Room Cost<span>Rs {data.roomCost}</span>
          </p>
          <p className="flex justify-between">
            Amenities Cost<span>Rs {data.amenitiesCost}</span>
          </p>
          <p className="flex justify-between">
            Additional Charges<span>Rs {data.additionalCharges}</span>
          </p>
          <p className="flex justify-between">
            Total Amount<span>Rs {data.totalCost}</span>
          </p>
        </div>

        <Divider />

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-7 text-2xl font-medium">
          <div>
            <p className="">Advance Payment</p>
            <input
              type="number"
              max={totalCost}
              min={1000}
              required
              className="mb-5 mt-2 h-12 w-96 rounded-2xl pl-5 pr-5 outline-none focus:outline-[0.5px] focus:outline-slate-300"
              onChange={advanceChangeHandler}
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

        <Button
          onClick={confirmationHandler}
          type="submit"
          text="Confirm Booking"
        />
      </Form>
    </div>
  );
}
