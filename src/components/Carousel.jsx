// import { useEffect, useState } from "react"

// export const Carousel = ({ images }) => {
//   const [currImage, setCurrImage] = useState(images[0])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrImage(images)
//     }, 2000)
//   }, [])
  
//   return (
//     <div>
//       <img className="carousel-image" src={currImage} alt="" />
//     </div>
//   )
// }