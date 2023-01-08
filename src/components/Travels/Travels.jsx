import React from "react"
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api"

import { Section, Container } from "../../globalStyles"

const Travels = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  }

  const defaultCenter = {
    lat: 31.16,
    lng: -52.95,
  }

  const locations = [
    {
      name: "Las Cruces, New Mexico",
      location: {
        lat: 32.29,
        lng: -106.68,
      },
    },
    {
      name: "Seattle, Washington",
      location: {
        lat: 47.61,
        lng: -122.44,
      },
    },
    {
      name: "Portland, Oregon",
      location: {
        lat: 45.55,
        lng: -122.63,
      },
    },
    {
      name: "Humboldt County, California",
      location: {
        lat: 40.94,
        lng: -124.51,
      },
    },
    {
      name: "Istanbul, Turkey",
      location: {
        lat: 40.93,
        lng: 28.95,
      },
    },
    {
      name: "Izmir, Turkey",
      location: {
        lat: 38.43,
        lng: 27.06,
      },
    },
    {
      name: "Antalya, Turkey",
      location: {
        lat: 36.91,
        lng: 30.75,
      },
    },
    {
      name: "Konya, Turkey",
      location: {
        lat: 37.89,
        lng: 32.43,
      },
    },
    {
      name: "Denizli, Turkey",
      location: {
        lat: 37.81,
        lng: 29.02,
      },
    },
    {
      name: "Kabul, Afghanistan",
      location: {
        lat: 34.58,
        lng: 69.16,
      },
    },
    {
      name: "Maza-i-Sharif, Afghanistan",
      location: {
        lat: 36.7,
        lng: 67.13,
      },
    },
    {
      name: "Nahrin, Afghanistan",
      location: {
        lat: 36.06,
        lng: 69.1,
      },
    },
    {
      name: "Vienna, Austria",
      location: {
        lat: 48.24,
        lng: 16.33,
      },
    },
    {
      name: "Berlin, Germany",
      location: {
        lat: 52.54,
        lng: 13.23,
      },
    },
    {
      name: "Amsterdam, Netherlands",
      location: {
        lat: 52.37,
        lng: 4.83,
      },
    },
    {
      name: "London, United Kingdom",
      location: {
        lat: 51.52,
        lng: -0.12,
      },
    },
    {
      name: "Las Vegas, Nevada",
      location: {
        lat: 36.16,
        lng: -115.23,
      },
    },
    {
      name: "Minneapolis, Minnesota",
      location: {
        lat: 44.99,
        lng: -93.28,
      },
    },
    {
      name: "Houston, Texas",
      location: {
        lat: 29.94,
        lng: -95.48,
      },
    },
    {
      name: "New York, New York",
      location: {
        lat: 40.73,
        lng: -73.98,
      },
    },
    {
      name: "Washington DC, DC",
      location: {
        lat: 38.88,
        lng: -77.0,
      },
    },
    {
      name: "Baltimore, Maryland",
      location: {
        lat: 39.3,
        lng: -76.64,
      },
    },
    {
      name: "Chicago, Illinois",
      location: {
        lat: 41.82,
        lng: -87.65,
      },
    },
  ]

  return (
    <Section>
      <Container>
        <h1>Places I Have Visited</h1>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={3}
            center={defaultCenter}
          >
            {locations.map((item) => {
              return <MarkerF key={item.name} position={item.location} />
            })}
          </GoogleMap>
        </LoadScript>
      </Container>
    </Section>
  )
}
export default Travels
