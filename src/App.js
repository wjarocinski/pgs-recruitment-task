import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ContentContainer from './components/ContentContainer/ContentContaner';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';

import API from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToDisplay: [
        {
            img: img1,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            img: img2,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            img: img3,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        }
      ],
      skiCamps: null,
      currentView: 'about'
    }
  }
  
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async() => {
    const matchCamera = (cam, camName) => cam.name === camName

    const choosenCamera = cam => matchCamera(cam, 'Bielmonte') || matchCamera(cam, 'Passo dello Stelvio')
  
    const response = await API.get();

    const filteredResponse = Object.values(response.data)
    .filter(cam => choosenCamera(cam));
    this.setState({ skiCamps: filteredResponse })
  };


  render() {
    return (
      <>
        <HeaderComponent currentView={this.state.currentView} isActive={this.state.currentView} onMenuElementClick={ view => this.setState({ currentView: view })}/>
        <ContentContainer currentView={this.state.currentView} skiCamps={this.state.skiCamps} itemsToDisplay={this.state.itemsToDisplay}/>
        <FooterComponent/>
      </>
    );
  }
}

export default App;
