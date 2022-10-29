import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import DragAndDrop from './DragAndDrop';
import './style.css';

function App (){

    return (
      <div>
        <DragAndDrop />
      </div>
    );
  
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);
