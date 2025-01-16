import React, { useState } from 'react';
import './ProductDetail.css';
import main from '../../images/main.png';
import daigram from '../../images/diagram.png';
import pd from '../../images/pd.png'
import baby from '../../images/baby_taking_a_bath.png.png'

const ProductDetail = () => {
    const [selectedCapacity, setSelectedCapacity] = useState('1350');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('details');

    const images = [
        main,
        daigram,
        '/product-detail.jpg',
        '/product-specs.jpg'
    ];

    const capacityOptions = ['1350', '1450', '1550', '1650'];

    const features = [
        {
          id: "01",
          title: "Home Improvement",
          description:
            "Enjoy cleaner dishes, brighter laundry, and reduced buildup on shower heads, faucets and shower doors.",
        },
        {
          id: "02",
          title: "Decreased Repair Costs",
          description:
            "Spend less on repairing and replacing water-using appliances, including dishwashers and washing machines.",
        },
        {
          id: "03",
          title: "Water Conservation",
          description:
            "The salt-free water system limits the impact of hard water minerals rather than removing them, which results in zero-waste water treatment.",
        },
        {
          id: "04",
          title: "Time Efficiency",
          description:
            "With longer-lasting appliances and less scale buildup, save time on maintenance and cleaning.",
        },
      ];

    return (
        <>
            <div className="container-details">
                <div className="image-section">
                    <img
                        src={images[currentImageIndex]}
                        alt="Dscalez Salt-Free Conditioner"
                        className="main-image"
                    />
                    <div className="gallery-container">
                        <div className="thumbnail-container">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Product view ${index + 1}`}
                                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                        <div className="navigation-buttons-details">
                            <button
                                className="nav-button-details"
                                onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)}
                            >
                                ←
                            </button>
                            <button
                                className="nav-button-details"
                                onClick={() => setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)}
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="product-info">
                    <h1 className="product-name">Dscalez Salt-Free Conditioner</h1>
                    <div className="product-price">₹89,000</div>
                    <p className="product-description">
                        Reduce hard water problems and tackle limescale damage throughout your home with a salt-free water conditioning system. Effortlessly condition your water without the need for salt or electricity, which makes this environmentally-friendly system ideal for areas with brine restrictions.
                    </p>

                    <div className="capacity-section">
                        <span className="capacity-label">Maximum Grain Capacity : {selectedCapacity}</span>
                        <div className="capacity-options">
                            {capacityOptions.map((capacity) => (
                                <button
                                    key={capacity}
                                    className={`capacity-button ${selectedCapacity === capacity ? 'selected' : ''}`}
                                    onClick={() => setSelectedCapacity(capacity)}
                                >
                                    {capacity}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="schedule-button">
                        Schedule Free Water Consultation
                        <span className="arrow-icon">→</span>
                    </button>
                </div>
            </div>

            <div className="product-details-section">
                <div className="tabs-container">
                    <ul className="tabs-list">
                        <li
                            className={`tab-item ${activeTab === 'details' ? 'active' : ''}`}
                            onClick={() => setActiveTab('details')}
                        >
                            Product Details
                        </li>
                        <li
                            className={`tab-item ${activeTab === 'specs' ? 'active' : ''}`}
                            onClick={() => setActiveTab('specs')}
                        >
                            Specifications
                        </li>
                        <li
                            className={`tab-item ${activeTab === 'installation' ? 'active' : ''}`}
                            onClick={() => setActiveTab('installation')}
                        >
                            Installation & Maintenance
                        </li>
                    </ul>
                </div>

                {activeTab === 'details' && (
                    <div className="tab-content">
                        <h2 className="section-title">The Saltless Solution for Better Water</h2>
                        <div className="product-info-grid">
                            <div className="features-section">
                                <div className="feature-row-details">
                                    <div className="feature-title">Selective Filtering</div>
                                    <div className="feature-description">
                                        Minerals remain in your water, but the system reduces the damage their buildup can cause.
                                    </div>
                                </div>
                                <div className="feature-row-details">
                                    <div className="feature-title">Flexible Configuration</div>
                                    <div className="feature-description">
                                        With a variety of sizes available, the saltless water system can fit in your laundry room, basement, garage or outside.
                                    </div>
                                </div>
                                <div className="feature-row-details">
                                    <div className="feature-title">Simple Maintenance</div>
                                    <div className="feature-description">
                                        Since the system doesn't use electricity or salt, it's easy to maintain and doesn't require salt purchases.
                                    </div>
                                </div>
                                <div className="feature-row-details">
                                    <div className="feature-title">Specialized Conditioning</div>
                                    <div className="feature-description">
                                        The salt-free water softener alternative is a great way to condition water and reduce scaling in homes that can't use salt.
                                    </div>
                                </div>
                            </div>
                            <div className="image-section">
                                <img src={pd} alt="Product" className="product-image-details" />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'specs' && (
                    <div className="tab-content">
                        <h2 className="section-title">Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="specs-section">
                                <div className="feature-row-details">
                                    <div className="feature-title">Dimensions</div>
                                    <div className="feature-description">
                                        Height: 54" (137 cm)<br />
                                        Width: 10" (25 cm)<br />
                                        Depth: 10" (25 cm)
                                    </div>
                                </div>
                                <div className="feature-row-details">
                                    <div className="feature-title">Flow Rate</div>
                                    <div className="feature-description">
                                        Maximum: 12 GPM (gallons per minute)<br />
                                        Recommended: 8-10 GPM for optimal performance
                                    </div>
                                </div>
                                <div className="feature-row-details">
                                    <div className="feature-title">Operating Parameters</div>
                                    <div className="feature-description">
                                        Temperature Range: 36°F - 120°F (2°C - 49°C)<br />
                                        Pressure Range: 25-80 psi<br />
                                        pH Range: 6.5-8.5
                                    </div>
                                </div>
                                <div className="feature-row-details">
                                    <div className="feature-title">Connection Size</div>
                                    <div className="feature-description">
                                        Inlet/Outlet: 1" NPT<br />
                                        Bypass Valve: Included<br />
                                        Housing Material: High-grade polymer
                                    </div>
                                </div>
                                <div className="feature-row-details">
                                    <div className="feature-title">Media Specifications</div>
                                    <div className="feature-description">
                                        Media Type: Template Assisted Crystallization (TAC)<br />
                                        Media Life: 5-7 years<br />
                                        Capacity: Variable based on water usage and hardness
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'installation' && (
                    <div className="tab-content">
                        <h2 className="section-title">Installation & Maintenance Guide</h2>
                        <div className="installation-content">
                            <div className="feature-row-details">
                                <div className="feature-title">Installation Requirements</div>
                                <div className="feature-description">
                                    <ul className="requirements-list">
                                        <li>Level surface capable of supporting system when filled with water</li>
                                        <li>Access to main water line</li>
                                        <li>Adequate space for maintenance and service</li>
                                        <li>Protection from freezing temperatures</li>
                                        <li>Nearby drain for system flushing (if needed)</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="feature-row-details">
                                <div className="feature-title">Maintenance Schedule</div>
                                <div className="feature-description">
                                    <div className="maintenance-schedule">
                                        <p><strong>Monthly:</strong> Visual inspection for leaks and proper operation</p>
                                        <p><strong>Quarterly:</strong> Check water pressure and flow rate</p>
                                        <p><strong>Annually:</strong> Professional system inspection and cleaning</p>
                                        <p><strong>Every 5-7 Years:</strong> Media replacement (depending on water quality and usage)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="feature-row-details">
                                <div className="feature-title">Professional Support</div>
                                <div className="feature-description">
                                    <p>Our network of certified installers provides:</p>
                                    <ul className="support-list">
                                        <li>Professional installation</li>
                                        <li>Regular maintenance services</li>
                                        <li>24/7 emergency support</li>
                                        <li>System optimization</li>
                                        <li>Water quality testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="details-container">
    
            <div className="details-container">
      {/* Consultation Section */}
      <div className="consultation-section">
        <h1>Ready to Take the Next Step?</h1>
        <p>
          Schedule a free, in-home consultation and water test to get one step
          closer to the better water your family deserves. With options to buy,
          finance or rent, your local Culligan water expert will make
          recommendations based on your home, water usage, test results, and any
          other concerns.
        </p>
        <button className="consultation-btn">Schedule Free Water Consultation</button>
      </div>

      {/* Image Section */}
      <div className="bottom-image-section">
        <div className="text-content">
          <h2>More Reasons to Choose a Culligan Saltless Water System</h2>
        </div>
        <div className="image-content">
          <img
            src={baby}
            alt="Mother and child enjoying bath"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section-details">
        {features.map((feature) => (
          <div key={feature.id} className="feature">
            <h3>{feature.id}</h3>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>


        </>
    );
};

export default ProductDetail;