"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, ArrowLeft, Clock, Sparkles, Bell, Calendar, Rocket } from "lucide-react"

export default function StartPage() {
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
              <Link href="/explore" className="text-slate-600 hover:text-slate-900 transition-colors">
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
              <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-700">
                Coming Soon
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Скоро...
                <span className="block bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                We're working hard to bring you the most authentic cultural learning experience with AsylAI. Our
                platform will be available soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Animation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-16">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <Clock className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Мы усердно работаем над платформой</h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  We're building something amazing for cultural preservation and learning
                </p>
                <div className="flex items-center justify-center space-x-2 text-slate-400">
                  <Sparkles className="h-5 w-5 animate-spin" />
                  <span>Development in progress</span>
                  <Sparkles className="h-5 w-5 animate-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Coming</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here's what you can expect when Back2Roots launches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/images/traditional-kazakh-woman.jpg"
                    alt="AsylAI Avatar"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Meet AsylAI</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your personal Kazakh cultural guide powered by advanced AI and MetaHuman technology
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/images/mongolian-woman-yurt.png"
                    alt="Virtual Village"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Virtual Village</h3>
                <p className="text-slate-600 leading-relaxed">
                  Explore authentic Kazakh villages and learn about traditions through interactive experiences
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/images/vr-cultural-interaction.jpg"
                    alt="VR Experience"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">VR/AR Integration</h3>
                <p className="text-slate-600 leading-relaxed">
                  Immersive cultural experiences with cutting-edge virtual and augmented reality
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Development Timeline</h2>
            <p className="text-lg text-slate-600">Our roadmap to bringing you the best cultural learning experience</p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-xl font-semibold text-slate-900">MVP Launch</h3>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        Q2 2025
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Initial release with AsylAI avatar, basic Kazakh language learning, and core cultural content
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span>Expected: April - June 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-xl font-semibold text-slate-900">Enhanced Features</h3>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                        Q4 2025
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Virtual village exploration, quest system, and educational institution integration
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span>Expected: October - December 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-xl font-semibold text-slate-900">VR/AR Integration</h3>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        2026
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Full VR/AR support with Meta Quest, Apple Vision Pro, and mobile AR experiences
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span>Expected: 2026</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notify Me */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Bell className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get Notified When We Launch</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Be the first to experience AsylAI and start your cultural learning journey
            </p>
          </div>

          <Card className="border-0 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3">
                    <Bell className="mr-2 h-5 w-5" />
                    Notify Me at Launch
                  </Button>
                </div>
                <p className="text-sm text-slate-500">
                  We'll send you an email when Back2Roots is ready. No spam, we promise!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Connected</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Follow our journey as we build the future of cultural preservation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              >
                Learn About Features
              </Button>
            </Link>
            <Link href="/technology">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              >
                Explore Technology
              </Button>
            </Link>
          </div>

          <div className="text-center text-slate-400">
            <p className="mb-2">Questions? Contact us at:</p>
            <a href="mailto:hello@back2roots.ai" className="text-white hover:text-slate-300 transition-colors">
              hello@back2roots.ai
            </a>
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
