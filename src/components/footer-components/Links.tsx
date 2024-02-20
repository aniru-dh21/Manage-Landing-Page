export default function Links() {
  return (
    <div className="flex justify-between w-full px-10 md:px-0">
      <ul className=" flex flex-col gap-4">
        <li>
          <a className="text-white cursor-pointer hover:text-brightRed transition duration-200 easy-in-out">
            Home
          </a>
        </li>
        <li>
          <a className="text-white cursor-pointer hover:text-brightRed transition duration-200 easy-in-out">
            Pricing
          </a>
        </li>
        <li>
          <a className="text-white cursor-pointer hover:text-brightRed transition duration-200 easy-in-out">
            Products
          </a>
        </li>
        <li>
          <a className="text-white cursor-pointer hover:text-brightRed transition duration-200 easy-in-out">
            About Us
          </a>
        </li>
      </ul>

      <ul className="text-white flex flex-col gap-4">
        <li>
          <a className="text-white cursor-pointer hover:text-brightRed transition duration-200 easy-in-out">
            Careers
          </a>
        </li>
        <li>
          <a className="text-white cursor-pointer hover:text-brightRed transition duration-200 easy-in-out">
            Community
          </a>
        </li>
        <li>
          <a className="text-white cursor-pointer hover:text-brightRed transition duration-200 easy-in-out">
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>
  );
}
