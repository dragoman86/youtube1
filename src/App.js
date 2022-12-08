import './App.css';
import {Container, Row, Col, Badge} from 'react-bootstrap';
import Navigation from './components/Navigation';
import Video1 from './components/Video';
import Video2 from './components/Video2';
import Commentary from './components/Commentary';
import BadgeHaut from './components/BadgeHaut';

function App() {
  return (
    <div className="App">
      <div className="nav1">
        <header style={{margin:"2rem", width:"80%"}}><Navigation /></header>
      </div>
      <body>
      <Container>
          <Row>
            <Col>
              <div className='Video1' >
                <Video1 />
                  <div className='BlockTitle' style={{textAlign:"start"}}>
                    <h4>Titre du video</h4>
                    <p>Description</p>
                  </div>
                <Commentary nameC='3azzou' dateC='il y a 2 ans'>I have gone through many paid courses for React... and searched many platforms.... but this tutorial was unique... no words to describe you... fantastic and very clear and neat explanation for absolute beginners.. take a bow...🙏❤</Commentary>
                <Commentary nameC='Bandous' dateC='il y a 1 ans'>This teacher takes teaching to a new level. Hands down the best React series I've come across.</Commentary>
                <Commentary nameC='Kagourou' dateC='il y a 2 ans'>I went through like so many React tutorials and this is where I was finally able to grasp and understand everything so well.  Thank you so much for  the  efforts you have put in to come out with something so extraordinary and easy to understand!</Commentary>
                <Commentary nameC='Samira' dateC='il y a 2 ans'>I don’t normally comment on YouTube videos but this course is so perfect and beginner friendly.
I’ve worked through over 10 videos now and I understand every single thing he’s talking about.</Commentary>
              </div>
            </Col>
            <Col>
              <div className='Video2'>
                <div className='Badges' style={{marginBottom:"1rem"}}>
                    <BadgeHaut nameB='Tout' nbreB='35'></BadgeHaut>
                    <BadgeHaut nameB='React' nbreB='8'></BadgeHaut>
                    <BadgeHaut nameB='Source' nbreB='9'></BadgeHaut>
                </div>
                <Video2 Src="https://www.youtube.com/watch?v=lT6epp9BdvQ"/>
                <Video2 />
                <Video2 />
                <Video2 />
                <Video2 />
                <Video2 />
                <Video2 />
                <Video2 />
              </div>
            </Col>
          </Row>
      </Container>
      </body>
    </div>
  );
}

export default App;
