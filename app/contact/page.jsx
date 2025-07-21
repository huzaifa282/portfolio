"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 315 755 4474",
  },
  {
    icon: <FaEnvelope />,
    title: "Gmail",
    description: "alihuzaifa282@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Faisalabad, Pakistan",
  },
];
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const currentTime = new Date().toLocaleString();

    const formData = new FormData(form.current);
    formData.append("service", service);
    formData.append("time", currentTime);

    emailjs
      .sendForm(
         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  form.current,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
          setService("");
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
              <p className="text-white/60">
              We’re excited to collaborate with you! Please fill out the form to get started.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="text" placeholder="First Name" name="first_name" required />
                <Input type="text" placeholder="Last Name" name="last_name" required />
                <Input type="email" placeholder="Email Address" name="from_email" required />
                <Input type="text" placeholder="Phone Number" name="phone" />
              </div>

              <Select onValueChange={(val) => setService(val)} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup defaultValue="Web Development">
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX">UI/UX</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Type your message here."
                className="h-[200px] resize-none"
                name="message"
                required
              />

              {/* Hidden field for service and time */}
              <input type="hidden" name="service" value={service} />
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <Button type="submit" size="md" className="max-w-40">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
