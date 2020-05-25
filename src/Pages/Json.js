import React, { useState } from 'react';
import '../App.css';

import Fixer from "../Components/Fixer"

class Json extends React.Component {
  
  state = {
    loading: true,
    match: null,
    steam: null,
    playerStatistics: null,
    switch: false
  }

  async componentDidMount() {
    const url = "https://stats.iosoccer-sa.bid/api/everything";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({playerStatistics:data[0]. teams[1]. playerStatistics[0], loading:false}); 
    this.setState({match:data[0]});
    console.log(data[0]. teams[1]. playerStatistics[0]);
  }

  render() {
    
    if (this.state.loading) {
      return <div style={{textAlign: 'center', fontSize: '30px'}}>
        <img src={require(`../images/iossa.gif`)} style={{position: 'relative', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px'}}></img> 
        Cargando base de datos
        </div>
    }
    
    if (!this.state.loading) { 

      return <div>
          <div className="espacio"> 
            <Fixer />
          </div>
        </div>
      }  
    }
    
}

export default Json;