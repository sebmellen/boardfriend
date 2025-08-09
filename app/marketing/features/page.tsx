import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, BarChart3, Zap, Target, Users, Clock, CheckCircle, TrendingUp, BookOpen, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"
 

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "Adaptive AI Tutoring",
      description: "Our AI doesn't just give you answers—it teaches you to think like a physician. Each explanation adapts to your knowledge level and learning style.",
      details: [
        "Personalized explanations based on your performance history",
        "Clinical reasoning frameworks, not just memorization",
        "Connects concepts across different question banks",
        "Identifies and fills knowledge gaps systematically"
      ]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Know exactly where you stand before exam day. Our algorithms predict your performance and identify the highest-impact study areas.",
      details: [
        "Real-time score predictions with confidence intervals",
        "Topic-specific strength and weakness analysis",
        "Performance trend tracking over time",
        "Comparative benchmarking against peers"
      ]
    },
    {
      icon: Zap,
      title: "Smart Study Optimization",
      description: "Stop wasting time on topics you've mastered. Our AI creates personalized study schedules that maximize your score improvement.",
      details: [
        "Dynamic study plans that adapt to your progress",
        "Optimal review timing based on forgetting curves",
        "Priority ranking of topics by impact potential",
        "Time allocation recommendations"
      ]
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Laser-focus your preparation on the concepts that matter most. Our system identifies exactly what you need to study.",
      details: [
        "Granular topic analysis down to specific concepts",
        "Weakness identification across question banks",
        "Targeted practice recommendations",
        "Progress tracking at the micro-level"
      ]
    },
    {
      icon: BookOpen,
      title: "Universal Integration",
      description: "Seamlessly connects with UWorld, TrueLearn, Amboss, and more. One dashboard for all your question bank data.",
      details: [
        "One-click integration with major platforms",
        "Automatic data synchronization",
        "Cross-platform performance analysis",
        "Unified progress tracking"
      ]
    },
    {
      icon: Lightbulb,
      title: "Clinical Reasoning Engine",
      description: "Develop the thinking patterns of expert physicians. Our AI helps you build systematic approaches to complex problems.",
      details: [
        "Step-by-step reasoning breakdowns",
        "Pattern recognition training",
        "Differential diagnosis frameworks",
        "Clinical decision-making practice"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/marketing" className="text-2xl font-light tracking-tight text-gray-900">
            Board<span className="text-[#E55039]">Friend</span>
          </Link>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
              <a href="#" className="text-[#E55039] font-medium">Features</a>
              <Link href="/marketing/pricing" className="hover:text-[#E55039] transition-colors">Pricing</Link>
              <Link href="/marketing/design-philosophy" className="hover:text-[#E55039] transition-colors">Design Philosophy</Link>
              <a href="#" className="hover:text-[#E55039] transition-colors">Support</a>
            </nav>
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
              Sign In
            </Button>
            <Button className="bg-[#E55039] hover:bg-[#CC3D1F] text-white">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF2EF] via-white to-[#FBF7F5]"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-[#E55039] mb-6 tracking-wide uppercase">
              Powerful Features
            </div>
            <h1 className="text-6xl lg:text-7xl font-light leading-tight text-gray-900 mb-8">
              AI that thinks like a <span className="text-[#E55039]">physician</span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl">
              BoardFriend doesn't just help you memorize facts—it teaches you to think systematically, reason clinically, and approach problems like the expert physician you're becoming.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Everything you need to <span className="text-[#E55039]">excel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six powerful features working together to transform how you prepare for board exams
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={index} 
                  className={`group relative ${isEven ? 'lg:mt-0' : 'lg:mt-16'}`}
                >
                  {/* Background Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-[#FDF2EF] rounded-2xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#E55039] rounded-xl flex items-center justify-center group-hover:bg-[#CC3D1F] transition-colors">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-[#E55039] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        <ul className="space-y-3">
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#F2A085] flex-shrink-0" />
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="bg-gray-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-[#E55039] to-gray-900 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-white mb-8">
                See BoardFriend in <span className="text-[#F2A085]">action</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Watch how our AI analyzes a complex cardiology question, identifies your knowledge gaps, and provides a personalized explanation that builds your clinical reasoning skills.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#F2A085] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">1</span>
                  </div>
                  <span className="text-gray-300">AI analyzes your answer and reasoning process</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#F2A085] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">2</span>
                  </div>
                  <span className="text-gray-300">Identifies specific knowledge gaps and misconceptions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#F2A085] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">3</span>
                  </div>
                  <span className="text-gray-300">Provides targeted explanation tailored to your level</span>
                </div>
              </div>
              
              <Button className="bg-[#F2A085] hover:bg-[#CC3D1F] text-white px-8 py-4">
                Watch Interactive Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-500 ml-4">BoardFriend AI Tutor</span>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Question Analysis</p>
                        <p className="text-gray-900">Based on your answer, I can see you understand the basic pathophysiology but missed the key diagnostic criteria...</p>
                      </div>
                      
                      <div className="bg-[#FDF2EF] p-4 rounded-lg border-l-4 border-[#E55039]">
                        <p className="text-sm text-[#E55039] mb-2">Personalized Explanation</p>
                        <p className="text-gray-900">Let me walk you through the systematic approach to heart failure diagnosis...</p>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>Generating personalized study plan...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Works with your <span className="text-[#E55039]">existing workflow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BoardFriend integrates seamlessly with the question banks you already use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-24 h-24 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">UWorld</h3>
              <p className="text-gray-600">Complete integration with performance tracking and AI analysis</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-purple-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Amboss</h3>
              <p className="text-gray-600">Deep analytics and personalized study recommendations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <div className="w-12 h-12 bg-green-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">TrueLearn</h3>
              <p className="text-gray-600">Unified dashboard with cross-platform insights</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FDF2EF] to-[#FBF7F5] rounded-2xl p-12 border border-[#F5C4B0]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-6">
                  One dashboard, <span className="text-[#E55039]">unlimited insights</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Connect all your question banks in minutes and let our AI create a comprehensive view of your preparation progress.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-[#F2A085]" />
                    <span className="text-gray-700">Secure, read-only access to your data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-[#F2A085]" />
                    <span className="text-gray-700">Real-time synchronization across platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#F2A085]" />
                    <span className="text-gray-700">Anonymous benchmarking with peers</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">OVERALL PROGRESS</span>
                      <span className="text-2xl font-light text-[#F2A085]">73%</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">UWorld</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-500">78%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Amboss</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-14 h-2 bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-500">71%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">TrueLearn</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-12 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-500">68%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-[#E55039] to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light text-white mb-8">
            Ready to study <span className="text-[#F2A085]">smarter</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of medical students who are already using BoardFriend to transform their board preparation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-[#F2A085] hover:bg-[#CC3D1F] text-white px-12 py-4 text-lg">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-[#F2A085] text-[#F2A085] hover:bg-[#F2A085] hover:text-gray-900 px-12 py-4 text-lg">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-8">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-light tracking-tight text-gray-900 mb-4 md:mb-0">
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