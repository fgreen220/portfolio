import React, { Component, useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { IconButton, Button, Modal, Divider, AppBar, Toolbar } from '@material-ui/core';
import { Close, Mail, Assignment, Launch, GitHub } from '@material-ui/icons';
import testImage from '../../assets/test-image.png';
import testImage2 from '../../assets/ios-weather.jpg';

const App = () => {
  
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(() => event.target.value)
  } 

  const [youtubeCloneModalOpen, setYoutubeCloneModalOpen] = useState(false);
  const [iosWeatherCloneModalOpen, setIosWeatherCloneModalOpen] = useState(false);
  const [contactMouseOver, setContactMouseOver] = useState(false);

  return(
    <div id='app-wrapper'>
      <div id='nav-bar'>
        <Button disableFocusRipple={true} disableRipple={true}>Contact</Button>
        <Button disableFocusRipple={true} disableRipple={true}>Resume</Button>
      </div>
      <div id='app-column1'>
        <div id='column1-title'>
          <h1>FRANCE GREEN</h1>
          <h3>Full stack engineer</h3>
        </div>
      </div>   
      <div id='app-column2'>
        <div id='project-tiles'>
          <div className='project-image-wrapper'>
            <img src={testImage} width='100px' height='100px' 
              onClick={() => setYoutubeCloneModalOpen(() => true)}
            />
            <div id='reacttube-text'>
              <ul className='technologies-used-list'>
                <li>React</li>
                <li>TypeScript</li>
                <li>React-Router</li>
                <li>Sass</li>
                <li>Node</li>
                <li>Express</li>
                <li>YouTube Api</li>
              </ul>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <Modal className='project-modal' open={youtubeCloneModalOpen} onClose={() => setYoutubeCloneModalOpen(() => false)}>
            <div id='youtube-modal-wrapper' onClick={event => {
              event.persist();
              if(event.target.id === 'youtube-modal-wrapper'){
                setYoutubeCloneModalOpen(() => false);
              }
            }}>
              <div className='clone-modal'>
                <img src={testImage} width='100px' height='100px'/>
                <div className='modal-text-content'>
                  <div className='centered-modal-text'>
                      <p>Live Project</p>
                      <p>Source Code</p>
                    <IconButton disableFocusRipple disableRipple className='close-modal' onClick={() =>
                    setYoutubeCloneModalOpen(() => false)
                    }>
                        <Close />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <div className='project-image-wrapper' id='ios-project-image-wrapper'>
            <img src={testImage2} width='100px' height='100px' 
              onClick={() => setIosWeatherCloneModalOpen(() => true)}
            />
            <div id='weather-text'>
              <ul className='technologies-used-list'>
                <li>React</li>
                <li>React-Router</li>
                <li>CSS3</li>
                <li>Node</li>
                <li>Express</li>
                <li>Dark Sky Api</li>
                <li>OWM Api</li>
              </ul>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <Modal className='project-modal' open={iosWeatherCloneModalOpen} onClose={() => setIosWeatherCloneModalOpen(() => false)}>
            <div id='weather-modal-wrapper' onClick={event => {
              event.persist();
              if(event.target.id === 'weather-modal-wrapper'){
                setIosWeatherCloneModalOpen(() => false);
              }
            }}>
              <div className='clone-modal'>
                <img src={testImage2} width='100px' height='100px'/>
                  <div className='modal-text-content'>
                    <div className='centered-modal-text'>
                      <p>Live Project</p>
                      <p>Source Code</p>
                      <IconButton disableFocusRipple disableRipple className='close-modal' onClick={() =>
                        setIosWeatherCloneModalOpen(() => false)
                      }>
                          <Close />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
          </Modal>
        </div>
      </div>   
      <div id='app-column-3'>
         
      </div>
    </div>
  );
}

export default App;

const wrapper = document.getElementById('appContainer');
wrapper ? ReactDOM.render(<App />, wrapper) : false;