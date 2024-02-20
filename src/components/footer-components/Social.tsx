//From images
import LogoW from "../../../images/logo-white.svg";
import Facebook from "../../../images/icon-facebook.svg";
import Youtube from "../../../images/icon-youtube.svg";
import Twitter from "../../../images/icon-twitter.svg";
import Pinterest from "../../../images/icon-pinterest.svg";
import Instagram from "../../../images/icon-instagram.svg";
import "../../index.css";
export default function Social() {
  return (
    <div className="w-full flex flex-col gap-12 md:flex-col-reverse">
      <div className="flex justify-between items-center">
        <a className="cursor-pointer">
          <img src={Facebook} className="h-8 lg:h-9" />
        </a>
        <a className="cursor-pointer">
          <img src={Youtube} className="h-8 lg:h-9" />
        </a>
        <a className="cursor-pointer">
          <img src={Twitter} className="h-8 lg:h-9" />
        </a>
        <a className="cursor-pointer">
          <img src={Pinterest} className="h-8 lg:h-9" />
        </a>
        <a className="cursor-pointer">
          <img src={Instagram} className="h-8 lg:h-9" />
        </a>
      </div>
      <img src={LogoW} alt="White Logo Manage" className=" w-1/2 mx-auto" />
    </div>
  );
}
