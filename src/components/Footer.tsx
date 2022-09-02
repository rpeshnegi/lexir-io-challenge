import Image from "next/image";
import React, { useState } from "react";
import Logo from '@assets/img/logo-2.svg';
import Link from "next/link";
import mediumIcon from '@assets/img/Group.svg';
import fbIcon from '@assets/img/fb.svg';
import instaIcon from '@assets/img/insta.svg';
import linkedinIcon from '@assets/img/linkedin.svg';
import { footerPages } from "@config/constant";

const socialIcon = [
  mediumIcon,
  fbIcon,
  instaIcon,
  linkedinIcon,
];

function Footer() {
  return (
    <>
      <div className="bg-slate-900 text-white flex justify-between px-9 pt-10 pb-5">
        <div className="w-3/12">
          <Image src={Logo} alt={''} />
        </div>
        <div className="flex w-1/2 justify-between">
          {footerPages.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="text-gray-400 h-10">
                {item.title}
              </h2>
              {item.pages.map((option, index) => (
                <Link key={index} href={'/'}>
                  <a className='py-2'>{option}</a>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="w-3/12 flex justify-end">
          {socialIcon.map((item, index) => (
            <div key={index} className='mx-2 '>
              <Image src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="items-center bg-slate-900 text-white pt-2 pb-5 px-9">
        <div className='bg-gray-700 w-full h-0.5 mb-2'></div>
        <div className='flex justify-between'>
          <span className="font-light">© 2022 Lexir Inc.</span>
          <nav className="font-normal">
            <Link href={'/'}>
              <a className="mr-16">Privacy</a>
            </Link>
            <Link href={'/'}>
              <a>Terms of service</a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Footer;
