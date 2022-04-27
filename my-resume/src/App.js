import './App.css';
import LinkedinIcon from './icons/linkedin.svg';
import githubIcon from './icons/github.svg'
import twitterIcon from './icons/twitter.svg'
import profilePic from './icons/profilepic.jpeg'
import phoneIcon from './icons/phone.svg'

function App() {
  return (
    <div className="App">

      <div className='links'>
        <img src={LinkedinIcon} alt='linkedin Icon' className='icon' />
        <img src={githubIcon} alt='github Icon' className='icon' />
        <img src={twitterIcon} alt='twitter Icon' className='icon' />





      </div>
      <div>
        <img src={profilePic} alt='profile pic' className='profile-pic' />

        <h1 className='name'>  Arun Kumar Kadari</h1>
        <h4 className='title'>  Fullstack Developer</h4>
        <h4 className='email'>  arunkumar413@gmail.com</h4>
        <h4 className='phone'>  +919966288507</h4>



        <hr />
        <div className='skills'>
          <div>
            <h3> Nodejs </h3>
          </div>
          <div>
            <h3> HTML </h3>
          </div>
          <div>
            <h3> JavaScript </h3>
          </div>
          <div>
            <h3> CSS </h3>
          </div>
          <div>
            <h3> ExpressJs </h3>
          </div>
          <div>
            <h3> Postgres </h3>
          </div>
          <div>
            <h3> MySQL </h3>
          </div>
          <div>
            <h3> Neo4j</h3>
          </div>
          <div>
            <h3> MongoDB </h3>
          </div>
          <div>
            <h3> Rest API </h3>
          </div>
          <div>
            <h3> OpenAPI </h3>
          </div>
          <div>
            <h3> React </h3>
          </div>
          <div>
            <h3> Rust </h3>
          </div>

          <div>
            <h3> Go </h3>
          </div>

        </div>


      </div>





      <div className='third-column experience'>
        <h2> Work history </h2>

      </div>
    </div >
  );
}

export default App;
