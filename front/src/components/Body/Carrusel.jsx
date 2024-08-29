import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';

function ControlledCarousel({ movies }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!movies) {
    console.log("faltan las movies")
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {movies.map((movie) => (
          <Carousel.Item key={movie._id} className="flex flex-col items-center">
            <img
              className="d-block w-50 ml-auto mr-auto mt-4 mb-2"
              src={movie.poster}
              alt={movie.title}
              style={{ maxHeight: '700px', objectFit: 'cover', maxWidth: '700px' }}

            />
            <Carousel.Caption
              style={{
                backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                padding: '16px',
                transition: 'background-color 0.3s ease',
                width: '50%',
                margin: '0 auto',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h3 style={{ color: isHovered ? 'white' : 'transparent' }}>{movie.title}</h3>
              <p style={{ color: isHovered ? 'white' : 'transparent'  }}>{movie.director}</p>
              <p style={{ color: isHovered ? 'white' : 'transparent'  }}>{movie.year}</p>
              <p style={{ color: isHovered ? 'white' : 'transparent'  }}>
                {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
              </p>
              <p style={{ color: isHovered ? 'white' : 'transparent' }}>{movie.duration} mins</p>
              <p style={{ color: isHovered ? 'white' : 'transparent' }}>{movie.rate}/10</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;