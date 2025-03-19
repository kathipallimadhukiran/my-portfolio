// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 text-white flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase text-[#16f2b3]">Contact Me</h2>
        <p className="text-sm text-gray-300">Feel free to reach out for any inquiries or opportunities.</p>
      </div>

      {/* Contact Info */}
      <div className="w-full max-w-2xl text-center flex flex-col gap-6">
        <p className="text-sm md:text-xl flex items-center justify-center gap-3">
          <MdAlternateEmail className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={36} />
          <span>{personalData.email}</span>
        </p>
        <p className="text-sm md:text-xl flex items-center justify-center gap-3">
          <IoMdCall className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={36} />
          <span>{personalData.phone}</span>
        </p>
        <p className="text-sm md:text-xl flex items-center justify-center gap-3">
          <CiLocationOn className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={36} />
          <span>{personalData.address}</span>
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex justify-center gap-6">
        <Link target="_blank" href={personalData.github}>
          <IoLogoGithub className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={48} />
        </Link>
        <Link target="_blank" href={personalData.linkedIn}>
          <BiLogoLinkedin className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={48} />
        </Link>
        <Link target="_blank" href={personalData.twitter}>
          <FaXTwitter className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={48} />
        </Link>
        <Link target="_blank" href={personalData.stackOverflow}>
          <FaStackOverflow className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={48} />
        </Link>
        <Link target="_blank" href={personalData.facebook}>
          <FaFacebook className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={48} />
        </Link>
      </div>

    </div>
  );
}

export default ContactSection;
