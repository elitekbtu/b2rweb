"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Brain, Users, Zap, ArrowLeft, MapPin, Play, BookOpen, Music, Utensils, Calendar } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically load the map component
const InteractiveMap = dynamic(() => import("../components/InteractiveMap"), { ssr: false })

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
                <Globe className="h-8 w-8 text-slate-900" />
                <span className="text-xl font-bold text-slate-900">Back2Roots</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-slate-600 hover:text-slate-900 transition-colors">
                Features
              </Link>
              <Link href="/technology" className="text-slate-600 hover:text-slate-900 transition-colors">
                Technology
              </Link>
              <Link href="/explore" className="text-slate-900 font-medium">
                Explore
              </Link>
              <Button className="bg-slate-900 hover:bg-slate-800">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-700">
                Cultural Exploration
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Explore Kazakh
                <span className="block bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent">
                  Cultural Heritage
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Discover the rich traditions, language, and customs of Kazakhstan through interactive experiences with
                AsylAI, your personal cultural guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Interactive Cultural Map</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click on markers or country buttons to discover destinations with AI-driven cultural insights
            </p>
          </div>

          {/* Interactive Map */}
          <div className="mb-12">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* Cultural Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cultural Categories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore different aspects of Kazakh culture through interactive learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Language & Literature */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Language & Literature</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Learn Kazakh language basics, explore traditional poetry, and discover the beauty of oral literature
                  with AsylAI as your guide.
                </p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Interactive Lessons
                </Badge>
              </CardContent>
            </Card>

            {/* Traditional Music */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Traditional Music</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Experience the sounds of dombra, learn traditional songs, and understand the cultural significance of
                  Kazakh musical heritage.
                </p>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Audio Experience
                </Badge>
              </CardContent>
            </Card>

            {/* National Cuisine */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">National Cuisine</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Discover traditional recipes, learn about beshbarmak, baursaks, and other authentic Kazakh dishes with
                  cultural context.
                </p>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Recipe Collection
                </Badge>
              </CardContent>
            </Card>

            {/* Traditions & Customs */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Салт-дәстүр (Traditions)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Explore traditional customs, wedding ceremonies, hospitality traditions, and the importance of respect
                  for elders in Kazakh culture.
                </p>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Cultural Practices
                </Badge>
              </CardContent>
            </Card>

            {/* Genealogy */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Шежіре (Genealogy)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Learn about the seven-generation rule, tribal structures, and the importance of knowing your ancestry
                  in Kazakh tradition.
                </p>
                <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                  Family Heritage
                </Badge>
              </CardContent>
            </Card>

            {/* Festivals & Celebrations */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Festivals & Celebrations</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Experience Nauryz celebrations, traditional games, and seasonal festivals that mark important moments
                  in Kazakh culture.
                </p>
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                  Seasonal Events
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Cultural Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-700 w-fit">
                Featured Experience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Virtual Yurt Experience</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Step inside a traditional Kazakh yurt and learn about nomadic lifestyle, the significance of different
                areas within the yurt, and traditional hospitality customs. AsylAI will guide you through this immersive
                cultural experience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">360° virtual tour of authentic yurt interior</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Interactive objects and cultural explanations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">AsylAI storytelling about nomadic traditions</span>
                </div>
              </div>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Play className="mr-2 h-5 w-5" />
                Start Virtual Tour
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mongolian-woman-yurt.png"
                  alt="Traditional Kazakh yurt experience"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-slate-700 font-medium">
                      "Welcome to our traditional home. Let me show you the sacred spaces and customs of our ancestors."
                    </p>
                    <p className="text-xs text-slate-500 mt-1">- AsylAI, Your Cultural Guide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Learning Paths</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose your cultural learning journey based on your interests and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner Path */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Beginner
                  </Badge>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">5</p>
                    <p className="text-sm text-slate-600">Lessons</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Cultural Introduction</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Perfect for newcomers to Kazakh culture. Learn basic greetings, cultural etiquette, and fundamental
                  traditions.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Basic Kazakh phrases</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Cultural greetings</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Traditional values</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Start Learning</Button>
              </CardContent>
            </Card>

            {/* Intermediate Path */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ring-2 ring-blue-500">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Intermediate
                  </Badge>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">12</p>
                    <p className="text-sm text-slate-600">Lessons</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Cultural Deep Dive</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Explore traditions, music, cuisine, and family structures. Ideal for those with basic cultural
                  knowledge.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Traditional ceremonies</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Music and instruments</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Genealogy basics</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Learning</Button>
              </CardContent>
            </Card>

            {/* Advanced Path */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Advanced
                  </Badge>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">20</p>
                    <p className="text-sm text-slate-600">Lessons</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Cultural Mastery</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Master complex cultural concepts, historical context, and become a cultural ambassador yourself.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Historical narratives</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Complex traditions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Cultural teaching</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Learning</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AsylAI Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/traditional-kazakh-woman.jpg"
                  alt="AsylAI - Your Kazakh cultural guide"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-700 w-fit">
                Meet Your Guide
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">AsylAI: Your Cultural Companion</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                AsylAI is your personal Kazakh cultural guide, designed to share the beauty and depth of Kazakh
                traditions. She speaks fluent Kazakh, understands cultural nuances, and adapts her teaching style to
                your learning preferences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Fluent in Kazakh, Russian, and English</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Personalized cultural storytelling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Real-time conversation and Q&A</span>
                </div>
              </div>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                <Play className="mr-2 h-5 w-5" />
                Meet AsylAI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Cultural Journey</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Begin exploring Kazakh culture today with AsylAI as your guide. Discover traditions, learn the language, and
            connect with your heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
              Begin Exploration
            </Button>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Link href="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
                <Globe className="h-6 w-6 text-slate-900" />
                <span className="text-lg font-bold text-slate-900">Back2Roots</span>
              </Link>
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
