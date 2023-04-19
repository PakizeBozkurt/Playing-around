import React from "react";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variant";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/*Img*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm a Software Developer</h3>
            <p className="mb-6">Lorem....</p>
          </motion.div>
          <div className="flex gap-x-8 items-center">
            <button className="btn btn-lg">Contact me</button>
            <a href="pakiozihak@gmailcom" className="text-grsdient btn-link">
              My portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
