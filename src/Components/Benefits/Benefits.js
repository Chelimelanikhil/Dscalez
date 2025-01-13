import React, { useEffect } from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefitsData = [
    {
      title: "Now Get 24X7 Protection From Hard & Impure Water",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing commodo molestie etinterdum cum dolor. Lorem ipsum sit lorem massa sed et dolor fusce tincidunt tempus et",
      image: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
      imagePosition: "right"
    },
    {
      title: "Now Get 24X7 Protection From Hard & Impure Water",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing commodo molestie etinterdum cum dolor. Lorem ipsum sit lorem massa sed et dolor fusce tincidunt tempus et",
      image: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
      imagePosition: "left"
    },
    {
      title: "Now Get 24X7 Protection From Hard & Impure Water",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing commodo molestie etinterdum cum dolor. Lorem ipsum sit lorem massa sed et dolor fusce tincidunt tempus et",
      image: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
      imagePosition: "right"
    },
    {
      title: "Now Get 24X7 Protection From Hard & Impure Water",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing commodo molestie etinterdum cum dolor. Lorem ipsum sit lorem massa sed et dolor fusce tincidunt tempus et",
      image: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
      imagePosition: "left"
    }
  ];
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2
    });

    // Observe all benefit containers
    document.querySelectorAll('.benefit-container').forEach(container => {
      observer.observe(container);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="benefits-section1">
      <div className="header-section1">
        <h1>Benefits</h1>
      </div>

      {benefitsData.map((benefit, index) => (
        <div 
          key={index} 
          className={`benefit-container ${benefit.imagePosition === "right" ? 'image-right' : 'image-left'}`}
        >
          <div className="benefit-content">
            <h2>{benefit.title}</h2>
            <p>{benefit.description}</p>
            <button className="shop-now">Shop Now</button>
          </div>
          <div className="benefit-image">
            <img src={benefit.image} alt={benefit.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Benefits;