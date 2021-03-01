import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchContactCard from './component/SearchContactCard';
import { Contact } from './models/contact';

function App() {
 const [ contact , setContact ] = useState<Contact>({ fullName: 'Gina Snelly', userId: 1234, profileImage: 'https://randomUser.me/api/portraits/women/55.jpg', trust: 75})

 
  return (
    <div className="container">
      <div style={{
        margin : '50px'
      }}>
       <SearchContactCard 
         contact={contact}
       />
       </div>
    </div>
  );
}

export default App;
