import Illustration from "../../images/illustration-intro.svg";
import { Button } from "../@/components-shad/ui/button";
export default function Main() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:gap-10 lg:gap-20">
      <div className="flex flex-col items-center gap-3 text-center md:text-start md:items-start md:w-3/6">
        <h1 className="text-darkBlue text-4xl font-bold lg:text-5xl xl:text-6xl">
          Bring everyone
          <br className="max-md:hidden" /> together to build
          <br className="max-md:hidden" /> better products.
        </h1>
        <p className="text-darkGrayishBlue mb-4">
          Manage makes it simple for software teams
          <br className="max-md:hidden" /> to plan day-to-day tasks while
          keeping the
          <br className="max-md:hidden" /> larger team goals in view.
        </p>
        <Button className="bg-brightRed rounded-3xl px-10 shadow-md hover:opacity-70 hover:bg-brightRed transition duration-300 easy-in-out">
          Get Started
        </Button>
      </div>
      <img src={Illustration} className="w-full md:w-3/6" alt="Illustration" />
    </div>
  );
}
