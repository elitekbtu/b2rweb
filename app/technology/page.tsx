"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Brain, Users, Zap, ArrowLeft, Mic, Eye, Code, Database, Monitor, Smartphone } from "lucide-react"

export default function TechnologyPage() {
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
              <Link href="/technology" className="text-slate-900 font-medium">
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
                Cutting-Edge Technology
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Technology Behind
                <span className="block bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent">
                  Cultural Preservation
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Discover the advanced AI and 3D technologies that power Back2Roots, creating immersive experiences for
                preserving and sharing Kazakh cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Technologies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Advanced technologies powering cultural preservation and immersive learning experiences
            </p>
          </div>

          {/* Unreal Engine 5.4 */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 w-fit">
                3D Visualization Engine
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Unreal Engine 5.4</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The foundation of our immersive cultural experiences. Unreal Engine 5.4 provides advanced visualization
                and environment creation capabilities, enabling us to build photorealistic Kazakh villages, traditional
                yurts, and authentic cultural settings where users can explore and interact.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Lumen global illumination for realistic lighting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Monitor className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Nanite virtualized geometry for detailed environments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Real-time ray tracing for authentic material rendering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Cross-platform deployment (PC, Mobile, Console)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/vr-cultural-interaction.jpg"
                  alt="Unreal Engine 5.4 powered cultural environment"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>

          {/* MetaHuman */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/traditional-kazakh-woman.jpg"
                  alt="MetaHuman avatar design for AsylAI"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-700 w-fit">
                Avatar Design Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">MetaHuman Creator</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                MetaHuman Creator enables us to design AsylAI with authentic Kazakh facial features, traditional
                clothing, and culturally appropriate expressions. This technology ensures our AI avatar represents
                Kazakh culture with respect and accuracy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Photorealistic facial animation and expressions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Authentic Kazakh cultural appearance design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Real-time lip-sync with Kazakh speech patterns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Code className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Traditional clothing and accessories integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Azure Speech */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 w-fit">
                Speech Recognition & Synthesis
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Azure Speech Services</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Microsoft Azure Speech Services powers our Kazakh language processing capabilities. We've trained a
                custom NLP model specifically for the Kazakh language, enabling natural conversation, accurate speech
                recognition, and authentic pronunciation guidance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Mic className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Custom Kazakh language model with 95%+ accuracy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Real-time speech-to-text and text-to-speech conversion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Pronunciation assessment and correction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Multi-dialect Kazakh language support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mongolian-woman-yurt.png"
                  alt="Azure Speech Services for Kazakh language processing"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>

          {/* Gemini AI */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Gemini AI</h3>
                  <p className="text-slate-300">Intelligent Dialogue Generation</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-700 w-fit">
                AI Dialogue Generation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Gemini AI Integration</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Google's Gemini AI powers AsylAI's intelligent dialogue generation and contextual responses. The AI
                understands cultural nuances, generates appropriate responses about Kazakh traditions, and maintains
                authentic cultural context throughout conversations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Cultural context-aware response generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Personalized learning path adaptation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Real-time cultural knowledge retrieval</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Multi-language dialogue support for localization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future AR/VR Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700">
              Future Technology Integration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AR/VR Expansion Roadmap</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Planned integration with leading AR/VR platforms for enhanced immersive cultural experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Meta Quest */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Meta Quest Integration</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Full VR immersion with Meta Quest headsets, allowing users to walk through virtual Kazakh villages and
                  interact with cultural objects in 3D space.
                </p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Coming 2026
                </Badge>
              </CardContent>
            </Card>

            {/* Apple Vision Pro */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Apple Vision Pro</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Mixed reality experiences combining real-world environments with digital cultural elements, perfect
                  for educational institutions and museums.
                </p>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Planned 2026
                </Badge>
              </CardContent>
            </Card>

            {/* Mobile AR */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Mobile AR</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Augmented reality features for smartphones and tablets, bringing cultural artifacts and AsylAI into
                  real-world environments through device cameras.
                </p>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Beta 2025
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* AR/VR Features Preview */}
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-12 text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Immersive Cultural Experiences</h3>
                  <p className="text-lg text-indigo-200 mb-8 leading-relaxed">
                    Future AR/VR integration will enable users to step inside traditional yurts, participate in virtual
                    cultural ceremonies, and interact with AsylAI in fully immersive 3D environments.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Eye className="h-6 w-6" />
                      </div>
                      <h4 className="font-semibold mb-2">360° Cultural Immersion</h4>
                      <p className="text-sm text-indigo-200">Experience authentic Kazakh environments in full VR</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="h-6 w-6" />
                      </div>
                      <h4 className="font-semibold mb-2">Interactive Ceremonies</h4>
                      <p className="text-sm text-indigo-200">Participate in traditional rituals and celebrations</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h4 className="font-semibold mb-2">Spatial Audio</h4>
                      <p className="text-sm text-indigo-200">3D audio with traditional Kazakh music and sounds</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Localization Technology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Global Localization Framework</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Scalable technology architecture designed for expanding to other indigenous cultures worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-teal-100 text-teal-700 w-fit">
                Scalable Architecture
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Multi-Cultural Platform</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our platform is built with localization in mind, featuring modular architecture that can adapt to
                different languages, cultural contexts, and indigenous traditions worldwide.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Planned Cultural Expansions:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-slate-700">Māori (New Zealand)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-slate-700">Khakas (Russia)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-slate-700">Quechua (Peru)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-slate-700">Yakut (Sakha)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <Globe className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-700">Modular language processing system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-700">Cultural avatar customization framework</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <Database className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-700">Flexible cultural content management system</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Language Models</h4>
                  <p className="text-sm text-slate-600">Custom NLP training for each indigenous language</p>
                </Card>

                <Card className="border-0 shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Cultural Avatars</h4>
                  <p className="text-sm text-slate-600">Authentic representation for each culture</p>
                </Card>

                <Card className="border-0 shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Content Library</h4>
                  <p className="text-sm text-slate-600">Structured cultural knowledge database</p>
                </Card>

                <Card className="border-0 shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Global Deployment</h4>
                  <p className="text-sm text-slate-600">Cloud infrastructure for worldwide access</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-700">
              In Development
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Application Status</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Back2Roots is currently in active development. Technical specifications and detailed performance metrics
              will be available as we progress through our development phases.
            </p>
            <Card className="border-0 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">MVP Development Phase</h3>
                <p className="text-slate-600 leading-relaxed">
                  We are currently building the core functionality with Unreal Engine 5.4, MetaHuman, Azure Speech, and
                  Gemini AI integration. Stay tuned for updates on our progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Development Roadmap</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our technology evolution plan for expanding cultural preservation capabilities
            </p>
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
                      <h3 className="text-xl font-semibold text-slate-900">MVP Development</h3>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        2025 Q1-Q2
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Core AsylAI avatar development, basic Kazakh language processing, and fundamental cultural content
                      integration.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>MetaHuman Integration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Basic AI Conversations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Cultural Database v1</span>
                      </div>
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
                        2025 Q3-Q4
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Advanced quest system, VR integration, educational tools, and expanded cultural content library.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>VR/AR Support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Quest System</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>LMS Integration</span>
                      </div>
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
                      <h3 className="text-xl font-semibold text-slate-900">Global Expansion</h3>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        2026+
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Multi-cultural platform expansion, supporting indigenous cultures worldwide with localized AI
                      avatars and content.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Multi-language Support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Cultural Localization</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Global Partnerships</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience Our Technology</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Ready to explore how cutting-edge technology preserves cultural heritage? Join our platform and experience
            the future of cultural education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
              Try the Platform
            </Button>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              >
                Explore Features
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
