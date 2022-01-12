import { useEffect, useState } from "react"

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    images.forEach(image => new Image().src = image)
    const timeout = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [currentIndex, images, isPlaying])


  const Slide = ({ image, isCurrent }) => {
    return isCurrent ? <img preload="true" className={!isPlaying ? 'carousel-image paused' : 'carousel-image'} src={image} alt="spacex sat" onClick={() => setIsPlaying(prevIsPlaying => !prevIsPlaying)} /> : null
  }
  
  return (
    <div className="carousel-container">
      <div className="carousel_images-container">
        {images.map((image, idx) => (
          <Slide key={image} image={image} isCurrent={idx === currentIndex} />
        ))}
        { !isPlaying && <div className="carousel_paused-indicator" onClick={() => setIsPlaying(prevIsPlaying => !prevIsPlaying)}>▶️</div> }
      </div>
    </div>
  )
}