import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-center">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
