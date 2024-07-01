import Wrapper from '../assets/Wrappers/LandingPage.js';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Wrapper>
      <div className='container page'>
        <div className='info'>
          <h1>
            Library <span>Management</span> System
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login 
          </Link>
        </div>
        <img src={main} alt='background Image' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default LandingPage;