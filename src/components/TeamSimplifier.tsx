import { Button } from "../@/components-shad/ui/button";

export default function TeamSimplifier() {
  return (
    <div className="bg-brightRed w-full px-6 py-16 text-center md:flex md:items-center md:justify-between md:px-20 md:text-start">
      <h2 className="text-white font-bold text-3xl md:text-4xl">
        Simplify how your team <br className="max-md:hidden" /> works today.
      </h2>
      <Button className="mt-6 bg-white text-brightRed font-bold rounded-3xl px-10 hover:opacity-70 hover:bg-white transition duration-300 easy-in-out ">
        Get Started
      </Button>
    </div>
  );
}
