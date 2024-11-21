import React, { useState } from 'react';

const PillowPrinting = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null); // To track which image is clicked

  const images = [
    { src: 'p1.jpg', alt: 'Image 1' },
    { src: 'p2.jpg', alt: 'Image 2' },
    { src: 'p3.jpg', alt: 'Image 3' },
    { src: 'p4.jpg', alt: 'Image 4' },
    { src: 'p5.jpg', alt: 'Image 5' },
    { src: 'p6.jpg', alt: 'Image 6' },
    { src: 'p7.jpg', alt: 'Image 7' },
  ];

  const handleImageClick = (src) => {
    setModalImage(src); // Set clicked image as the modal image
  };

  const closeModal = () => {
    setModalImage(null); // Close the modal
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pillow Printing</h1>
      <div
        style={styles.imageRow}
        onMouseEnter={() => setHoveredIndex("row")}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || `Image ${index + 1}`}
            style={{
              ...styles.imageItem,
              ...(hoveredIndex === index ? styles.imageItemHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex("row")}
            onClick={() => handleImageClick(image.src)} // Open image in modal on click
          />
        ))}
      </div>

      {modalImage && (
        <div style={styles.modal} onClick={closeModal}>
          <img src={modalImage} alt="Modal Image" style={styles.modalImage} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
    backgroundColor: '#1F2833',
    color: '#66FCF1',
  },
  imageRow: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowX: 'scroll', // Enable horizontal scrolling
    overflowY: 'hidden', // Disable vertical scroll
    whiteSpace: 'nowrap',
    flexWrap: 'nowrap',
    height: '100%',
    scrollbarWidth: 'none', // Hides scrollbar in Firefox
    '-ms-overflow-style': 'none', // Hides scrollbar in IE and Edge
  },
  imageItem: {
    height: '250px',
    width: '350px',
    objectFit: 'cover',
    borderRadius: '5px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
    opacity: 0.9,
    cursor: 'pointer',
  },
  imageItemHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)',
    opacity: 1,
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalImage: {
    maxHeight: '90%',
    maxWidth: '90%',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
    cursor: 'zoom-out',
  },
  // Hide scrollbar in WebKit browsers (Chrome, Safari)
  imageRowHover: {
    '::-webkit-scrollbar': {
      display: 'none', // Hides scrollbar in WebKit browsers
    },
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: '1.5em',
    },
    imageRow: {
      gap: '15px',
    },
    imageItem: {
      height: '200px',
      width: '250px',
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '1.2em',
    },
    imageRow: {
      gap: '10px',
    },
    imageItem: {
      height: '150px',
      width: '200px',
    },
  },
};

export default PillowPrinting;
