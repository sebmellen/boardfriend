import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Check } from "lucide-react"
import Link from "next/link"
import { Literata } from 'next/font/google'

const literata = Literata({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-literata'
})

export default function HomePage() {
  return (
    <div className={`min-h-screen bg-white ${literata.variable}`}>
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/marketing" className={`text-2xl font-medium tracking-tight text-gray-900 ${literata.className}`}>
            Board<span className="text-[#E55039]">Friend</span>
          </Link>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
              <Link href="/marketing/features" className="hover:text-[#E55039] transition-colors">Features</Link>
              <Link href="/marketing/pricing" className="hover:text-[#E55039] transition-colors">Pricing</Link>
              <Link href="/marketing/design-philosophy" className="hover:text-[#E55039] transition-colors">Design Philosophy</Link>
              <a href="#" className="hover:text-[#E55039] transition-colors">Support</a>
            </nav>
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
              Sign In
            </Button>
            <Button className="bg-[#E55039] hover:bg-[#CC3D1F] text-white shadow-sm">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF2EF] via-white to-[#FBF7F5]"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-[#E55039] mb-6 tracking-wide uppercase">
                For Medical Students
              </div>
              <h1 className={`text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-8 ${literata.className}`}>
                AI-powered board preparation that actually <span className="text-[#E55039]">works</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop wasting time on inefficient study methods. BoardFriend analyzes your performance across UWorld, TrueLearn, and Amboss to identify exactly what you need to study—and what you don't.
              </p>
              <div className="flex items-center space-x-4 mb-12">
                <Button size="lg" className="bg-[#E55039] hover:bg-[#CC3D1F] text-white px-8 py-4 shadow-sm">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="ghost" size="lg" className="text-gray-700 hover:text-[#E55039] px-8 py-4">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-[#E55039]" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-[#E55039]" />
                  No credit card required
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#FDF2EF] to-[#FBF7F5] rounded-lg h-96 flex items-center justify-center border border-[#F5C4B0]">
              <div className="text-[#F2A085] text-center">
                <div className="w-16 h-16 bg-[#F2A085] rounded-lg mx-auto mb-4"></div>
                <p className="text-sm text-[#E55039]">Product Screenshot</p>
                <p className="text-xs text-[#CC3D1F]">Dashboard Interface</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative bg-gray-50 py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className={`text-4xl font-light text-gray-900 mb-8 ${literata.className}`}>
              You're studying <span className="text-[#E55039]">harder</span>, not smarter
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Traditional question banks give you the right answer and a brief explanation, but they don't teach you how to think through similar problems. You're left memorizing facts instead of building the clinical reasoning skills you need for boards and practice.
              </p>
              <p>
                BoardFriend changes this by acting as your personal AI tutor. It analyzes your thinking patterns, identifies conceptual gaps, and provides detailed explanations that help you understand the underlying principles—not just the correct answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
            <div>
              <h3 className={`text-3xl font-light text-gray-900 mb-6 ${literata.className}`}>
                Personalized AI tutoring that <span className="text-[#E55039]">adapts</span> to you
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike static explanations in question banks, BoardFriend tailors its teaching to your specific knowledge gaps and learning style. It breaks down complex concepts, draws connections between topics, and helps you build the clinical reasoning framework you need for long-term success.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                  <span>Explanations that adapt to your current understanding level</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                  <span>Clinical reasoning frameworks, not just facts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                  <span>Connects concepts across UWorld, TrueLearn, and Amboss</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#FDF2EF] to-[#FBF7F5] rounded-lg h-80 flex items-center justify-center border border-[#F5C4B0]">
              <div className="text-[#F2A085] text-center">
                <div className="w-16 h-16 bg-[#F2A085] rounded-lg mx-auto mb-4"></div>
                <p className="text-sm text-[#E55039]">AI Analysis Screenshot</p>
                <p className="text-xs text-[#CC3D1F]">Question Review Interface</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
            <div className="bg-gradient-to-br from-[#FDF2EF] to-[#FBF7F5] rounded-lg h-80 flex items-center justify-center border border-[#F5C4B0] lg:order-first">
              <div className="text-[#F2A085] text-center">
                <div className="w-16 h-16 bg-[#F2A085] rounded-lg mx-auto mb-4"></div>
                <p className="text-sm text-[#E55039]">Analytics Dashboard</p>
                <p className="text-xs text-[#CC3D1F]">Performance Tracking</p>
              </div>
            </div>
            <div>
              <h3 className={`text-3xl font-light text-gray-900 mb-6 ${literata.className}`}>
                <span className="text-[#E55039]">Predictive</span> performance insights
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Know exactly where you stand before exam day. Our algorithms analyze your performance patterns to predict your likely score ranges and identify the highest-impact areas for improvement.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                  <span>Real-time performance predictions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                  <span>Topic-specific strength and weakness analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                  <span>Optimized study schedules based on your timeline</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className={`text-3xl font-light text-gray-900 mb-6 ${literata.className}`}>
                <span className="text-[#E55039]">Seamless</span> workflow integration
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                BoardFriend works with your existing study routine. Connect your question bank accounts and let our AI analyze your performance data to provide actionable insights without changing how you study.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                  <span>One-click integration with major question banks</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                  <span>Automatic performance data synchronization</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                  <span>Cross-platform analytics and recommendations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#FDF2EF] to-[#FBF7F5] rounded-lg h-80 flex items-center justify-center border border-[#F5C4B0]">
              <div className="text-[#F2A085] text-center">
                <div className="w-16 h-16 bg-[#F2A085] rounded-lg mx-auto mb-4"></div>
                <p className="text-sm text-[#E55039]">Integration Setup</p>
                <p className="text-xs text-[#CC3D1F]">Question Bank Connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative bg-gradient-to-r from-[#FDF2EF] via-white to-[#FBF7F5] py-24 border-y border-[#F5C4B0] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl font-light text-gray-900 mb-12 ${literata.className}`}>
              Trusted by medical students at <span className="text-[#E55039]">top programs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-sm text-[#CC3D1F] font-medium">
              <div>Harvard Medical School</div>
              <div>Johns Hopkins School of Medicine</div>
              <div>Stanford School of Medicine</div>
              <div>UCSF School of Medicine</div>
              <div>Mayo Clinic Alix School of Medicine</div>
              <div>Washington University School of Medicine</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-4xl font-light text-gray-900 mb-8 ${literata.className}`}>
            Experience tutoring that actually <span className="text-[#E55039]">teaches</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Stop settling for basic explanations. Get the personalized AI tutoring that helps you understand medicine at a deeper level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-[#E55039] hover:bg-[#CC3D1F] text-white px-8 py-4 shadow-sm">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-[#F5C4B0] text-[#CC3D1F] hover:bg-[#FDF2EF] px-8 py-4">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-2xl font-medium tracking-tight text-gray-900 mb-4 md:mb-0 ${literata.className}`}>
              Board<span className="text-[#E55039]">Friend</span>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <a href="#" className="hover:text-[#E55039] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#E55039] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#E55039] transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 BoardFriend. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}