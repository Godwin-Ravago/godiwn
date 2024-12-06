import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExampleCarouselImage({ text }) {
  return (
    <div
      style={{
        height: '400px',
        backgroundColor: '#ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: '#333',
      }}
    >
      {text}
    </div>
  );
}

function Hobbies() {
  return (
    <>
      <h1 className="text-center my-4">Hobbies</h1>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://i.pinimg.com/736x/f7/c6/1f/f7c61f33166f6ecafee52895b5192cad.jpg" // Replace with actual image URL
            alt="Playing Basketball"
            className="d-block w-100"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Playing Basketball</h3>
            <p>
              Basketball is my first hobby. I enjoy the excitement of the game,
              whether it's shooting hoops, improving my skills, or playing with
              friends. The fast-paced nature and teamwork involved make it both
              challenging and rewarding. It’s not just a sport for me; it’s a
              way to stay active, build connections, and have fun.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.pinimg.com/736x/8b/04/4f/8b044fa59a772db731dbc884dd1e1824.jpg" // Replace with actual image URL
            alt="Biking"
            className="d-block w-100"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Biking</h3>
            <p>
              Biking is my second hobby, a refreshing escape that combines
              fitness and adventure. I enjoy exploring new trails, feeling the
              wind against my face, and pushing my limits. It’s a wonderful way
              to connect with nature, relieve stress, and maintain an active
              lifestyle while appreciating the beauty of the outdoors.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.pinimg.com/736x/f5/98/80/f59880f6a65e9436928c73dcd1227540.jpg" // Replace with actual image URL
            alt="Playing Mobile Legends"
            className="d-block w-100"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Playing Mobile Legends: Bang Bang</h3>
            <p>
              My third hobby is playing Mobile Legends: Bang Bang, a multiplayer
              online battle arena (MOBA) game. It involves strategic teamwork,
              skill mastery, and real-time competitive gameplay. Enjoying it
              reflects a keen interest in e-sports and gaming culture, offering
              excitement, challenges, and opportunities to connect with friends
              and other players worldwide.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://i.pinimg.com/736x/83/31/34/833134e7ae3b7194f72a0fd01e3080df.jpg" // Replace with actual image URL
            alt="Playing Billiards"
            className="d-block w-100"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Billiards</h3>
            <p>
            Billiards is a great hobby for many reasons, combining mental sharpness, relaxation, and social engagement. As a precision-based game, it sharpens your focus, strategic thinking, and hand-eye coordination. Each shot requires concentration and planning, making it an excellent way to exercise the mind while having fun.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Hobbies;
