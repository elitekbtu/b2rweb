"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Brain, Users, Zap, ArrowLeft, Mic, Globe2, Smartphone } from "lucide-react"

export default function FeaturesPage() {
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
              <Link href="/features" className="text-slate-900 font-medium">
                Features
              </Link>
              <Link href="/#technology" className="text-slate-600 hover:text-slate-900 transition-colors">
                Technology
              </Link>
              <Link href="/#explore" className="text-slate-600 hover:text-slate-900 transition-colors">
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
                Advanced AI Features
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Innovative Features for
                <span className="block bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent">
                  Cultural Preservation
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Discover how Back2Roots uses cutting-edge AI technology to preserve Kazakh language and culture, making
                traditions accessible to the digital generation through interactive experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Feature 1 - АсылАй Avatar */}
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 w-fit">
                Metahuman Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet AsylAI - Your Cultural Guide</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                AsylAI is our 3D Metahuman avatar who speaks fluent Kazakh and serves as your personal cultural guide.
                Built with Unreal Engine 5.4, she responds in real-time and helps you explore Kazakh traditions,
                language, and customs through interactive conversations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Real-time Kazakh language conversations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Cultural storytelling and folklore sharing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Powered by Azure Speech and Gemini AI</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/traditional-kazakh-woman.jpg"
                  alt="AsylAI - Traditional Kazakh cultural guide avatar"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>

          {/* Feature 2 - Interactive Village */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mongolian-woman-yurt.png"
                  alt="Interactive Kazakh village exploration"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-700 w-fit">
                Gamified Learning
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Interactive Village Exploration</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Journey through a virtual Kazakh village where you complete quests, interact with cultural objects, and
                learn about салт-дәстүр (traditions), шежіре (genealogy), national cuisine, music, and legends through
                engaging gameplay.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Globe2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Quest-based cultural learning system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Interactive cultural objects and ceremonies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Knowledge collection and progress tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Educational Integration */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 w-fit">
                Educational Platform
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">School & Institutional Integration</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Back2Roots integrates seamlessly with educational institutions through B2B licenses, LMS integration,
                and specialized tools for Kazakh language teachers. From pilot programs in Astana and Almaty to
                nationwide expansion.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Smartphone className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Freemium access for individual learners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">B2B licenses for schools and colleges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Teacher training and offline events</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/vr-cultural-interaction.jpg"
                  alt="Educational integration and classroom learning"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Advanced Technology Stack</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built with cutting-edge technologies to deliver authentic cultural experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Unreal Engine 5.4</h3>
                <p className="text-slate-600 leading-relaxed">
                  Photorealistic 3D environments and character rendering for immersive cultural exploration experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mic className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Azure Speech AI</h3>
                <p className="text-slate-600 leading-relaxed">
                  Advanced NLP model specifically trained on Kazakh language for natural conversation and pronunciation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Gemini AI Integration</h3>
                <p className="text-slate-600 leading-relaxed">
                  Intelligent dialogue generation and cultural context understanding for meaningful interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Scalable Localization</h3>
                <p className="text-slate-600 leading-relaxed">
                  Platform architecture designed for expansion to other indigenous cultures worldwide (Maori, Khakas,
                  Quechua, Yakut).
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Cultural Content Library</h3>
                <p className="text-slate-600 leading-relaxed">
                  Comprehensive database of Kazakh traditions, folklore, genealogy, cuisine, music, and ceremonial
                  practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Cross-Platform Access</h3>
                <p className="text-slate-600 leading-relaxed">
                  Available across devices with LMS integration for educational institutions and offline event support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Cultural Revival Movement</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Be part of preserving Kazakh heritage for future generations. Start your journey with AsylAI today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
              Start Learning Kazakh
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              >
                Explore More
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
