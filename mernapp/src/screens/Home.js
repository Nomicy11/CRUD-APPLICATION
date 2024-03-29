import React from 'react'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div>


            <div>
                <Navbar />
            </div>
            <div>
                <Carousal/>
            </div>
            <div className='m-3'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
