import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './imageCarousel.css';
import image1 from '../../assets/e-commerce-main-image.jpg';
import image2 from '../../assets/e-commerce-image.jpg';
import image3 from '../../assets/ecommerce-shopping-online.jpg';
import Navbar from '../navbar/navBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DropdownInput from '../dropdown';
import HamburgerMenu from '../HamburgerMenu';

const ImageCarousel = () => {

    const dropdownOptions = [
        { label: 'All Category', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        // Add more options as needed
      ];

      const dropdownOptions1 = [
        { value: 'option1', label: 'Option 1', flag: '🇺🇸' },
        { value: 'option2', label: 'Option 2', flag: '🇬🇧' },
        { value: 'option3', label: 'Option 3', flag: '🇫🇷' },
        // Add more options as needed
      ];
    
      const handleDropdownChange = (event) => {
        // Handle the dropdown value change here
        console.log(event.target.value);
      };
    

  return (
    <div className="carousel-container">
      <Carousel infiniteLoop showStatus={false} showThumbs={false}>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
      </Carousel>
      <div className="overlay-content">
        <Navbar />
        <div className='heading'>
        <h2>Eflyer</h2></div>
        <div className="dropdown-container">
        <HamburgerMenu options={dropdownOptions} />
          <DropdownInput options={dropdownOptions} onChange={handleDropdownChange} />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        {/* <div>
          <LanguageDropdown options={dropdownOptions1} onChange={handleDropdownChange} />
        </div> */}
        {/* <div className='flag-dropdown-container'>
          <DropdownInput options={dropdownOptions} onChange={handleDropdownChange} />
        </div> */}
      </div>
    </div>
  );
};

export default ImageCarousel;
