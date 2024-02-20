import { Menu } from "lucide-react";
import Logo from "../../images/logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../@/components-shad/ui/dropdown-menu";
import { Button } from "../@/components-shad/ui/button";

export default function Header() {
  return (
    <div className="relative flex items-center mx-6 py-10 justify-between md:mx-20 lg:mx-32 xl:mx-44">
      <a>
        <img src={Logo} alt="Logo Manage" className="lg:hidden" />
      </a>

      <div className="max-lg:hidden flex justify-between items-center w-full">
        <a>
          <img src={Logo} alt="Logo Manage" />
        </a>

        <div className="flex items-center gap-6 ">
          <a className="text-veryDarkBlue font-semibold cursor-pointer hover:text-darkGrayishBlue transition duration-300 easy-in-out">
            Pricing
          </a>
          <a className="text-veryDarkBlue font-semibold cursor-pointer hover:text-darkGrayishBlue transition duration-300 easy-in-out">
            Product
          </a>
          <a className="text-veryDarkBlue font-semibold cursor-pointer hover:text-darkGrayishBlue transition duration-300 easy-in-out">
            About Us
          </a>
          <a className="text-veryDarkBlue font-semibold cursor-pointer hover:text-darkGrayishBlue transition duration-300 easy-in-out">
            Careers
          </a>
          <a className="text-veryDarkBlue font-semibold cursor-pointer hover:text-darkGrayishBlue transition duration-300 easy-in-out">
            Community
          </a>
        </div>

        <Button className="bg-brightRed rounded-3xl px-10 shadow-md hover:opacity-70 hover:bg-brightRed transition duration-300 easy-in-out">
          Get Started
        </Button>
      </div>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu></Menu>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Pricing</DropdownMenuItem>
            <DropdownMenuItem>Product</DropdownMenuItem>
            <DropdownMenuItem>About Us</DropdownMenuItem>
            <DropdownMenuItem>Careers</DropdownMenuItem>
            <DropdownMenuItem>Community</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
