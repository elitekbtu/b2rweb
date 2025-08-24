"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, X } from "lucide-react"

declare global {
  interface Window {
    L: any
  }
}

interface Country {
  name: string
  coords: [number, number]
  info: string
  videoId: string
  color: string
}

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<Record<string, any>>({})
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const countries: Country[] = [
    {
      name: "Kazakhstan",
      coords: [48.0196, 66.9237],
      info: "Kazakhstan, the heart of Central Asia, is known for its vast steppes, rich nomadic heritage, and modern capital Nur-Sultan. Experience traditional yurt culture and contemporary innovations.",
      videoId: "Nkx8-mePy9k",
      color: "amber",
    },
    {
      name: "France",
      coords: [48.8566, 2.3522],
      info: "France, renowned for its art, culture, and cuisine, is home to iconic landmarks like the Eiffel Tower and the Louvre Museum. Discover the elegance of French lifestyle and heritage.",
      videoId: "FlcvOnvBj0Y",
      color: "blue",
    },
    {
      name: "Japan",
      coords: [35.6762, 139.6503],
      info: "Japan masterfully blends ancient traditions with cutting-edge technology. Experience stunning temples, cherry blossoms, and the harmony of old and new in this fascinating culture.",
      videoId: "IWnO1m1v1lM",
      color: "pink",
    },
    {
      name: "Brazil",
      coords: [-15.8267, -47.9218],
      info: "Brazil captivates with its vibrant Carnival, Amazon rainforest, and breathtaking beaches like Copacabana. Immerse yourself in the rhythm and warmth of Brazilian culture.",
      videoId: "8qZPQHVVqLo",
      color: "green",
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current && !mapInstanceRef.current) {
      loadLeaflet()
    }
  }, [])

  const loadLeaflet = () => {
    // Check if Leaflet is already loaded
    if (window.L) {
      initializeMap()
      return
    }

    // Load Leaflet CSS
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    document.head.appendChild(link)

    // Load Leaflet JS
    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    script.onload = () => {
      initializeMap()
    }
    document.head.appendChild(script)
  }

  const initializeMap = () => {
    if (!window.L || !mapRef.current || mapInstanceRef.current) return

    try {
      // Initialize map
      const map = window.L.map(mapRef.current, {
        center: [20, 0],
        zoom: 2,
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
        dragging: true,
        touchZoom: true,
      })

      // Add tile layer
      window.L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: "© OpenStreetMap contributors © CARTO",
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map)

      mapInstanceRef.current = map
      setIsMapLoaded(true)

      // Add markers
      countries.forEach((country) => {
        addMarker(country, map)
      })
    } catch (error) {
      console.error("Error initializing map:", error)
    }
  }

  const addMarker = (country: Country, map: any) => {
    try {
      // Create custom marker HTML
      const markerHtml = `
        <div style="
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, ${getColorValues(country.color)});
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s;
        " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          <svg width="16" height="16" fill="white" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
      `

      const customIcon = window.L.divIcon({
        className: "custom-marker",
        html: markerHtml,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      })

      // Create popup content
      const popupContent = `
        <div style="max-width: 300px; padding: 8px;">
          <h3 style="margin: 0 0 12px 0; font-size: 18px; font-weight: bold; color: #1e293b;">${country.name}</h3>
          <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.5; color: #64748b;">${country.info}</p>
          <div style="margin-bottom: 12px;">
            <iframe 
              src="https://www.youtube.com/embed/${country.videoId}" 
              width="100%" 
              height="180" 
              frameborder="0" 
              allowfullscreen
              style="border-radius: 8px;"
            ></iframe>
          </div>
          <button 
            onclick="window.openFullVideo('${country.videoId}', '${country.name}')"
            style="
              width: 100%;
              padding: 8px 16px;
              background: #1e293b;
              color: white;
              border: none;
              border-radius: 6px;
              font-size: 14px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
            "
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Full Experience
          </button>
        </div>
      `

      const marker = window.L.marker(country.coords, { icon: customIcon }).addTo(map).bindPopup(popupContent, {
        maxWidth: 320,
        className: "custom-popup",
      })

      markersRef.current[country.name] = marker
    } catch (error) {
      console.error("Error adding marker:", error)
    }
  }

  const getColorValues = (color: string) => {
    const colors = {
      amber: "#f59e0b, #ea580c",
      blue: "#3b82f6, #4f46e5",
      pink: "#ec4899, #e11d48",
      green: "#10b981, #059669",
    }
    return colors[color as keyof typeof colors] || "#6b7280, #4b5563"
  }

  // Add global function for video modal
  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).openFullVideo = (videoId: string, countryName: string) => {
        const country = countries.find((c) => c.name === countryName)
        if (country) {
          setSelectedCountry(country)
          setShowVideo(true)
        }
      }
    }
  }, [])

  const handleCountryClick = (country: Country) => {
    if (mapInstanceRef.current && markersRef.current[country.name]) {
      mapInstanceRef.current.setView(country.coords, 5, { animate: true, duration: 1 })
      setTimeout(() => {
        markersRef.current[country.name].openPopup()
      }, 500)
    }
  }

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <Card className="overflow-hidden shadow-xl border-0">
        <div ref={mapRef} className="h-96 md:h-[500px] w-full bg-slate-100" style={{ minHeight: "400px" }} />
      </Card>

      {/* Country Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {countries.map((country) => (
          <Button
            key={country.name}
            variant="outline"
            onClick={() => handleCountryClick(country)}
            className="border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-200"
          >
            <MapPin className="mr-2 h-4 w-4" />
            {country.name}
          </Button>
        ))}
      </div>

      {/* Video Modal */}
      {showVideo && selectedCountry && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Cultural Experience: {selectedCountry.name}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowVideo(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedCountry.videoId}?autoplay=1`}
                title={`${selectedCountry.name} Cultural Experience`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          padding: 0;
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
        }
        .custom-popup .leaflet-popup-tip {
          background: white;
        }
      `}</style>
    </div>
  )
}
