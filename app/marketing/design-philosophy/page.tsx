import Link from "next/link"
 

export default function DesignPhilosophyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/marketing" className="text-2xl font-light tracking-tight text-gray-900">
            Board<span className="text-[#E55039]">Friend</span>
          </Link>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
              <Link href="/marketing/features" className="hover:text-[#E55039] transition-colors">Features</Link>
              <Link href="/marketing/pricing" className="hover:text-[#E55039] transition-colors">Pricing</Link>
              <Link href="/marketing/design-philosophy" className="text-[#E55039] font-medium">Design Philosophy</Link>
              <a href="#" className="hover:text-[#E55039] transition-colors">Support</a>
            </nav>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-24 relative overflow-hidden">
        <div className="max-w-3xl relative">
          <div className="text-sm font-medium text-[#E55039] mb-6 tracking-wide uppercase">
            Design Philosophy & Guidelines
          </div>
          <h1 className="text-5xl font-light leading-tight text-gray-900 mb-12">
            Clinical <span className="text-[#E55039]">precision</span> meets digital clarity
          </h1>
          
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              BoardFriend's design philosophy draws inspiration from the precision, clarity, and professionalism inherent in medical practice. Every design decision reflects the serious, focused nature of medical education while maintaining approachability and ease of use.
            </p>

            <h2 className="text-3xl font-light text-gray-900 mb-6 mt-16">
              Core Design Principles
            </h2>
            
            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Restraint over excess
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We deliberately avoid the colorful, gradient-heavy aesthetics common in consumer applications. Instead, we embrace a monochromatic palette anchored by sophisticated grays and clean whites, with strategic use of deep charcoal (gray-900) as our primary accent and <span className="text-[#E55039] font-medium">teal</span> for purposeful highlights. This restraint mirrors the focused, distraction-free environment that medical professionals require.
            </p>

            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Typography as communication
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our typographic choices prioritize legibility and hierarchy. We use light font weights (font-light) for headlines to create an elegant, approachable feel while maintaining the authority expected in medical contexts. The generous use of white space around text elements ensures comfortable reading during long study sessions.
            </p>

            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Asymmetry and breathing room
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Rather than relying on centered layouts and uniform card grids, we employ asymmetrical compositions that guide the eye naturally through content. Large sections of white space aren't empty—they're intentional pauses that allow complex information to be processed without cognitive overload.
            </p>

            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Subtle visual depth
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We enhance our clean foundation with carefully placed <span className="text-[#E55039] font-medium">gradient backgrounds</span> that create depth while maintaining the clinical precision our users expect. Soft gradients in our scrub blue palette add visual interest without compromising the professional aesthetic.
            </p>

            <h2 className="text-3xl font-light text-gray-900 mb-6 mt-20">
              UI Design Guidelines
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              These guidelines can be applied across AI tools and professional applications to maintain consistency and sophistication.
            </p>

            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Color System
            </h3>
            <div className="bg-gradient-to-br from-[#FDF2EF] to-[#FBF7F5] p-6 rounded-lg mb-8 border border-[#F5C4B0]">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Primary Palette</h4>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li><strong>Primary Text:</strong> gray-900 (#111827) - For headlines and primary content</li>
                <li><strong>Secondary Text:</strong> gray-600 (#4B5563) - For body text and descriptions</li>
                <li><strong>Tertiary Text:</strong> gray-500 (#6B7280) - For metadata and supporting information</li>
                <li><strong>Background:</strong> white (#FFFFFF) - Primary background</li>
                <li><strong>Surface:</strong> gray-50 (#F9FAFB) - Secondary backgrounds and cards</li>
                <li><strong>Border:</strong> gray-100 (#F3F4F6) - Subtle divisions and borders</li>
              </ul>
              
              <h4 className="text-lg font-medium text-gray-900 mb-4">Brand Accent Color</h4>
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-8 h-8 bg-[#E55039] rounded border border-[#CC3D1F]"></div>
                  <div>
                    <p className="text-gray-900 font-medium">Medical Orange</p>
                    <p className="text-sm text-gray-600">#E55039</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Our signature medical orange evokes energy, focus, and clinical precision associated with medical practice. This vibrant orange serves as our primary brand accent, used strategically for:
                </p>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• Primary call-to-action buttons</li>
                  <li>• Brand name highlights</li>
                  <li>• Navigation active states</li>
                  <li>• Success indicators and confirmations</li>
                  <li>• Key interactive elements</li>
                </ul>
              </div>

              <h4 className="text-lg font-medium text-gray-900 mb-4">Supporting Colors (Use Sparingly)</h4>
              <p className="text-gray-600 mb-4">
                Color should be used strategically to convey meaning, not decoration. When additional color is necessary:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Success/Positive:</strong> #F2A085 (lighter orange) - For confirmations, success states</li>
                <li><strong>Warning/Attention:</strong> amber-600 (#D97706) - For warnings, important notices</li>
                <li><strong>Error/Negative:</strong> red-600 (#DC2626) - For errors, destructive actions</li>
                <li><strong>Information/Neutral:</strong> #CC3D1F (darker orange) - For informational content, links</li>
              </ul>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Gradient Backgrounds & Visual Depth
            </h3>
            <div className="bg-gradient-to-r from-[#FDF2EF] via-white to-[#FBF7F5] p-6 rounded-lg mb-8 border border-[#F5C4B0]">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Gradient Usage</h4>
              <p className="text-gray-600 mb-4">
                Subtle gradients add visual interest while maintaining professionalism:
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li><strong>Hero Sections:</strong> bg-gradient-to-br from-[#FDF2EF] via-white to-[#FBF7F5]</li>
                <li><strong>Feature Cards:</strong> bg-gradient-to-br from-[#FDF2EF] to-[#FBF7F5]</li>
                <li><strong>Social Proof:</strong> bg-gradient-to-r from-[#FDF2EF] via-white to-[#FBF7F5]</li>
                <li><strong>Dark Sections:</strong> bg-gradient-to-br from-gray-900 via-[#E55039] to-gray-900</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-900 mb-4">Color Variations</h4>
              <p className="text-gray-600 mb-4">
                Our medical orange palette provides consistent variations:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Primary:</strong> #E55039 - Main brand color</li>
                <li><strong>Darker:</strong> #CC3D1F - Hover states, darker elements</li>
                <li><strong>Lighter:</strong> #F2A085 - Secondary elements, success states</li>
                <li><strong>Very Light:</strong> #FDF2EF - Subtle backgrounds</li>
                <li><strong>Border:</strong> #F5C4B0 - Borders and dividers</li>
              </ul>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Typography Scale
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-4 text-gray-600">
                <li><strong>Hero Headlines:</strong> text-5xl to text-6xl, font-light, tight line-height</li>
                <li><strong>Section Headlines:</strong> text-3xl to text-4xl, font-light</li>
                <li><strong>Subsection Headlines:</strong> text-2xl, font-light</li>
                <li><strong>Body Large:</strong> text-xl, regular weight, relaxed line-height</li>
                <li><strong>Body Regular:</strong> text-base, regular weight</li>
                <li><strong>Body Small:</strong> text-sm, regular weight</li>
                <li><strong>Metadata/Labels:</strong> text-xs to text-sm, font-medium, uppercase, tracked</li>
              </ul>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Component Guidelines
            </h3>
            
            <h4 className="text-lg font-medium text-gray-900 mb-3 mt-8">Buttons</h4>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="space-y-3 text-gray-600">
                <li><strong>Primary:</strong> bg-[#E55039], white text, hover:bg-[#CC3D1F]</li>
                <li><strong>Secondary:</strong> border-gray-200, gray-700 text, transparent background</li>
                <li><strong>Ghost:</strong> No background, gray-700 text, hover:text-[#E55039]</li>
                <li><strong>Sizing:</strong> Generous padding (px-8 py-4 for large), comfortable touch targets</li>
                <li><strong>States:</strong> Subtle hover effects to darker orange, no dramatic transformations</li>
              </ul>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Accessibility Standards
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-4 text-gray-600">
                <li><strong>Contrast:</strong> Medical orange (#E55039) meets WCAG AA standards against white backgrounds</li>
                <li><strong>Focus Indicators:</strong> Clear, visible focus states using medical orange</li>
                <li><strong>Touch Targets:</strong> Minimum 44px for interactive elements</li>
                <li><strong>Alt Text:</strong> Descriptive alternative text for all meaningful images</li>
                <li><strong>Semantic HTML:</strong> Proper heading hierarchy and landmark elements</li>
              </ul>
            </div>

            <h2 className="text-3xl font-light text-gray-900 mb-6 mt-20">
              The Medical Orange Philosophy
            </h2>
            
            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Why Medical Orange?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our choice of medical orange (#E55039) as the primary brand color is deeply intentional:
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li><strong>Energy & Focus:</strong> Orange conveys energy, enthusiasm, and focused attention—essential for effective studying</li>
              <li><strong>Psychological Impact:</strong> Orange stimulates mental activity and promotes confidence, perfect for medical education</li>
              <li><strong>Professional Warmth:</strong> The deeper shade suggests expertise while maintaining approachability</li>
              <li><strong>Visual Accessibility:</strong> Provides excellent contrast against white backgrounds while being energizing during study sessions</li>
              <li><strong>Memorable Identity:</strong> Orange creates a distinctive, memorable brand presence in the medical education space</li>
            </ul>

            <h3 className="text-2xl font-light text-gray-900 mb-4 mt-12">
              Color Usage Strategy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              While our foundation remains monochromatic, strategic medical orange usage enhances usability:
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li><strong>Brand Identity:</strong> Use #E55039 for brand moments and primary CTAs</li>
              <li><strong>Hierarchy:</strong> Medical orange accents support information hierarchy</li>
              <li><strong>Interactive States:</strong> Consistent hover and focus states using #CC3D1F</li>
              <li><strong>Success Indicators:</strong> Lighter orange (#F2A085) for positive feedback</li>
              <li><strong>Visual Interest:</strong> Gradients using our orange palette add depth without distraction</li>
              <li><strong>Professional Context:</strong> Reinforces the energetic, focused medical education environment</li>
            </ul>

            <div className="border-t border-gray-100 mt-16 pt-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                This design philosophy creates digital environments that feel appropriate for serious medical education while remaining approachable and energizing. The strategic use of <span className="text-[#E55039] font-medium">medical orange</span> and <span className="text-[#E55039] font-medium">subtle gradients</span> adds warmth and visual interest to our monochromatic foundation, creating design that motivates and energizes medical students while allowing them to focus on what matters most: mastering the knowledge and skills they need to become excellent physicians.
              </p>
            </div>
          </div>
        </div>
      </article>

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