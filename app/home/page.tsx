import React from 'react'
import SecondPage from './secondpage'
import SayHello from '../components/SayHello'
import "bootstrap/dist/css/bootstrap.min.css";

import PPage from '../(features)/products/page';


function HomePage() {
  return (
    <div className='card shadow m-auto w-50'>
        <div className='card-header bg-primary text-white p-5'>
        Home page with Bootstrap CSS
        </div>
        <div className='card-body'>
        <SecondPage/>
        <SayHello></SayHello>
        <PPage/>
        </div>
    </div>
  )
}

export default HomePage