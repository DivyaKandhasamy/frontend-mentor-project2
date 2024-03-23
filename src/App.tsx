import './App.css';
import img1 from './assets/images/illustration-article.svg'
import img2 from './assets/images/image-avatar.webp';

function App() {
  return (
   <div className="card-container">
        <div className="card">
          <div className="img-div">
              <img src={img1} className='img1'/>
          </div>
          <button>Learning</button>
          <p className='text-1'>Published 21 Dec 2023</p>
          <p className='text-2'>HTML & CSS foundations</p>
          <p className='text-3'>These langunages are the backbone of every websites, defining structure, content, and presentation.</p>
          <div className='footer'>
            <div>
              <img src={img2} className='img2'/>
            </div>
             <div className='text-4'>Greg Hooper</div>
          </div>
        </div>
   </div>
  );
}

export default App;
