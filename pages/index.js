import ChildCard from "../components/childCard";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-red-500 font-bold underline">HPP</h1>
      <div>
        <ChildCard
          name="Yasser Nadeem"
          preferred_name="Tito"
          sex="Male"
          dob="1989-05-15"
          status="Eligible"
        ></ChildCard>
      </div>
    </>
  );
}
