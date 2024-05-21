import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className='Farbe' style={{textAlign:'center'}} >
    <u>LOOK AT ME HOW BEAUTIFUL I AM</u>
  </h1>

  <h2 className='AndereKlasse'>
    'dashed sieht so ecklig aus'
  </h2>

  <h3 style={{fontSize: "70px", fontFamily: "cursive", textAlign: "center", color: 'blue'}}>
    <u>Text</u>
  </h3>
  </>
  
);





function addieren (a, b) {
  return a + b
}


const Mathematik = ReactDOM.createRoot(document.getElementById('addieren'));
Mathematik.render(
  <>
  <h1>Das Ergebniss ist {addieren(10,5)}</h1>
  </>
  );


 


function Wurzel (a) {
  
  let Wurzel = Math.sqrt(a)
  return Wurzel
};

const Quadratwurzel = ReactDOM.createRoot(document.getElementById('Wurzel'));
Quadratwurzel.render(
  <>
  <h3>Die Wurzel aus deiner Zahl ist = {Wurzel(100)}</h3>
  <h3>Die Wurzel aus deiner Zahl ist = {Wurzel(16)}</h3>
  <h3>Die Wurzel aus deiner Zahl ist = {Wurzel(121)}</h3>
  </>
)



function ZufaelligeZahl () {
  let Zufall = Math.random()
  return Zufall;
}



const Random = ReactDOM.createRoot(document.getElementById('Random'));

Random.render(
  <>
  <br></br>
  <h1>Zufällige Zahl = {ZufaelligeZahl()}</h1>
  </>
);


function Zeit () {
  let Datum = new Date();
  return Datum.toLocaleDateString("de-DE", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
};

const Saat = ReactDOM.createRoot(document.getElementById('Zeit'));

Saat.render(
  <>
  <h1>Datum = {Zeit()}</h1>
  </>
);