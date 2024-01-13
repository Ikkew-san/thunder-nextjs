import React, { useState } from "react";
import axios from "axios";

type Props = {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
};

const PhoneForm: React.FC<Props> = ({ phoneNumber, setPhoneNumber }) => {
  const [inputPhoneNumber, setInputPhoneNumber] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPhoneNumber(event.target.value);
    const thaiPhoneNumberRegex = /^0[0-9]{8}$/;
    setIsValid(thaiPhoneNumberRegex.test(inputPhoneNumber));
  };

  const phoneHandler = async () => {
    try {
      const res = await axios.post("http://localhost:5000/add-phonenumber", null, {
        params: { phoneNumber: inputPhoneNumber },
      });

      setPhoneNumber(res.data.number);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article
      className={`${phoneNumber != "" ? "hidden" : ""} absolute grid place-items-center top-0 left-0 w-screen h-screen`}
    >
      <div className="absolute bg-white/80 z-0 w-screen h-screen" />
      <section className="relative z-10 border shadow-2xl rounded md:w-[500px] w-[300px]">
        <div className="flex flex-col gap-4 bg-white p-6">
          <input type="tel" value={inputPhoneNumber} onChange={handleChange} placeholder="กรอกเบอร์โทรศัพท์" />
          {isValid ? (
            <small style={{ color: "green" }}>เบอร์โทรถูกต้อง</small>
          ) : (
            <small style={{ color: "red" }}>โปรดกรอกเบอร์โทรศัพท์ไทยที่ถูกต้อง</small>
          )}

          <button
            type="submit"
            disabled={!isValid}
            onClick={() => {
              // setPhoneNumber(inputPhoneNumber);
              phoneHandler();
            }}
            className="bg-green-500 disabled:bg-gray-400 disabled:text-gray-600 rounded-xl text-2xl font-bold py-2 px-8"
          >
            Ready
          </button>
        </div>
      </section>
    </article>
  );
};

export default PhoneForm;
