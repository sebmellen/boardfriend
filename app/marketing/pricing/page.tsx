import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Literata } from 'next/font/google'

const literata = Literata({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-literata'
})

export default function PricingPage() {
  return (
    <div className={`min-h-screen bg-white ${literata.variable}`}>
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/marketing" className="text-2xl font-light tracking-tight text-gray-900">
            Board<span className="text-[#E55039]">Friend</span>
          </Link>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
              <Link href="/marketing/features" className="hover:text-[#E55039] transition-colors">Features</Link>
              <Link href="/marketing/pricing" className="text-[#E55039] font-medium">Pricing</Link>
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
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sm font-medium text-[#E55039] mb-6 tracking-wide uppercase">
            Simple, Transparent Pricing
          </div>
          <h1 className={`text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-8 ${literata.className}`}>
            Choose the plan that fits your <span className="text-[#E55039]">study timeline</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            All plans include full access to AI tutoring, performance analytics, and question bank integrations. No hidden fees, no complicated tiers.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Monthly Plan */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-light text-gray-900 mb-2">Monthly</h3>
              <p className="text-gray-600 mb-6">Perfect for short-term preparation</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-light text-gray-900">$49</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Unlimited AI tutoring sessions</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Performance analytics dashboard</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">UWorld, TrueLearn, Amboss integration</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Predictive score modeling</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Email support</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50">
              Start Free Trial
            </Button>
          </div>

          {/* Semester Plan - Featured */}
          <div className="border-2 border-[#E55039] rounded-lg p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#E55039] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-light text-gray-900 mb-2">Semester</h3>
              <p className="text-gray-600 mb-6">Ideal for comprehensive preparation</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-light text-gray-900">$129</span>
                <span className="text-gray-500 ml-2">/4 months</span>
              </div>
              <p className="text-sm text-[#E55039] mt-2">$32.25/month • Save 34%</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Everything in Monthly</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Priority AI response times</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Advanced study schedule optimization</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Detailed progress reports</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Chat and email support</span>
              </li>
            </ul>
            
            <Button className="w-full bg-[#E55039] hover:bg-[#CC3D1F] text-white">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Annual Plan */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-light text-gray-900 mb-2">Annual</h3>
              <p className="text-gray-600 mb-6">Complete medical school support</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-light text-gray-900">$299</span>
                <span className="text-gray-500 ml-2">/year</span>
              </div>
              <p className="text-sm text-[#E55039] mt-2">$24.92/month • Save 49%</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Everything in Semester</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Multi-exam preparation support</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Custom study plan creation</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">1-on-1 strategy consultations</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 text-[#E55039]" />
                <span className="text-gray-600">Priority support with dedicated rep</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-light text-gray-900 mb-12 text-center ${literata.className}`}>
              Frequently asked questions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Can I switch plans during my subscription?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  What question banks do you integrate with?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We currently support UWorld, TrueLearn, and Amboss with more integrations planned. Our AI can analyze performance data from any of these platforms.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Is there really a free trial?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, all plans include a 14-day free trial with full access to all features. No credit card required to start, and you can cancel anytime during the trial.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  How does the AI tutoring work?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI analyzes your question performance patterns, identifies knowledge gaps, and provides personalized explanations tailored to your learning style and current understanding level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-4xl font-light text-gray-900 mb-8 ${literata.className}`}>
            Ready to <span className="text-[#E55039]">optimize</span> your board preparation?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Start your free trial today and experience the difference AI-powered studying can make.
          </p>
          <Button size="lg" className="bg-[#E55039] hover:bg-[#CC3D1F] text-white px-8 py-4">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <p className="text-sm text-gray-500 mt-6">
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