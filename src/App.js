import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="header">

      </header>
      <div className="nav">
        <h1>Documentation</h1>
        <div className="horizontal-line"></div>
          <div className="div-link">
            <a href="#rva-indoor"><span className="POST">POST</span>/rva-indoor</a>
            <a href="#rva-outdoor"><span className="POST">POST</span>/rva-outdoor</a>
          </div>
      </div>
     
      <div className="description">
        <div className="vertical-line"></div>
          <div className="content">
            <h1>Respiratory virus activity</h1>
            <span className="POST" id="rva-indoor">POST</span>/rva-indoor
            <div className="table">
                <div className="name">
                  <h1>Name</h1>
                  <hr></hr>
                  <span>Temperature<span className="required">*required</span></span>
                  <span>Humidity<span className="required">*required</span></span>
                  <span>CO2<span className="required">*required</span></span>
                  <span>PM1_0</span>
                  <span>Timestamp</span>
                  <span>lat</span>
                  <span>lon</span>
                </div>
                <div className="type">
                  <h1>Type</h1>
                  <hr></hr>
                  <span>number</span>
                  <span>number</span>
                  <span>number</span>
                  <span>number</span>
                  <span>string</span>
                  <span>number</span>
                  <span>number</span>
                </div>
                <div className="description">
                  <h1>Description</h1>
                  <hr></hr>
                  <span>Temperature value in °C</span>
                  <span>Humidity value in %(0-100)</span>
                  <span>Carbon dioxide value in ppm</span>
                  <span>Dust particles less than 1.0 μm in diameter in ppm</span>
                  <span>Date/time in any format</span>
                  <span>Latitude coordinates at geographic coordinate system</span>
                  <span>Longitude coordinates at geographic coordinate system</span>
                  <span></span>
                </div>
            </div>
            <div className="request">
                  <h1>Request</h1>
                  <p>Request URL</p>
                  <span className="link">http://api.djinnsensor.com/rva-indoor</span>
                  <p>Request example</p>
                  <div className="link" id="rva-indoor-ex">
                    &#123;
                    <br />
                    &nbsp;"request":&#91;
                    <br/>
                    &nbsp; &nbsp;&#123;"Temperature":21,"Humidity":30,"CO2":800,"PM1_0":50,"Timestamp":1231098723123,"lat":123123,"lon":123122&#125;
                    <br/>
                    &nbsp; &nbsp;&#123;"Temperature":17,"Humidity":21,"CO2":700,"PM1_0":25&#125;
                    <br/>&nbsp;&#93;
                    <br/>
                    &#125;
                  </div>
            </div>
            <div className="response">
              <p>Response example</p>
              <div className="link" id="rva-indoor-ex">
                    &#123;"response":&#91;&#123;"Timestamp":1231098723123,"lat":123123,"lon":123122,"RVA":"3.65"&#125;,&#123;"RVA":"4.53"&#125;&#93;&#125;
                  </div>
            </div>
          </div>
          {/* <div className="vertical-line"></div> */}
          <div className="content">
            <span className="POST" id="rva-outdoor">POST</span>/rva-outdoor
            <div className="table">
                <div className="name">
                  <h1>Name</h1>
                  <hr></hr>
                  <span>Temperature<span className="required">*required</span></span>
                  <span>Humidity<span className="required">*required</span></span>
                  <span>PM2_5<span className="required">*required</span></span>
                  <span>NO2</span>
                  <span>Timestamp</span>
                  <span>lat</span>
                  <span>lon</span>
                </div>
                <div className="type">
                  <h1>Type</h1>
                  <hr></hr>
                  <span>number</span>
                  <span>number</span>
                  <span>number</span>
                  <span>number</span>
                  <span>string</span>
                  <span>number</span>
                  <span>number</span>
                </div>
                <div className="description">
                  <h1>Description</h1>
                  <hr></hr>
                  <span>Temperature value in °C</span>
                  <span>Humidity value in %(0-100)</span>
                  <span>Dust particles less than 2.5 μm in diameter in ppm</span>
                  <span>Nitrogen dioxide value in µg/m3</span>
                  <span>Date/time in any format</span>
                  <span>Latitude coordinates at geographic coordinate system</span>
                  <span>Longitude coordinates at geographic coordinate system</span>
                  <span></span>
                </div>
            </div>
            <div className="request">
                  <h1>Request</h1>
                  <p>Request URL</p>
                  <span className="link">http://api.djinnsensor.com/rva-outdoor</span>
                  <p>Request example</p>
                  <div className="link" id="rva-outdoor-ex">
                    &#123;
                    <br />
                    &nbsp;"request":&#91;
                    <br/>
                    &nbsp; &nbsp;&#123;"Temperature":21,"Humidity":101,"PM2_5":800,"NO2":123&#125;
                    <br/>
                    &nbsp; &nbsp;&#123;"Temperature":100,"Humidity":21,"PM2_5":10&#125;
                    <br/>&nbsp;&#93;
                    <br/>
                    &#125;
                  </div>
            </div>
            <div className="response">
              <p>Response example</p>
              <div className="link" id="rva-indoor-ex">
                    &#123;"response":&#91;&#123;"RVA":"0.41"&#125;,&#123;"RVA":"0.01"&#125;&#93;&#125;
                  </div>
            </div>
          </div>
         

      </div>
    </div>
  );
}

export default App;
