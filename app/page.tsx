"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Brain, Users, Zap, ArrowRight, Play } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"

// Add this line after the imports to dynamically load the map component
const InteractiveMap = dynamic(() => import("./components/InteractiveMap"), { ssr: false })

export default function HomePage() {
  const [activeCountry, setActiveCountry] = useState(0) // This line will be removed
  const countries = [] // This line will be removed

  useEffect(() => {
    // This useEffect will be removed
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Globe className="h-8 w-8 text-slate-900" />
                <span className="text-xl font-bold text-slate-900">Back2Roots</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-slate-600 hover:text-slate-900 transition-colors">
                Features
              </Link>
              <Link href="/technology" className="text-slate-600 hover:text-slate-900 transition-colors">
                Technology
              </Link>
              <Link href="/explore" className="text-slate-600 hover:text-slate-900 transition-colors">
                Explore
              </Link>
              <Link href="/start">
                <Button className="bg-slate-900 hover:bg-slate-800">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-700">
              AI-Powered Cultural Exploration
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Save your indigenous
              <span className="block bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent">
                culture
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Experience authentic cultural connections through our AI avatar that adapts to every destination, bringing
              you closer to the heart of each culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                onClick={() => window.open("https://youtu.be/Nkx8-mePy9k?si=92lV57ugsk5gtHma", "_blank")}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/vr-cultural-interaction.jpg"
                alt="AI-powered cultural interaction with VR technology"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Intelligent Cultural Adaptation</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our AI technology creates personalized experiences that respect and celebrate cultural diversity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Adaptive AI Avatar</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our AI avatar transforms its appearance, voice, and mannerisms to authentically represent each culture
                  you explore.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Cultural Immersion</h3>
                <p className="text-slate-600 leading-relaxed">
                  Experience authentic cultural elements through traditional attire, customs, and local perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Real-time Adaptation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Instant cultural context switching powered by advanced AI algorithms and cultural databases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-700">
                Advanced Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Where AI Meets Cultural Heritage</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our cutting-edge AI technology seamlessly blends with traditional cultural elements, creating an
                authentic and respectful exploration experience that honors each destination's unique heritage.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Cultural Recognition</h4>
                    <p className="text-slate-600">AI analyzes and adapts to cultural contexts in real-time</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Visual Transformation</h4>
                    <p className="text-slate-600">Avatar appearance changes to reflect local traditions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Immersive Experience</h4>
                    <p className="text-slate-600">Complete cultural immersion through AR/VR integration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mongolian-woman-yurt.png"
                  alt="Woman in traditional Mongolian clothing standing in front of a yurt in the steppes"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Exploration */}
      <section id="explore" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore Destinations</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click on markers or country buttons to discover destinations with AI-driven cultural insights
            </p>
          </div>

          {/* Interactive Map */}
          <div className="mb-12">
            <InteractiveMap />
          </div>

          {/* Country Selection Grid */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Explore the World?</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join thousands of travelers discovering authentic cultural experiences through AI-powered exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Globe className="h-6 w-6 text-slate-900" />
                <span className="text-lg font-bold text-slate-900">Back2Roots</span>
              </a>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            © 2025 Back2Roots. Connecting cultures through AI innovation.
          </div>
        </div>
      </footer>
    </div>
  )
}
