import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="nav">
        <div className='nav-header'>
          <h1>Documentation</h1>  
        </div>
          <div className="div-link">
            <a href="#rva-indoor"><span className="POST">POST</span>/rva-indoor</a>
            <a href="#rva-outdoor"><span className="POST">POST</span>/rva-outdoor</a>
            <a href="#cvs-indoor"><span className="POST">POST</span>/cvs-indoor</a>
            <a href="#allergy"><span className="POST">POST</span>/allergy</a>
            <a href="#brain"><span className="POST">POST</span>/brain</a>
            <a href="#mental"><span className="POST">POST</span>/mental</a>
            <a href="#respiratory"><span className="POST">POST</span>/respiratory</a>
            <a href="#sensorial"><span className="POST">POST</span>/sensorial</a>
            <a href="#productivity"><span className="POST">POST</span>/productivity</a>
          </div>
      </div>
     
      <div className="description">
          <div className="content">
            <h1 id="rva-indoor">Respiratory virus activity</h1>
            <span className="POST">POST</span>/rva-indoor
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
                    &nbsp; &nbsp;&#123;"Temperature":21,"Humidity":30,"CO2":800,"PM1_0":50,"Timestamp":1231098723123,"lat":123123,"lon":123122&#125;,
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
                    &#91;
                   <br />
                   &nbsp;&#123;"Timestamp": 1231098723123,"lat": 123123,"lon": 123122,"RVA":3.65&#125;,
                   <br />
                   &nbsp;&#123;"RVA":4.53&#125;
                   <br />
                   &#93;
                  </div>
            </div>
          </div>
          
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
                    &nbsp; &nbsp;&#123;"Temperature":21,"Humidity":101,"PM2_5":800,"NO2":123&#125;,
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
                    &#91;
                   <br />
                   &nbsp;&#123;"RVA":0.41&#125;,
                   <br />
                   &nbsp;&#123;"RVA":0.01&#125;
                   <br />
                   &#93;
                  </div>
            </div>
          </div>

          <div className="content">
            <h1 id="cvs-indoor">Cardiovascular risk</h1>
            <span className="POST">POST</span>/cvs-indoor
            <div className="table">
                <div className="name">
                  <h1>Name</h1>
                  <hr></hr>
                  <span>CO2<span className="required">*required</span></span>
                  <span>PM2_5 <span className="required">*required</span></span>
                  <span>PM10 <span className="required">*required</span></span>
                  <span>Noise</span>
                  <span>Timestamp</span>
                  <span>Lat</span>
                  <span>Lon</span>
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
                  <span>Carbon dioxide value in ppm</span>
                  <span>Dust particles less than 2.5 μm in diameter in ppm</span>
                  <span>Dust particles less than 10 μm in diameter in ppm</span>
                  <span>Noise value in dB</span>
                  <span>Date/time in any format</span>
                  <span>Latitude coordinates at geographic coordinate system</span>
                  <span>Longitude coordinates at geographic coordinate system</span>
                  <span></span>
                </div>
            </div>
            <div className="request">
                  <h1>Request</h1>
                  <p>Request URL</p>
                  <span className="link">http://api.djinnsensor.com/cvs-indoor</span>
                  <p>Request example</p>
                  <div className="link" id="cvs-indoor-ex">
                    &#123;
                    <br />
                    &nbsp;"request":&#91;
                    <br/>
                    &nbsp; &nbsp;&#123;"CO2":800,"PM10":50,"PM2_5":35,"Timestamp":1231098723123,"lat":123123,"lon":123122&#125;,
                    <br/>
                    &nbsp; &nbsp;&#123;"CO2":800,"PM10":50,"PM2_5":35,"Noise":70&#125;
                    <br/>&nbsp;&#93;
                    <br/>
                    &#125;
                  </div>
            </div>
            <div className="response">
              <p>Response example</p>
              <div className="link" id="rva-indoor-ex">
                   &#91;
                   <br />
                   &nbsp;&#123;"Timestamp":1231098723123,"lat":123123,"lon":123122,"CVS":1.20&#125;,
                   <br />
                   &nbsp;&#123;"CVS":2.17&#125;
                   <br />
                   &#93;
              </div>
            </div>
          </div>

          <div className="content">
            <h1 id="allergy">Allergy risk</h1>
            <span className="POST">POST</span>/allergy
            <div className="table">
                <div className="name">
                  <h1>Name</h1>
                  <hr></hr>
                  <span>PM2_5<span className="required">*required</span></span>
                  <span>PM10<span className="required">*required</span></span>
                  <span>Humidity</span>
                  <span>FM</span>
                  <span>Ozone</span>
                  <span>Timestamp</span>
                  <span>Lat</span>
                  <span>Lon</span>
                </div>
                <div className="type">
                  <h1>Type</h1>
                  <hr></hr>
                  <span>number</span>
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
                  <span>Dust particles less than 2.5 μm in diameter in ppm</span>
                  <span>Dust particles less than 10 μm in diameter in ppm</span>
                  <span>Humidity value in %(0-100)</span>
                  <span>Formaldehyde</span>
                  <span>Ozone</span>
                  <span>Date/time in any format</span>
                  <span>Latitude coordinates at geographic coordinate system</span>
                  <span>Longitude coordinates at geographic coordinate system</span>
                  <span></span>
                </div>
            </div>
            <div className="request">
                  <h1>Request</h1>
                  <p>Request URL</p>
                  <span className="link">http://api.djinnsensor.com/allergy</span>
                  <p>Request example</p>
                  <div className="link" id="allergy-ex">
                    &#123;
                    <br />
                    &nbsp;"request":&#91;
                    <br/>
                    &nbsp; &nbsp;&#123;"Humidity":30,"PM10":40,"PM2_5":15,"FM":15,"Ozone":30,"Timestamp":1231098723123,"lat":123123,"lon":123122&#125;,
                    <br/>
                    &nbsp; &nbsp;&#123;"Humidity":21,"PM10":25,"PM2_5":15&#125;
                    <br/>&nbsp;&#93;
                    <br/>
                    &#125;
                  </div>
            </div>
            <div className="response">
              <p>Response example</p>
              <div className="link" id="rva-indoor-ex">
                   &#91;
                   <br />
                   &nbsp;&#123;"Timestamp": 1231098723123,"lat": 123123,"lon": 123122,"Allergy":1.98&#125;,
                   <br />
                   &nbsp;&#123;"Allergy":0.64&#125;
                   <br />
                   &#93;
              </div>
            </div>
          </div>

          <div className="content">
            <h1 id="brain">Brain risk</h1>
            <span className="POST">POST</span>/brain
            <div className="table">
                <div className="name">
                  <h1>Name</h1>
                  <hr></hr>
                  <span>PM2_5<span className="required">*required</span></span>
                  <span>PM10<span className="required">*required</span></span>
                  <span>FM</span>
                  <span>Ozone</span>
                  <span>Timestamp</span>
                  <span>Lat</span>
                  <span>Lon</span>
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
                  <span>Dust particles less than 2.5 μm in diameter in ppm</span>
                  <span>Dust particles less than 10 μm in diameter in ppm</span>
                  <span>Formaldehyde</span>
                  <span>Ozone</span>
                  <span>Date/time in any format</span>
                  <span>Latitude coordinates at geographic coordinate system</span>
                  <span>Longitude coordinates at geographic coordinate system</span>
                  <span></span>
                </div>
            </div>
            <div className="request">
                  <h1>Request</h1>
                  <p>Request URL</p>
                  <span className="link">http://api.djinnsensor.com/brain</span>
                  <p>Request example</p>
                  <div className="link" id="brain-ex">
                    &#123;
                    <br />
                    &nbsp;"request":&#91;
                    <br/>
                    &nbsp; &nbsp;&#123;"PM10":40,"PM2_5":15,"FM":15,"Ozone":30,"Timestamp":1231098723123,"lat":123123,"lon":123122&#125;,
                    <br/>
                    &nbsp; &nbsp;&#123;"PM10":25,"PM2_5":15&#125;
                    <br/>&nbsp;&#93;
                    <br/>
                    &#125;
                  </div>
            </div>
            <div className="response">
              <p>Response example</p>
              <div className="link" id="brain-ex">
                   &#91;
                   <br />
                   &nbsp;&#123;"Timestamp":1231098723123,"lat":123123,"lon":123122,"Brain":2.47&#125;,
                   <br />
                   &nbsp;&#123;"Brain":0.29&#125;
                   <br />
                   &#93;
              </div>
            </div>
          </div>

          <div className="content">
            <h1 id="mental">Mental risk</h1>
            <span className="POST">POST</span>/mental
            <div className="table">
                <div className="name">
                  <h1>Name</h1>
                  <hr></hr>
                  <span>PM2_5<span className="required">*required</span></span>
                  <span>PM10<span className="required">*required</span></span>
                  <span>CO2</span>
                  <span>Noise</span>
                  <span>Light</span>
                  <span>Timestamp</span>
                  <span>Lat</span>
                  <span>Lon</span>
                </div>
                <div className="type">
                  <h1>Type</h1>
                  <hr></hr>
                  <span>number</span>
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
                  <span>Dust particles less than 2.5 μm in diameter in ppm</span>
                  <span>Dust particles less than 10 μm in diameter in ppm</span>
                  <span>Carbon dioxide value in ppm</span>
                  <span>Noise value in dB</span>
                  <span>Light</span>
                  <span>Date/time in any format</span>
                  <span>Latitude coordinates at geographic coordinate system</span>
                  <span>Longitude coordinates at geographic coordinate system</span>
                  <span></span>
                </div>
            </div>
            <div className="request">
                  <h1>Request</h1>
                  <p>Request URL</p>
                  <span className="link">http://api.djinnsensor.com/mental</span>
                  <p>Request example</p>
                  <div className="link" id="mental-ex">
                    &#123;
                    <br />
                    &nbsp;"request":&#91;
                    <br/>
                    &nbsp; &nbsp;&#123;"PM10":40,"PM2_5":15,"CO2":700,"Noise":50,"Light":300,"Timestamp":1231098723123,"lat":123123,"lon":123122&#125;,
                    <br/>
                    &nbsp; &nbsp;&#123;"PM10":25,"PM2_5":15,"CO2":900&#125;
                    <br/>&nbsp;&#93;
                    <br/>
                    &#125;
                  </div>
            </div>
            <div className="response">
              <p>Response example</p>
              <div className="link" id="mental-ex">
                   &#91;
                   <br />
                   &nbsp;&#123;"Timestamp":1231098723123,"lat":123123,"lon":123122,"Mental":1.30&#125;,
                   <br />
                   &nbsp;&#123;"Mental":0.47&#125;
                   <br />
                   &#93;
              </div>
            </div>
          </div>

          <div className="content">
            <h1 id="respiratory">Respiratory risk</h1>
            <span className="POST">POST</span>/respiratory
            <div className="table">
                <div className="name">
                  <h1>Name</h1>
                  <hr></hr>
                  <span>PM2_5<span className="required">*required</span></span>
                  <span>PM10<span className="required">*required</span></span>
                  <span>CO2</span>
                  <span>Humidity</span>
                  <span>Ozone</span>
                  <span>FM</span>
                  <span>Timestamp</span>
                  <span>Lat</span>
                  <span>Lon</span>
                </div>
                <div className="type">
                  <h1>Type</h1>
                  <hr></hr>
                  <span>number</span>
                  <span>number</span>
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
                  <span>Dust particles less than 2.5 μm in diameter in ppm</span>
                  <span>Dust particles less than 10 μm in diameter in ppm</span>
                  <span>Carbon dioxide value in ppm</span>
                  <span>Humidity value in %(0-100)</span>
                  <span>Ozone</span>
                  <span>Formaldehyde</span>
                  <span>Date/time in any format</span>
                  <span>Latitude coordinates at geographic coordinate system</span>
                  <span>Longitude coordinates at geographic coordinate system</span>
                  <span></span>
                </div>
            </div>
            <div className="request">
                  <h1>Request</h1>
                  <p>Request URL</p>
                  <span className="link">http://api.djinnsensor.com/respiratory</span>
                  <p>Request example</p>
                  <div className="link" id="respiratory-ex">
                    &#123;
                    <br />
                    &nbsp;"request":&#91;
                    <br/>
                    &nbsp; &nbsp;&#123;"PM10":40,"PM2_5":15,"CO2":700,"Humidity":25,"Ozone":30,"FM":15,"Timestamp":1231098723123,"lat":123123,"lon":123122&#125;,
                    <br/>
                    &nbsp; &nbsp;&#123;"PM10":25,"PM2_5":15,"CO2":900&#125;
                    <br/>&nbsp;&#93;
                    <br/>
                    &#125;
                  </div>
            </div>
            <div className="response">
              <p>Response example</p>
              <div className="link" id="respiratory-ex">
                   &#91;
                   <br />
                   &nbsp;&#123;"Timestamp":1231098723123,"lat":123123,"lon":123122,"Respiratory":2.36&#125;,
                   <br />
                   &nbsp;&#123;"Respiratory":0.47&#125;
                   <br />
                   &#93;
              </div>
            </div>
          </div>


          <div className="content">
            <h1 id="sensorial">Sensorial risk</h1>
            <span className="POST">POST</span>/sensorial
            <div className="table">
                <div className="name">
                  <h1>Name</h1>
                  <hr></hr>
                  <span>FM<span className="required">*required</span></span>
                  <span>Timestamp</span>
                  <span>Lat</span>
                  <span>Lon</span>
                </div>
                <div className="type">
                  <h1>Type</h1>
                  <hr></hr>
                  <span>number</span>
                  <span>string</span>
                  <span>number</span>
                  <span>number</span>
                </div>
                <div className="description">
                  <h1>Description</h1>
                  <hr></hr>
                  <span>Formaldehyde</span>
                  <span>Date/time in any format</span>
                  <span>Latitude coordinates at geographic coordinate system</span>
                  <span>Longitude coordinates at geographic coordinate system</span>
                  <span></span>
                </div>
            </div>
            <div className="request">
                  <h1>Request</h1>
                  <p>Request URL</p>
                  <span className="link">http://api.djinnsensor.com/sensorial</span>
                  <p>Request example</p>
                  <div className="link" id="sensorial-ex">
                    &#123;
                    <br />
                    &nbsp;"request":&#91;
                    <br/>
                    &nbsp; &nbsp;&#123;"FM":15,"Timestamp":1231098723123,"lat":123123,"lon":123122&#125;,
                    <br/>
                    &nbsp; &nbsp;&#123;"FM":47&#125;
                    <br/>&nbsp;&#93;
                    <br/>
                    &#125;
                  </div>
            </div>
            <div className="response">
              <p>Response example</p>
              <div className="link" id="sensorial-ex">
                   &#91;
                   <br />
                   &nbsp;&#123;"Timestamp":1231098723123,"lat":123123,"lon":123122,"Sensorial":0.09&#125;,
                   <br />
                   &nbsp;&#123;"Sensorial":0.43&#125;
                   <br />
                   &#93;
              </div>
            </div>
          </div>
         
          <div className="content">
            <h1  id="productivity">Productivity risk</h1>
            <span className="POST">POST</span>/productivity
            <div className="table">
                <div className="name">
                  <h1>Name</h1>
                  <hr></hr>
                  <span>Temperature<span className="required">*required</span></span>
                  <span>Humidity<span className="required">*required</span></span>
                  <span>CO2</span>
                  <span>Noise</span>
                  <span>Timestamp</span>
                  <span>Lat</span>
                  <span>Lon</span>
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
                  <span>Noise value in dB</span>
                  <span>Date/time in any format</span>
                  <span>Latitude coordinates at geographic coordinate system</span>
                  <span>Longitude coordinates at geographic coordinate system</span>
                  <span></span>
                </div>
            </div>
            <div className="request">
                  <h1>Request</h1>
                  <p>Request URL</p>
                  <span className="link">http://api.djinnsensor.com/productivity</span>
                  <p>Request example</p>
                  <div className="link" id="productivity-ex">
                    &#123;
                    <br />
                    &nbsp;"request":&#91;
                    <br/>
                    &nbsp; &nbsp;&#123;"Temperature":25,"CO2":700,"Humidity":25,"Noise":50,"Timestamp":1231098723123,"lat":123123,"lon":123122&#125;
                    <br/>&nbsp;&#93;
                    <br/>
                    &#125;
                  </div>
            </div>
            <div className="response">
              <p>Response example</p>
              <div className="link" id="productivity-ex">
                   &#91;
                   <br />
                   &nbsp;&#123;"Timestamp":1231098723123,
                   <br/> &nbsp;
                    "lat":123123,
                    <br/> &nbsp;
                    "lon":123122,
                    <br/> &nbsp;
                    "Productivity": 
                   &#123;<br/> &nbsp; &nbsp;
                      "Integral": 93,
                      <br/> &nbsp; &nbsp;
                      "Basic activity": 95,
                      <br/> &nbsp; &nbsp;
                      "Applied activity": 95,
                      <br/> &nbsp; &nbsp;
                      "Focused activity": 98,
                      <br/> &nbsp; &nbsp;
                      "Task orientation": 93,
                      <br/> &nbsp; &nbsp;
                      "Initiative": 93,
                      <br/> &nbsp; &nbsp;
                      "Information search": 98,
                      <br/> &nbsp; &nbsp;
                      "Information usage": 92,
                      <br/> &nbsp; &nbsp;
                      "Breadth of approach": 91,
                      <br/> &nbsp; &nbsp;
                      "Basic strategy": 84
                  &#125;
                  <br />
                  &nbsp;&#125;
                   <br />
                
                   &#93;
              </div>
            </div>
          </div>


      </div>
    </div>
  );
}

export default App;
