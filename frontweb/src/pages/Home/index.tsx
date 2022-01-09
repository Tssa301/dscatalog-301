import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import { hasAnyRoles } from 'util/requests';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container"> 
    <h1>Result = {hasAnyRoles(['ROLE_ADMIN']) ? 'Yes' : 'No'}</h1>     
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Discover the best product catalog</h1>
            <p>
              We will help you find the best products available on the market.
            </p>
          </div>
          <div>
            <Link to="products">
              <ButtonIcon text="START YOUR SEARCH NOW"/>
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
