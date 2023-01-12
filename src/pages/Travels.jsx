import React from "react"
import BreadCrumb from "../components/BreadCrumb"

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api"

import { travelData } from "../data"

export default function Travels() {
  const mapStyles = {
    height: "80vh",
    width: "100%",
  }

  const defaultCenter = {
    lat: 31.16,
    lng: -52.95,
  }
  return (
    <div className="container mx-auto min-h-screen">
      <section className="mx-4 py-24 md:py-32">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <BreadCrumb  />
          <p className="font-semibold text-4xl mt-4 mb-4 md:mb-8">Travels</p>

          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={3}
              center={defaultCenter}
            >
              {travelData.map((item) => {
                return <MarkerF key={item.name} position={item.location} />
              })}
            </GoogleMap>
          </LoadScript>
        </div>
      </section>
    </div>
  )
}
