//Components
import Links from "./footer-components/Links";
import Social from "./footer-components/Social";
import InputForm from "./footer-components/InputForm";

export default function Footer() {
  return (
    <footer className="relative bg-veryDarkBlue px-6 py-12 flex flex-col items-center gap-12 md:flex-row-reverse md:gap-6 md:items-start md:px-20 lg:px-32 lg:gap-12 xl:gap-20 xl:px-44">
      <InputForm />

      <Links />

      <Social />

      <p className="text-darkGrayishBlue md:absolute md:bottom-12">
        Copyright 2024. All Rights Reserved
      </p>
    </footer>
  );
}

//   focus:border-red-500
