"use client";
import { useEffect, useRef, useState } from "react";
import PhoneFrom from "./components/phoneForm";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const actionBtnRef = useRef<HTMLButtonElement>(null);
  const [element, setElement] = useState<string>("");

  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [direction, setDirection] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [action, setAction] = useState<boolean>(false);

  const changeAction = () => {
    const actionBtn = actionBtnRef.current;
    if (!action) {
      setAction(true);
      actionBtn!.style.background = "red";
      if (x == 0 && y == 0) {
        randomDirection();
        setX(Math.floor(Math.random() * 6 + 1));
        setY(Math.floor(Math.random() * 6 + 1));
      }
      move();
    } else if (action) {
      setAction(false);
      actionBtn!.style.background = "#ff7300";
    }
  };

  const changeReset = async () => {
    const actionBtn = actionBtnRef.current;
    setElement("");
    setAction(false);
    setDirection({ x: 0, y: 0 });
    setX(0);
    setY(0);
    actionBtn!.style.background = "#ff7300";
  };

  const move = () => {
    let findDirection = false;
    setElement(`${y}${x}`);
    if (action) {
      if (direction.x === 1) {
        if (x != 6) {
          setX(x + 1);
        } else {
          setX(x - 1);
          findDirection = true;
        }
      } else if (direction.x === 2) {
        if (x != 1) {
          setX(x - 1);
        } else {
          setX(x + 1);
          findDirection = true;
        }
      }

      if (direction.y === 1) {
        if (y != 6) {
          setY(y + 1);
        } else {
          setY(y - 1);
          findDirection = true;
        }
      } else if (direction.y === 2) {
        if (y != 1) {
          setY(y - 1);
        } else {
          setY(y + 1);
          findDirection = true;
        }
      }

      if (findDirection) randomDirection();
    }
  };

  const randomDirection = () => {
    let beforeX = direction.x;
    let beforeY = direction.y;
    do {
      direction.x = Math.floor(Math.random() * 3);
      direction.y = Math.floor(Math.random() * 3);
    } while (direction.x == beforeX || direction.y == beforeY || direction.x === direction.y);
  };

  useEffect(() => {
    if (action) {
      setTimeout(() => {
        move();
      }, 500);
    }
  }),
    [action];

  return (
    <main className="grid place-content-center h-screen w-screen">
      <article className="flex flex-col space-y-10">
        <section className="grid grid-cols-6">
          <div className={`border border-black h-[50px] bg ${element === "11" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "12" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "13" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "14" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "15" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "16" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "21" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "22" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "23" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "24" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "25" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "26" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "31" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "32" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "33" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "34" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "35" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "36" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "41" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "42" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "43" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "44" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "45" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "46" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "51" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "52" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "53" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "54" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "55" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "56" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "61" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "62" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "63" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "64" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "65" ? "bg-green-400" : ""}`} id=""></div>
          <div className={`border border-black h-[50px] ${element === "66" ? "bg-green-400" : ""}`} id=""></div>
        </section>

        <section className=" space-x-10">
          <button
            type="button"
            ref={actionBtnRef}
            onClick={changeAction}
            className="actionBtn bg-[#ff7300] rounded-xl text-2xl font-bold py-2 px-8"
          >
            {!action ? "Start" : "Stop"}
          </button>
          <button type="button" onClick={changeReset} className="bg-[#7d7dff] rounded-xl text-2xl font-bold py-2 px-8">
            Reset
          </button>
        </section>
        <PhoneFrom phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      </article>
    </main>
  );
}
