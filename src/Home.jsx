import { Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="App">
      <div
        className="docs"
        style={{ margin: '10px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Link
          className="docs-name"
          to={'/docs'}
          style={{ fontSize: '24px', color: '#000000', textAlign: 'start' }}
        >
          Docs
        </Link>
      </div>
      <header className="App-header">
        <img src="maaa.png" alt="..." style={{ width: '10%', height: '10%' }} />
        <h1>শারদীয়া দুর্গাপূজা ২০২৩</h1>
        <p>
          অ্যাপটির সাহায্যে আপনাদের পছন্দের পুজো প্যান্ডেল গুলি খুঁজে পেতে পারেন
          <p>অ্যাপটি ডাউনলোড করতে "Download App" এ ক্লিক করুন</p>
        </p>

        <a
          className="App-link"
          href="puja_pandal.apk"
          rel="noopener noreferrer"
        >
          <button style={{ width: '200px', padding: '15px', fontSize: '22px' }}>
            Download App
          </button>
        </a>
      </header>
    </div>
  )
}

export default Home
