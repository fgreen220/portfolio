import React, { Component, useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { IconButton, Button, Modal, Divider, Tooltip } from '@material-ui/core';
import { Home, Close, Mail } from '@material-ui/icons';
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
      <div id='app-column1'>
        <div id='nav-bar'>
          <IconButton className='nav-icon'>
            <Home />
          </IconButton>
          {/* <Tooltip title='Contact'> */}
            <IconButton id='nav-contact-icon' className='nav-icon' onMouseEnter={() => setContactMouseOver(() => true)}
              onMouseLeave={() => setContactMouseOver(() => false)}
            >
              {contactMouseOver ? <p>Contact</p> : <Mail />}
            </IconButton>
          {/* </Tooltip> */}
        </div>
        <div id='column1-title'>
          <h1>FRANCE GREEN</h1>
          <h3>Full stack engineer</h3>
        </div>
      </div>   
      <div id='app-column2'>
        <div id='project-tiles'>
          <Button disableRipple><img src={testImage} width='100px' height='100px' 
            onClick={() => setYoutubeCloneModalOpen(() => true)}
          />
          </Button>
          <Modal className='project-modal' open={youtubeCloneModalOpen} onClose={() => setYoutubeCloneModalOpen(() => false)}>
            <div id='youtube-modal-wrapper' onClick={event => {
              event.persist();
              if(event.target.id === 'youtube-modal-wrapper'){
                setYoutubeCloneModalOpen(() => false);
              }
            }}>
              <div className='clone-modal'>
                <Button disableRipple><img src={testImage} width='100px' height='100px'/></Button>
                <div className='modal-text-content'>
                  <IconButton disableFocusRipple disableRipple className='close-modal' onClick={() =>
                    setYoutubeCloneModalOpen(() => false)
                  }>
                      <Close />
                  </IconButton>
                  <div className='centered-modal-text'>
                    <ul>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>React-Router</li>
                      <li>Sass</li>
                      <li>Node</li>
                      <li>Express</li>
                      <li>Youtube Api</li>
                    </ul>
                    <Divider />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <Button disableRipple><img src={testImage2} width='100px' height='100px' 
            onClick={() => setIosWeatherCloneModalOpen(() => true)}
          />
          </Button>
          <Modal className='project-modal' open={iosWeatherCloneModalOpen} onClose={() => setIosWeatherCloneModalOpen(() => false)}>
            <div id='weather-modal-wrapper' onClick={event => {
              event.persist();
              if(event.target.id === 'weather-modal-wrapper'){
                setIosWeatherCloneModalOpen(() => false);
              }
            }}>
              <div className='clone-modal'>
                <Button disableRipple><img src={testImage2} width='100px' height='100px'/></Button>
                <div className='modal-text-content'>
                  <IconButton disableFocusRipple disableRipple className='close-modal' onClick={() =>
                    setIosWeatherCloneModalOpen(() => false)
                  }>
                      <Close />
                  </IconButton>
                  <div className='centered-modal-text'>
                    <ul>
                      <li>React</li>
                      <li>React-Router</li>
                      <li>Css3</li>
                      <li>Node</li>
                      <li>Express</li>
                      <li>Dark Sky Api</li>
                      <li>Open Weather Maps Api</li>
                    </ul>
                    <Divider />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>   
    </div>
  );
}

export default App;

const wrapper = document.getElementById('appContainer');
wrapper ? ReactDOM.render(<App />, wrapper) : false;