import React, {useEffect, useState} from 'react'
import '../Componant Style/SlideHome.css'
import pic1 from '../assets/pic1.svg'
import pic2 from '../assets/pic2.svg'
import pic3 from '../assets/pic3.svg'
import pic4 from '../assets/pic4.svg'
import pic5 from '../assets/pic5.svg'
 

const images = [
  pic1,pic2,pic3,pic4,pic5
]

export default function SlideHome() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds
  
        return () => {
            clearInterval(interval);
        };
    }, []);

  return (
    <div className="image-gallery">
    <div className="image-container">
        <img src={images[currentImageIndex]} alt="" />
    </div>
    <div className="navigation-indicators">
        {images.map((_, index) => (
            <div
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            ></div>
        ))}
    </div>
</div>
  )
}
