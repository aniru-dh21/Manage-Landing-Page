import { Button } from "../@/components-shad/ui/button";

export default function Maintext() {
  return (
    <div className="md:flex md:gap-10 lg:gap-20">
      <div className="flex flex-col text-center gap-3 mt-20 md:text-start md:w-3/6">
        <h2 className="text-2xl text-darkBlue font-bold md:text-4xl">
          What’s different about Manage?
        </h2>
        <p className="text-darkGrayishBlue">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="md:w-3/6">
        <div className="mt-16">
          <div className="bg-veryPaleRed flex items-center gap-4">
            <Button className="rounded-2xl bg-brightRed px-6 hover:opacity-70 hover:bg-brightRed transition duration-300 easy-in-out">
              01
            </Button>
            <h3 className="text-xl text-darkBlue font-bold">
              Track company-wide progress
            </h3>
          </div>
          <p className="text-darkGrayishBlue mb-10">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div>
          <div className="bg-veryPaleRed flex items-center gap-4">
            <Button className="rounded-2xl bg-brightRed px-6 hover:opacity-70 hover:bg-brightRed transition duration-300 easy-in-out">
              02
            </Button>
            <h3 className="text-xl text-darkBlue font-bold">
              Advanced built-in reports
            </h3>
          </div>
          <p className="text-darkGrayishBlue mb-10">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div>
          <div className="bg-veryPaleRed flex items-center gap-4">
            <Button className="rounded-2xl bg-brightRed px-6 hover:opacity-70 hover:bg-brightRed transition duration-300 easy-in-out">
              03
            </Button>
            <h3 className="text-xl text-darkBlue font-bold">
              Everything you need in one place
            </h3>
          </div>
          <p className="text-darkGrayishBlue mb-10">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
}
