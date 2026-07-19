import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="skills" className="text-white">
            Habilidades e Poderes
          </Link>
        </li>
        <li>
          <Link to="equipment" className="text-white">
            Equipamento
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
