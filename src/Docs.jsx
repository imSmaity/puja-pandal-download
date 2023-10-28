import React from 'react'
import { Link } from 'react-router-dom'

const container = { padding: '18rem', paddingTop: '30px' }
const headerStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
}

const listItemStyle = {
  marginBottom: '10px',
}

const Docs = () => {
  return (
    <div style={container}>
      <h1 style={headerStyle}>Puja Pandal Mobile App</h1>
      <h2 style={headerStyle}>Team Members:</h2>
      <ul>
        <li style={listItemStyle}>
          <Link to={'https://github.com/arp99'} target="_blank">
            Arpan Mondal
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to={'https://github.com/imSmaity'} target="_blank">
            Suman Maity
          </Link>
        </li>
      </ul>
      <h2 style={headerStyle}>App Name:</h2>
      <p style={listItemStyle}>Puja Pandal</p>
      <h2 style={headerStyle}>Project Description:</h2>
      <p>
        The Puja Pandal mobile app is designed to help users find Durga Puja
        pandals, share ratings and comments, and access the distance from their
        current location to the pandal. Users can also contribute by adding new
        pandals to the app.
      </p>
      <h2 style={headerStyle}>Features:</h2>
      <ol>
        <li style={listItemStyle}>
          <strong>Pandal Locator:</strong>
          <p>Users can locate nearby Durga Puja pandals on a map.</p>
          <p>
            The app will display the name, location, and brief information about
            each pandal.
          </p>
          <p>
            Users can view detailed information by clicking on a specific
            pandal.
          </p>
        </li>
        <li style={listItemStyle}>
          <strong>Ratings and Comments:</strong>
          <p>Users can rate and leave comments for each pandal.</p>
          <p>
            Ratings are visible to all users to aid in their decision-making
            process.
          </p>
        </li>
        <li style={listItemStyle}>
          <strong>Distance Calculation:</strong>
          <p>
            The app calculates the distance between the user's current location.
          </p>
          <p>
            Users can filter pandals based on distance, helping them find the
            nearest ones.
          </p>
        </li>
        <li style={listItemStyle}>
          <strong>Add New Pandal:</strong>
          <p>Users can contribute to the app by adding new pandals.</p>
          <p>
            Adding a new pandal includes specifying its name, location on the
            map, and relevant details.
          </p>
        </li>
        <li style={listItemStyle}>
          <strong>User-Friendly UI:</strong>
          <p>
            The app features an intuitive and user-friendly interface for easy
            navigation.
          </p>
        </li>
        <li style={listItemStyle}>
          <strong>Map Integration:</strong>
          <p>
            The app will use the Google Maps API for location services and map
            display.
          </p>
        </li>
      </ol>
      <h2 style={headerStyle}>Tech Stack:</h2>
      <ul>
        <li style={listItemStyle}>Frontend: React Native</li>
        <li style={listItemStyle}>Backend: Node.js</li>
        <li style={listItemStyle}>Database: MongoDB</li>
      </ul>
      <h2 style={headerStyle}>Timeline:</h2>
      <p style={listItemStyle}>
        The project will be launched on October 20, 2023, in time for Durga
        Puja.
      </p>
      <h2 style={headerStyle}>Project Phases:</h2>
      <ol>
        <li style={listItemStyle}>
          <strong>Planning and Design Phase:</strong>
          <p>Define project requirements and scope.</p>
          <p>Create wireframes and design the user interface.</p>
          <p>Set up the development environment.</p>
        </li>
        <li style={listItemStyle}>
          <strong>Frontend Development Phase:</strong>
          <p>Develop the user interface using React Native.</p>
          <p>ntegrate Google Maps API for location services.</p>
        </li>
        <li style={listItemStyle}>
          <strong>Backend Development Phase:</strong>
          <p>Develop the backend using Node.js.</p>
          <p>Set up the MongoDB database for storing pandal information.</p>
        </li>
        <li style={listItemStyle}>
          <strong>Testing and Quality Assurance:</strong>
          <p>Test the app for functionality, usability, and performance.</p>
          <p>Fix bugs and make necessary improvements.</p>
        </li>
        <li style={listItemStyle}>
          <strong>Deployment and Launch:</strong>
          <p>
            Deploy the app and provide download link <Link to={'/'}>here</Link>{' '}
            in our website.
          </p>
          <p>Launch the app on October 20, 2023.</p>
        </li>
      </ol>
      <h2 style={headerStyle}>Budget:</h2>
      <p style={listItemStyle}>
        The project is fully free, and no budget or funding is required.
      </p>
      <h2 style={headerStyle}>Risks:</h2>
      <p style={listItemStyle}>
        Potential risks include technical challenges, user adoption, and data
        privacy concerns. Mitigation strategies will be developed in the
        planning phase.
      </p>
      <h2 style={headerStyle}>Conclusion:</h2>
      <p style={listItemStyle}>
        The Puja Pandal mobile app project aims to provide a valuable resource
        for users seeking information on Durga Puja pandals, promoting cultural
        engagement and participation. With a user-friendly interface and
        essential features, the app is expected to be a success during the Durga
        Puja season in October 2023.
      </p>
    </div>
  )
}

export default Docs
