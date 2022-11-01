import React, { component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends component {
    render() {
        return (
            <div className='todoapp'>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App
