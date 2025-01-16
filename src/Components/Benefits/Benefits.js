import React, { useEffect } from 'react';
import './Benefits.css';
import b1 from '../../images/b1.png'
import b2 from '../../images/b2.png'
import b3 from '../../images/b3.png'
import b4 from '../../images/b4.png'
import b5 from '../../images/b5.png'
import b6 from '../../images/b6.png'
import b7 from '../../images/b7.png'



const Benefits = () => {
  const benefitsData = [
    {
      title: "Hair That Shines, Every Time",
      description: "Hard water leaves your hair dull, dry, and lifeless. Switch to soft water to prevent frizz, reduce breakage, and keep your locks smooth, shiny, and manageable after every wash.",
      image: b1,
      imagePosition: "right"
    },
    {
      title: "Skin So Soft, You’ll Feel the Difference",
      description: "Hard water can dry out your skin and cause irritation. Soft water helps lock in moisture, leaving your skin feeling softer, smoother, and refreshed after every shower.",
      image: b2,
      imagePosition: "left"
    },
    {
      title: "Clothes That Stay Bright, Wash After Wash",
      description: "Say goodbye to faded, rough clothes! Soft water keeps your fabrics vibrant, soft, and long-lasting by preventing mineral deposits from hard water.",
      image: b3,
      imagePosition: "right"
    },
    {
      title: "Appliances That Last Longer",
      description: "Protect your washing machine, dishwasher, and water heater from scale buildup. Soft water helps your appliances work efficiently and last longer, saving you money on repairs.",
      image: b4,
      imagePosition: "left"
    },
    {
      title: "Say Goodbye to White Stains",
      description: "No more white marks on taps, tubs, and sinks! Our system reduces hard water residue, keeping your bathroom clean and shining.",
      image: b5,
      imagePosition: "right"
    },
    {
      title: "Fresh Water, No More Smell",
      description: "Tired of water with a bad smell or colour? This is because heavy water often carries minerals and impurities. Our solution removes impurities, delivering fresh, clear, and odor-free water for your home.",
      image: b6,
      imagePosition: "left"
    },
    {
      title: "Keep Your Pipes Healthy",
      description: "Hard water buildup can damage pipes and reduce water flow also cause blockages. Our system prevents scaling and bacteria, extending pipe lifespan and maintaining steady pressure.",
      image: b7,
      imagePosition: "right"
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