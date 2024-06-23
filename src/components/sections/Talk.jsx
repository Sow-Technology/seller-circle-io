import React from "react";
import ContactForm from "../forms/ContactForm";
import { Mail, Phone, PhoneCallIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Talk = () => {
  return (
    <div className="bg-[#3f7be6]  py-20">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-wrap flex-col gap-10 items-center justify-center">
        <ContactForm />
        <div className="text-white text-3xl flex-col flex gap-7">
          <div className="">
            {" "}
            <div className="flex  items-center  gap-2 font-bold">
              <FaPhone className="h-5 w-5" />
              <span>Phone Support</span>
            </div>
            <Link href="tel:+9108041688315" className="text-base">
              +91 080 41688315
            </Link>
          </div>
          <div className="">
            {" "}
            <div className="flex  items-center  gap-2 font-bold">
              <MdMail className="h-5 w-5" />
              <span>Email Us</span>
            </div>
            <Link href="mailto:contact@sellercircle.in" className="text-base">
              contact@sellercircle.in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
