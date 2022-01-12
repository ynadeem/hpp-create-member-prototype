import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function ChildCard({ name, preferred_name, sex, dob, status }) {
  const [age, setAge] = useState(null);
  const calcAge = () => {
    const birthday = +new Date(dob);
    setAge(~~((Date.now() - birthday) / 31557600000));
  };

  useEffect(() => {
    calcAge();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 pb-2 max-w-lg border border-gray-300 mx-4">
      <div className="w-full">
        <div className="flex items-center">
          <div className="pr-5">
            <img src="profile.png" className="w-12"></img>
          </div>
          <div className="block">
            {preferred_name ? (
              <span className="text-gray-900 text-2xl text-ellipsis cursor-pointer">
                {name} ({preferred_name})
              </span>
            ) : (
              <span className="text-gray-900 text-2xl text-ellipsis cursor-pointer">
                {name}
              </span>
            )}
            <div className="flex text-sm">
              <div className="mr-2">
                {sex} {age} years
              </div>
              <div className="mr-2">|</div>
              <div className="mr-2">DOB: {dob}</div>
              <div className="mr-2">|</div>
              <div>Status: {status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
