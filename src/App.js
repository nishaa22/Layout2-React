// import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import "./index.scss";

function App() {
  return (
   <>
      <div class="page">
        <nav>
            <a href="#" class="nav__item">Layout2</a><a href="#">About</a><a href="#">Services</a><a href="#">Contact</a>
        </nav>
        <div class="content">
            <div class="content__box">
                <span>
                    Sample Heading
                </span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos culpa nobis architecto
                    voluptas consequatur ab, cumque quis deserunt repudiandae quaerat excepturi consequuntur modi saepe
                    sunt doloremque dolorum repellendus adipisci?</p>
                <button class="call">Call to action!</button>
            </div>
            
            <div class="content__latestBox">
                <hr/>
                <span>Latest Features</span>
                <div class="content__latestBox__item">
                   <Box/>
                   <Box/>
                   <Box/>
                   <Box/>
                </div>
                <hr class="foot"/>
            </div>
            
            <footer>
                <p>Copyright &copy; Your Website 2014</p>
            </footer>
        </div>
    </div>
   </>
  );
}

export default App;
