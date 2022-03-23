import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const animation = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0.1, y: 50 },
};

export default function About() {
  return (
    <div className="about-main">
      <div>
        <h1 className="underline-about">ABOUT THE EVENT</h1>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animation}
        className="about-details"
      >
        <div className="about-content">
          <h2>EKARIKTHIN'22 - NITN</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dolor adipisci, earum voluptas veritatis necessitatibus assumenda
              eaque fugiat sapiente mollitia a quia doloremque saepe
              perspiciatis deleniti officiis, ipsum vero corporis? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Ea unde harum
              perspiciatis possimus sunt labore consequuntur ducimus nam, a
              nesciunt culpa quaerat optio asperiores corrupti ut officiis odit
              esse debitis. Ipsam minus, voluptates blanditiis beatae non eos
              itaque autem deleniti ipsum sint incidunt, accusantium architecto
              dignissimos repellat eum deserunt laborum sequi impedit? Expedita
              consectetur, atque itaque assumenda placeat nemo quo ducimus
              necessitatibus dolorem. Eaque laboriosam inventore dolorem
              reiciendis temporibus. Cum voluptates repudiandae suscipit facilis
              maxime incidunt illum illo sunt temporibus commodi voluptatibus,
              iusto ea repellendus aliquid. Ducimus iste debitis amet provident
              deleniti, odit eligendi omnis ex dolorem officiis nemo quos qui
              dolores maxime dolor, quam saepe error voluptas numquam. Eveniet,
              nulla. Cupiditate ipsum impedit voluptas modi necessitatibus
              sapiente eveniet, molestias magnam animi rerum mollitia
              consectetur corrupti saepe, odio voluptatibus illum tempore ipsa
              exercitationem minima distinctio eum asperiores.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
