import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import productimage from '../../images/product.png'
import machine from '../../images/Rectangle.png'
import group from '../../images/Group.png'
import howitworks from '../../images/howitwork.png'
import logo from '../../images/logo.png'
import rust from '../../images/rust.png'
import sediment from '../../images/sediment.png'
import washroom from '../../images/washroom.png'
import clothes from '../../images/clothes.png'
import clean from '../../images/clean.png'
import Ram from '../../images/Ram.png'
import p1 from '../../images/productimage1.png'
import p2 from '../../images/productimage2.png'
import p3 from '../../images/p3.png'
import p4 from '../../images/p4.png'




export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const irritants = [
    {
      name: 'Rust',
      // Use placeholder image URLs - replace with your actual image paths
      image: sediment
    },
    {
      name: 'Sediment',
      image: rust
    },
    {
      name: 'Chlorine',
      image: sediment
    },
    {
      name: 'Heavy Metal',
      image: rust
    },
    {
      name: 'Arsenic',
      image: sediment
    }
  ];

  const irritantDetails = {
    Rust: {
      description: "Causes staining and metallic taste",
      removal_rate: "99.9%",
      impact: "Rust forms when iron pipes get old and start to corrode, causing reddish stains in water and on surfaces. Our system filters out these particles to keep your water clear and stain-free."
    },
    Sediment: {
      description: "Physical particles in water",
      removal_rate: "99.8%",
      impact: "Sediment is made up of dirt, sand, and other tiny particles that can get into your water from the ground or old pipes. Our filters remove sediment, making your water clean and safe to use."
    },
    Chlorine: {
      description: "Common water treatment chemical",
      removal_rate: "99.9%",
      impact: "Chlorine is added to tap water to kill bacteria, but it can make your water taste and smell bad. Our system reduces chlorine levels, giving you fresh, better-tasting water."
    },
    "Heavy Metal": {
      description: "Including lead and mercury",
      removal_rate: "99.7%",
      impact: "Heavy metals like lead and mercury can get into your water from old pipes or pollution. Our filtration system removes these harmful metals, making your water safer for you and your family."
    },
    Arsenic: {
      description: "Naturally occurring contaminant",
      removal_rate: "99.6%",
      impact: "Arsenic is a natural chemical found in groundwater that can be harmful if consumed over time. Our filters reduce arsenic levels, ensuring your water is safe and healthy to drink."
    }
  };

  const benefits = [
    {
      image: machine,
      text: 'Enhances appliation lifespan',
      gridArea: 'top-left'
    },
    {
      image: group,
      text: 'Softens & smooths Skin',
      gridArea: 'top-center',
      featured: true
    },
    {
      image: washroom,
      text: 'Get Smooth & Soft Skin',
      gridArea: 'top-right'
    },
    {
      image: clean,
      text: 'Removes 99% of Impurities',
      gridArea: 'bottom-left'
    },
    {
      image: clothes,
      text: 'Get Smooth & Soft Skin',
      gridArea: 'bottom-right'
    }
  ];




  const steps = [
    {
      title: 'Water Intake',
      description: 'Water from your source (tap, well, etc.) is filtered and then softened, providing clean and pure drinking water.'
    },
    {
      title: 'Softening the Water',
      description: 'The system removes the minerals that make water hard (like calcium and magnesium), turning it into soft water.'
    },
    {
      title: 'For Salt-Free Systems',
      description: 'Instead of removing minerals, the system changes them into tiny crystals. These crystals don’t stick to your pipes, so you won’t get build-up.'
    },
    {
      title: 'Clean, Soft Water',
      description: 'After the process, Enjoy soft, pure water throughout your home or business, protecting your skin, appliances, and plumbing.'
    }
  ];

  const reasons = [
    {
      title: "5+",
      subtitle: "years of expertise",
      description: "With over 5 years of experience, we’ve perfected the art of delivering high-quality water solutions that customers trust and rely on. .",
    },
    {
      title: "70K+",
      subtitle: "Trusted by Customers",
      description: "Our extensive experience in the water treatment industry ensures that we provide only the best solutions, backed by years of knowledge and innovation..",
    },
    {
      title: "12 Months",
      subtitle: "Products Warranty",
      description: "We stand behind the quality of our products with a full 12-month warranty, giving you peace of mind that your investment is protected..",
    },
  ];

  const logos = [
    logo,
    logo,
    logo,

  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ram',
      image: Ram,
      content: 'Lorem ipsum dolor sit amet consectetur. Tincidunt commodo pellentesque pharetra nunc tortor purus neque mi. Quis massa volutpat eu neque mauris est. Viverra senectus erat tristique fames at',
      date: 'May 9,2025',
      location: 'Nizamabad'
    }, {
      id: 2,
      name: 'Sita',
      image: Ram,
      content: 'Lorem ipsum dolor sit amet consectetur. Tincidunt commodo pellentesque pharetra nunc tortor purus neque mi. Quis massa volutpat eu neque mauris est. Viverra senectus erat tristique fames at',
      date: 'May 9,202',
      location: 'Nizamabad'
    }, {
      id: 3,
      name: 'Laxman',
      image: Ram,
      content: 'Lorem ipsum dolor sit amet consectetur. Tincidunt commodo pellentesque pharetra nunc tortor purus neque mi. Quis massa volutpat eu neque mauris est. Viverra senectus erat tristique fames at',
      date: 'May 9,2025',
      location: 'Nizamabad'
    },
    // Add more testimonials as needed
  ];


  const products = [
    {
      id: 1,
      title: "Dscalez Smart High -1355 Efficiency Municipal",
      image: p2,
    },
    {
      id: 2,
      title: "Dscalez Smart High -1355 Efficiency Municipal",
      image: p3,
    },
    {
      id: 3,
      title: "Dscalez Smart High -1355 Efficiency Municipal",
      image: p4,
    },
    {
      id: 4,
      title: "Dscalez Smart High -1355 Efficiency Municipal",
      image: p1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };
  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  const handleProducts = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/products');
  };

  return (
    <div className='home'>
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="star-icon">✧</div>
            <h1>Your Partner in Every Perfect Drop</h1>
            <p>
              From your first call to lasting care, we’re here to bring better water into your life.
            </p>
            <button className="consultation-btn">
              Transform Your Water - Book a Free Session →
            </button>
          </div>
          <div className="hero-image">
            <img
              src={productimage}
              alt="DSCLZ Water Softener Systems"
              className="softener-img"
            />
          </div>
        </div>
      </div>

      <section className='irritants-section'>
        <h2 className="irritants-title">
          Eliminates 99% of water irritants
        </h2>
        <div className="irritants-container">
          {irritants.map((irritant, index) => (
            <div
              key={index}
              className="irritant-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={irritant.image}
                alt={irritant.name}
                className="irritant-image"
              />
              {hoveredIndex === index && (
                <div className="irritant-overlay">
                  <h3>{irritant.name}</h3>
                  <p className="impact">
                    {irritantDetails[irritant.name].impact}
                  </p>
                  <button className="Know-more-btn">Know More</button>
                </div>
              )}
              <p className="irritant-name">{irritant.name}</p>
            </div>
          ))}
        </div>
      </section>





      <section className="benefits-section-container">
        <h2 className="benefits-title">
          Experience life changing purity with<br></br>
          Dscalez clean water solutions
        </h2>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-card ${benefit.featured ? 'featured' : ''}`}
              style={{ gridArea: benefit.gridArea }}
            >
              <div className="benefit-image-container">
                <img
                  src={benefit.image}
                  alt={benefit.text}
                  className="benefit-image"
                />
                <div className="benefit-overlay">
                  <p className="benefit-text">{benefit.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>





      <section className="section">
        <h2 className="heading">How It Works ?</h2>
        <div className="container">
          <div className="timeline">
            {steps.map((step, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__connector">
                  <div className="timeline__number">{index + 1}</div>
                </div>
                <div className="timeline__content">
                  <h3 className="timeline__title">{step.title}</h3>
                  <p className="timeline__description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="illustration">
            <img
              src={howitworks}
              alt="Water System Illustration"
              className="illustration__image"
            />
          </div>
        </div>
      </section>


      <div className="water-softening-section">
        <div className='heading'>
          <h2 className="section-title">Water Softening and Filtration Solutions</h2>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h3 className="product-title">{product.title}</h3>
              <Link
                to={`/products`}
                className="product-arrow"
                onClick={handleMenuClick}
              >
                →
              </Link>
            </div>
          ))}
          <button onClick={handleProducts} className="see-more-btn">
            See More <span>→</span>
          </button>

        </div>
      </div>




      <section className="reason-section">
        <h2 className="reason-title">We're Number #1 For A Reason</h2>
        <div className="reason-cards">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <h3 className="reason-card-title">{reason.title}</h3>
              <h4 className="reason-card-subtitle">{reason.subtitle}</h4>
              <p className="reason-card-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>


      <div className="logo-section">
        <div className="logo-container">
          <h2>Our Brands</h2>
          <div className="logo-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div key={`logo-${index}`} className="logo-item">
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className="testimonial-section">
        <h2 className="testimonial-title">Read what our Customers have to say</h2>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="testimonial-image-container">
              <img
                src={testimonials[currentIndex].image}
                alt={`${testimonials[currentIndex].name}'s testimonial`}
                className="testimonial-image"
              />
            </div>

            <div className="testimonial-details">
              <div>
                <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
                <p className="testimonial-text">{testimonials[currentIndex].content}</p>
              </div>

              <div className="testimonial-meta">
                <div className="meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{testimonials[currentIndex].date}</span>
                </div>

                <div className="meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{testimonials[currentIndex].location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation-buttons">
          <button onClick={handlePrev} className="nav-button" aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={handleNext} className="nav-button" aria-label="Next testimonial">
            <svg viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>





      <div className="newsletter-section">
        <h2 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="newsletter-description">
          Get the latest updates on new products and upcoming sales
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-submit">
            Submit
          </button>
        </form>
      </div>



    </div>
  )
}
