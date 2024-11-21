import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './AboutUs.css';

const AboutUs = () => {
  const [modalImage, setModalImage] = useState(null); // To track the clicked image for modal view

  const slideIn = {
    hidden: { transform: 'translateX(-100px)' },
    visible: { transform: 'translateX(0)', transition: { type: 'spring', stiffness: 50 } },
  };

  const slideInLeftToRight = {
    hidden: { transform: 'translateX(-200px)' },
    visible: { transform: 'translateX(0)', transition: { type: 'spring', stiffness: 50, delay: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3 } },
  };

  const handleImageClick = (src) => {
    setModalImage(src); // Set clicked image as the modal image
  };

  const closeModal = () => {
    setModalImage(null); // Close the modal
  };

  return (
    <div className="about-us">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.5 }}
        className="about-section"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="about-header-container"
        >
          <h2>About SK FLEX</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideIn}
            className="about-image"
          >
            <img
              src="a1.jpg"
              alt="Team Member 1"
              className="about-img"
              onClick={() => handleImageClick('a1.jpg')} // Open image in modal on click
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeftToRight}
            className="about-text"
          >
            <p>
              SK FLEX was established in the year 1995. It is one of the leading businesses in the flex printing services in Ferozepur. Known for Flex Printing Services, Digital Flex Printing Services, Banner Printers, Solvent Flex Printing Services, Digital Printing Services on Glass, Wall Paper Printing Services, Color Printing Services, Flex Hoarding Printing, ACP Elevation Letters, Neon Sign Boards, Social Media Design, Offset Printing, 3D Wallpapers, Led Clip on board, Acrylic Letters, Mug Printing, Cloth Printing, Pillow Printing, etc.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.8 }}
        className="contact-section"
      >
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more about our services, feel free to get in touch with us:</p>
        <p>Email: <a href="mailto:skflex@yahoo.com">skflex@yahoo.com</a></p>
        <p>Phone: <a href="tel:+918360501134">+91 83605 01134 , </a><a href='tel:+917277500081'>+91 72775 00081</a></p>
        <p>Address: SK FLEX, Main Bazar, Ferozepur, Punjab</p>
        <p>Branches: SK FLEX, Kalka Shimla Highway, Pinjore, Kalka - 134104 (Near Khurana Hospital)</p>
      </motion.div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="Zoomed Modal" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default AboutUs;
