// Home.jsx
import { React, useState } from 'react';
import './Home.css';
import logo from '../../images/logo.png'

const Home = () => {
  const logos = [logo, logo, logo, logo, logo];

  const filterTypes = [
    {
      name: 'Sediment',
      image: '/sediment.jpg',
      description: 'Removes dirt, sand, and suspended particles',
      efficiency: '99.9%',
      lifespan: '6-12 months',
      benefits: 'Prevents system clogging, improves water clarity'
    },
    {
      name: 'Rust',
      image: '/rust.jpg',
      description: 'Eliminates iron and rust particles',
      efficiency: '98%',
      lifespan: '12 months',
      benefits: 'Prevents staining, improves taste'
    },
    {
      name: 'Chlorine',
      image: '/chlorine.jpg',
      description: 'Removes chlorine and chloramines',
      efficiency: '99%',
      lifespan: '6 months',
      benefits: 'Better taste and odor, reduces irritation'
    },
    {
      name: 'Heavy Metal',
      image: '/heavy-metal.jpg',
      description: 'Filters lead, mercury, and copper',
      efficiency: '99.9%',
      lifespan: '12 months',
      benefits: 'Ensures water safety, protects health'
    },
    {
      name: 'Arsenic',
      image: '/arsenic.jpg',
      description: 'Removes arsenic contamination',
      efficiency: '99.9%',
      lifespan: '12 months',
      benefits: 'Critical for water safety in affected areas'
    }
  ];
  const steps = [
    {
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    }
  ];



  const features = [
    {
      title: "5+",
      subtitle: "years of expertise",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      title: "70K+",
      subtitle: "Trusted by Customers",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      title: "12 Months",
      subtitle: "Products Warranty",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ram",
      location: "Nizamabad",
      date: "May 9,2025",
      image: "/api/placeholder/400/300",
      content: "Lorem ipsum dolor sit amet consectetur. Tincidunt commodo pellentesque pharetra nunc tortor purus neque mi. Quis massa volutpat eu neque mauris est. Viverra senectus erat tristique fames et"
    },
    {
      id: 2,
      name: "Sita",
      location: "Nizamabad",
      date: "May 9,2025",
      image: "/api/placeholder/400/300",
      content: "Lorem ipsum dolor sit amet consectetur. Tincidunt commodo pellentesque pharetra nunc tortor purus neque mi. Quis massa volutpat eu neque mauris est. Viverra senectus erat tristique fames et"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Email submitted:', email);
    setEmail('');
  };


  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>Lorem Ipsum is simply dummy text of the printing.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <a href="#" className="cta-button">
              Lorem ipsum
            </a>
          </div>
          <div className="product-image">
            <img
              src="/product.jpg"
              alt="Water filtration products"
            />
          </div>
        </div>
        <div className="stats-bar">
          <p className="stats-text">Eliminates 99% of water irritants</p>
        </div>
      </section>

      {/* Filter Types Section */}
      <section className="filter-types-section">
        <div className="filter-grid">
          {filterTypes.map((filter, index) => (
            <div className="filter-item" key={index}>
              <div className="filter-image">
                <img src={filter.image} alt={filter.name} />
                <div className="filter-overlay">
                  <div className="filter-details">
                    <p className="filter-description">{filter.description}</p>
                    <ul className="filter-stats">
                      <li>Efficiency: {filter.efficiency}</li>
                      <li>Lifespan: {filter.lifespan}</li>
                      <li>Benefits: {filter.benefits}</li>
                    </ul>
                  </div>
                </div>
                <h3 className="filter-title">{filter.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">
          <span>ELive a </span>
          <span className="highlight">Better Life</span>
          <span> with Hard Water Filters from Dscalez</span>
        </h2>
        <div className="benefits-container">
          {/* Left Cards */}
          <div className="benefits-side">
            <div className="benefit-card">
              <p>Removes 99% of Impurities</p>
            </div>
            <div className="benefit-card">
              <p>Removes 99% of Impurities</p>
            </div>
          </div>

          {/* Middle Card */}
          <div className="benefits-middle">
            <div className="benefit-card">
              <p>Get Smooth Hair & Soft Skin</p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="benefits-side">
            <div className="benefit-card">
              <p>Get Smooth Hair & Soft Skin</p>
            </div>
            <div className="benefit-card">
              <p>Get Smooth Hair & Soft Skin</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">
          How It <span className="text-blue">Works</span> ?
        </h2>
        <p className="section-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          {steps.map((step, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-section">
        <h2 className="feature-section-title">We're Number #1 For A Reason</h2>
        <div className="feature-cards">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-card-title">{feature.title}</h3>
              <h4 className="feature-card-subtitle">{feature.subtitle}</h4>
              <p className="feature-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="brands-section">
        <h2>Our Brands</h2>
        <div className="marquee">
          <div className="marquee-content">
            {logos.map((logo, index) => (
              <div className="brand-logo" key={index}>
                <img src={logo} alt={`Brand ${index + 1}`} />
              </div>
            ))}
            {/* Duplicate logos for smooth scrolling */}
            {logos.map((logo, index) => (
              <div className="brand-logo" key={`duplicate-${index}`}>
                <img src={logo} alt={`Brand Duplicate ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="testimonials-section">
        <h2 className="testimonials-title">Read what our Customers have to say</h2>

        <div className="testimonials-container">
          <div className="testimonial-content">
            <img
              src={testimonials[currentSlide].image}
              alt="Water purification equipment"
              className="testimonial-image"
            />

            <div className="testimonial-text">
              <div className="quote-mark">“</div>
              <h3 className="testimonial-name">{testimonials[currentSlide].name}</h3>
              <p className="testimonial-description">
                {testimonials[currentSlide].content}
              </p>
              <div className="testimonial-meta">
                <div className="testimonial-date">
                  <span>📅</span>
                  {testimonials[currentSlide].date}
                </div>
                <div className="testimonial-location">
                  <span>📍</span>
                  {testimonials[currentSlide].location}
                </div>
              </div>
            </div>
          </div>

          <div className="navigation-buttons">
            <button
              onClick={prevSlide}
              className="nav-button"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="nav-button"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <div className="newsletter-container">
        <h2 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="newsletter-subtitle">
          Get the latest updates on new products and upcoming sales
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;