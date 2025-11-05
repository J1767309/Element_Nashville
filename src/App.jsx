import './App.css'
import { useState } from 'react'
import { Phone, Mail, MapPin, ChefHat, ParkingCircle, Dumbbell, Zap, Wifi, Shirt, DoorOpen, Award, Check, Smartphone } from 'lucide-react'
import heroImage from './assets/element-nashville-exterior-night.webp'
import exteriorImage from './assets/element-nashville-exterior-twilight.webp'
import room1 from './assets/element-nashville-room-king-1.webp'
import room2 from './assets/element-nashville-room-king-2.webp'
import room3 from './assets/element-nashville-room-king-3.webp'
import room4 from './assets/element-nashville-room-kitchen.webp'
import room5 from './assets/element-nashville-room-queen-1.webp'
import lobby3 from './assets/element-nashville-lobby.webp'
import patio from './assets/element-nashville-pool.webp'
import constructionWorker from './assets/construction-worker.jpg'
import techProfessional from './assets/tech-professional.jpg'
import corporateTrainer from './assets/corporate-trainer.jpg'
import marriottBonvoyLogo from './assets/Marriott-Bonvoy-Logo.png'
import elementLogo from './assets/Marriott-Bonvoy-Logo.png'

function App() {
  const [stayDays, setStayDays] = useState(30)

  // Calculate savings based on number of days
  const calculateSavings = (days) => {
    const months = days / 30
    const dailySavings = 750 / 30 // $750 per month = $25 per day
    return {
      totalSavings: Math.round(dailySavings * days),
      withoutKitchen: Math.round((1500 / 30) * days),
      withKitchen: Math.round((750 / 30) * days),
      monthlySavings: 750
    }
  }

  const savings = calculateSavings(stayDays)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-start">
                <div className="text-2xl font-bold" style={{ color: '#006B7D' }}>Element</div>
                <div className="text-xs text-gray-500 mt-1">by Marriott</div>
              </div>
              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
              <img
                src={marriottBonvoyLogo}
                alt="Marriott Bonvoy"
                className="h-10 w-auto hidden sm:block"
              />
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+16153208400" className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-[#006B7D] transition-colors">
                <Phone className="w-4 h-4" />
                <span>(615) 320-8400</span>
              </a>
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: '#006B7D' }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={exteriorImage} alt="Element Nashville Vanderbilt West End" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Home Base for<br />Nashville Project Work
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Extended-stay comfort in West End Nashville near Vanderbilt and major employers
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.marriott.com/en-us/hotels/bnaew-element-nashville-vanderbilt-west-end/overview/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg font-bold text-lg text-white transition-all hover:scale-105 shadow-lg text-center"
                style={{ backgroundColor: '#006B7D' }}
              >
                Book Your Extended Stay
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Request Corporate Rates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-4" style={{ backgroundColor: '#006B7D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-lg md:text-xl font-semibold">
            🎉 Special Offer: Save 15% on Extended Stays for Project Workers
          </p>
        </div>
      </section>

      {/* Why Element Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Built for Extended Stays, Not Just Overnight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Element Nashville serves professionals working in West End, Vanderbilt area, and throughout Nashville
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#006B7D' }}>
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Save Money</h3>
              <p className="text-gray-600 text-lg mb-4">
                Full kitchen means real savings. Cook your own meals and save $750+ per month compared to eating out.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                <p className="text-green-800 font-semibold">Over 3 months? That's $2,250 in your pocket!</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#006B7D' }}>
                <DoorOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">More Space</h3>
              <p className="text-gray-600 text-lg">
                Studio-apartment layout with distinct living, sleeping, and kitchen zones. Not cramped hotel rooms—real living space for extended stays.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#006B7D' }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Long-Term Ready</h3>
              <p className="text-gray-600 text-lg">
                On-site laundry, rooftop pool, 24/7 fitness center, and pet-friendly. Everything you need for stays of weeks and months, not just nights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 border-2 border-gray-200">
                <img src={marriottBonvoyLogo} alt="Marriott Bonvoy" className="h-12 w-auto p-2" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Earn Rewards</h3>
              <p className="text-gray-600 text-lg">
                Stay with us for work, earn Marriott Bonvoy points, then use them for your dream vacation. Turn business trips into beach getaways!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Studio-Apartment Comfort at Smart Value Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Spacious studios with everything you need for extended stays
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img src={room4} alt="Full Kitchen" className="w-full h-80 object-cover" />
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold mb-2">Full Kitchen</h3>
                <p className="text-gray-600">Stovetop, full-size fridge, microwave, and counter space</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img src={room1} alt="Comfortable Living Space" className="w-full h-80 object-cover" />
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold mb-2">Comfortable Living Space</h3>
                <p className="text-gray-600">King or Queen bed(s) with separate living and work areas</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img src={room2} alt="Room View" className="rounded-lg shadow-md hover:shadow-xl transition-shadow w-full h-64 object-cover" />
            <img src={room3} alt="Studio Layout" className="rounded-lg shadow-md hover:shadow-xl transition-shadow w-full h-64 object-cover" />
            <img src={room5} alt="Queen Studio" className="rounded-lg shadow-md hover:shadow-xl transition-shadow w-full h-64 object-cover" />
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Room Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#006B7D' }} />
                <span className="text-gray-700">Full kitchen with stovetop, refrigerator & microwave</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#006B7D' }} />
                <span className="text-gray-700">Spacious studio layout with distinct zones</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#006B7D' }} />
                <span className="text-gray-700">Comfortable king or queen bed(s)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#006B7D' }} />
                <span className="text-gray-700">Work desk and seating area</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#006B7D' }} />
                <span className="text-gray-700">Modern, eco-friendly design</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#006B7D' }} />
                <span className="text-gray-700">Free high-speed WiFi</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#006B7D' }} />
                <span className="text-gray-700">Plush Heavenly® bedding</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#006B7D' }} />
                <span className="text-gray-700">Smart TV with streaming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Your Kitchen = Real Savings
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calculator */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Calculate Your Savings</h3>
              
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4">
                  How many days will you stay?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    max="365"
                    value={stayDays}
                    onChange={(e) => setStayDays(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex-1 px-4 py-3 text-2xl font-bold border-2 rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#006B7D', color: '#006B7D' }}
                  />
                  <span className="text-xl text-gray-600">days</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 mb-6 border-2 border-green-200">
                <div className="text-center">
                  <p className="text-lg text-gray-700 mb-2">Your Total Savings</p>
                  <p className="text-5xl font-bold text-green-600 mb-2">
                    ${savings.totalSavings.toLocaleString()}
                  </p>
                  <p className="text-gray-600">
                    over {stayDays} days ({(stayDays / 30).toFixed(1)} months)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Without Kitchen (All Eating Out)</p>
                  <p className="text-2xl font-bold text-red-600">
                    ${savings.withoutKitchen.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">for {stayDays} days</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <p className="text-sm text-gray-600 mb-1">With Kitchen (Cook at Home)</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${savings.withKitchen.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">for {stayDays} days</p>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">How We Calculate Your Savings</h3>
              
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-4 text-red-600">Without Kitchen (All Eating Out):</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Breakfast out (30 days × $12)</span>
                    <span className="font-semibold">$360</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Lunch out (30 days × $15)</span>
                    <span className="font-semibold">$450</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Dinner out (30 days × $20)</span>
                    <span className="font-semibold">$600</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Snacks & beverages</span>
                    <span className="font-semibold">$90</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-lg">Total Monthly Cost</span>
                    <span className="font-bold text-lg text-red-600">$1,500</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-lg mb-4 text-green-600">With Kitchen (Cook at Home):</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Weekly groceries (4 weeks × $75)</span>
                    <span className="font-semibold">$300</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Lunch out at work (30 days × $15)</span>
                    <span className="font-semibold">$450</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-lg">Total Monthly Cost</span>
                    <span className="font-bold text-lg text-green-600">$750</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">
                  Cook breakfast & dinner, pack some lunches, buy lunch at work
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Your Monthly Savings</span>
                  <span className="font-bold text-2xl text-green-600">$750</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">1 Month</p>
                  <p className="text-xl font-bold" style={{ color: '#006B7D' }}>$750</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">3 Months</p>
                  <p className="text-xl font-bold" style={{ color: '#006B7D' }}>$2,250</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">6 Months</p>
                  <p className="text-xl font-bold" style={{ color: '#006B7D' }}>$4,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Everything You Need for Weeks or Months
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built amenities for extended-stay comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006B7D' }}>
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Full Kitchen</h3>
              <p className="text-gray-600">Cook like you're at home</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006B7D' }}>
                <ParkingCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Valet Parking</h3>
              <p className="text-gray-600">24-hour valet service available</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006B7D' }}>
                <Shirt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Site Laundry</h3>
              <p className="text-gray-600">Convenient laundry facilities</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006B7D' }}>
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">24-Hour Fitness</h3>
              <p className="text-gray-600">Work out on your schedule with Peloton</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006B7D' }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">EV Charging</h3>
              <p className="text-gray-600">Electric vehicle charging stations</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006B7D' }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pet-Friendly</h3>
              <p className="text-gray-600">Bring your companion ($50/night fee)</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006B7D' }}>
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Check-In</h3>
              <p className="text-gray-600">Access your room with your phone</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-200">
                <img src={marriottBonvoyLogo} alt="Marriott Bonvoy" className="h-10 w-auto p-1" />
              </div>
              <h3 className="text-xl font-bold mb-2">Marriott Bonvoy</h3>
              <p className="text-gray-600">Earn points on extended stays</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={patio} alt="Rooftop Pool" className="w-full h-80 object-cover" />
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold mb-2">Rooftop Pool</h3>
                <p className="text-gray-600">Seasonal outdoor infinity pool with stunning views (7am - 10pm)</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={lobby3} alt="Lobby & Common Areas" className="w-full h-80 object-cover" />
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold mb-2">Modern Lobby & Common Areas</h3>
                <p className="text-gray-600">Comfortable spaces to work, relax, or socialize</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Perfect Location in Nashville West End
            </h2>
            <p className="text-xl text-gray-600">
              Convenient access to Vanderbilt, major employers, and downtown Nashville
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#006B7D' }} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Element Nashville Vanderbilt West End</h3>
                    <p className="text-gray-700 text-lg">
                      4 City Boulevard<br />
                      Nashville, Tennessee 37209
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href="tel:+16153208400"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: '#006B7D' }}
                  >
                    <Phone className="w-4 h-4" />
                    (615) 320-8400
                  </a>
                  <a
                    href="https://www.google.com/maps/place/4+City+Boulevard,+Nashville,+TN+37209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    View Map
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Nearby</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#006B7D' }} />
                    <span className="text-gray-700">Walking distance to Vanderbilt University</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#006B7D' }} />
                    <span className="text-gray-700">Close to HCA Healthcare Corporate Campus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#006B7D' }} />
                    <span className="text-gray-700">Minutes from downtown Nashville</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#006B7D' }} />
                    <span className="text-gray-700">Easy access to I-40 and major highways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#006B7D' }} />
                    <span className="text-gray-700">Restaurants and coffee shops nearby</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#006B7D' }} />
                    <span className="text-gray-700">Near Centennial Park and The Parthenon</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={exteriorImage} alt="Hotel Location" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Designed for Project Workers Like You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={constructionWorker} alt="Construction Professional" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Construction Professional</h3>
                <p className="text-gray-700 text-lg">
                  Working on a 3-month project? Our full kitchens, valet parking for your work truck, and on-site laundry make extended stays comfortable and affordable.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={techProfessional} alt="Tech Professional" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Tech Professional</h3>
                <p className="text-gray-700 text-lg">
                  Relocating for a Nashville position? Stay with us for 30-90 days while you find your permanent home. Modern facilities, workspace, and Marriott rewards included.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={corporateTrainer} alt="Corporate Trainer" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Corporate Trainer</h3>
                <p className="text-gray-700 text-lg">
                  Managing teams or making recurring visits? Our studio-apartment layout and smart value pricing make it easy on your budget and your routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marriott Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              The Marriott Name You Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Element by Marriott brings you eco-conscious extended-stay comfort with the quality and consistency you expect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gray-200">
                <img src={marriottBonvoyLogo} alt="Marriott Bonvoy" className="h-16 w-auto p-2" />
              </div>
              <h3 className="text-xl font-bold mb-3">Marriott Bonvoy Rewards</h3>
              <p className="text-gray-600">Earn points on extended stays for future travel</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#006B7D' }}>
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Property</h3>
              <p className="text-gray-600">Clean, eco-friendly, and purpose-built for extended stays</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#006B7D' }}>
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Management</h3>
              <p className="text-gray-600">Consistent quality and reliable service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Access Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-12">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Business Access by Marriott Bonvoy™
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  A comprehensive online travel program that combines an expanded booking experience with the benefits and rewards that are only available through Marriott Bonvoy®'s award-winning travel program.
                </p>
                <h3 className="text-2xl font-bold mb-4">Perfect for Small to Medium-Sized Businesses</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1 text-green-400" />
                    <div>
                      <span className="font-semibold text-lg">Discounted Hotel Rates</span>
                      <p className="text-gray-300">Book Marriott Bonvoy hotels at special business rates</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1 text-green-400" />
                    <div>
                      <span className="font-semibold text-lg">Complete Travel Solutions</span>
                      <p className="text-gray-300">Book flights, rail, and rental cars in one easy-to-use platform</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1 text-green-400" />
                    <div>
                      <span className="font-semibold text-lg">Expense Management</span>
                      <p className="text-gray-300">Access live travel data and streamline business expenses</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1 text-green-400" />
                    <div>
                      <span className="font-semibold text-lg">Earn Marriott Bonvoy Points</span>
                      <p className="text-gray-300">Rewards on all your business travel bookings</p>
                    </div>
                  </li>
                </ul>
                <a
                  href="https://business.marriott.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  Sign Up for Business Access
                </a>
              </div>
              <div className="hidden lg:block">
                <img src={lobby3} alt="Business Travel" className="rounded-xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Ready to Book Your Extended Stay?
            </h2>
            <p className="text-xl text-gray-600">
              Special rates available for project workers and corporate bookings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#FF6B35', color: 'white' }}>
                <span className="font-bold text-lg">15% Off Extended Stays</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Book Now</h3>
              <p className="text-gray-600 mb-6">
                Special discount for project workers staying 7 days or more
              </p>
              <a
                href="https://www.marriott.com/en-us/hotels/bnaew-element-nashville-vanderbilt-west-end/overview/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-8 py-4 rounded-lg font-bold text-lg text-white transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#006B7D' }}
              >
                Book Now
              </a>
            </div>

            <div id="contact" className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#006B7D' }}>
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Corporate & Group Rates</h3>
              <p className="text-gray-600 mb-6">
                Need multiple rooms or recurring stays? Contact us for special corporate pricing.
              </p>
              <a
                href="tel:+16153208400"
                className="inline-block w-full px-8 py-4 rounded-lg font-bold text-lg text-white transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#006B7D' }}
              >
                Call (615) 320-8400
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#006B7D' }}>
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help with your extended-stay needs and special requests.
              </p>
              <a
                href="mailto:bnaew@elementhotels.com"
                className="inline-block w-full px-8 py-4 bg-gray-200 text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-300 transition-all shadow-lg"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Common Questions from Project Workers
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">What's included in the kitchen?</h3>
              <p className="text-gray-700">
                Each studio includes a stovetop, full-size refrigerator, microwave, and all necessary cookware and utensils.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">What's the parking situation?</h3>
              <p className="text-gray-700">
                We offer 24-hour valet parking at $38 per day. Electric vehicle charging stations are also available on-site.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">What's the pet policy?</h3>
              <p className="text-gray-700">
                We're pet-friendly! Dogs or cats only. There's a $50 fee per night (maximum $150 per stay). You can bring up to 1 pet, maximum 50 lbs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Do you offer weekly or monthly rates?</h3>
              <p className="text-gray-700">
                Yes! We specialize in extended stays and offer special rates for stays of 2 weeks or more. Call us at (615) 320-8400 for extended-stay pricing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Is laundry included?</h3>
              <p className="text-gray-700">
                We have on-site laundry facilities available. There's a small fee per load, but it's much more convenient than finding external laundromats.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Can I earn Marriott points?</h3>
              <p className="text-gray-700">
                Absolutely! Element is part of Marriott Bonvoy, so you'll earn points on your stay that you can use for future travel.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Do you accommodate shift workers?</h3>
              <p className="text-gray-700">
                Yes! We have 24-hour access to all facilities including the fitness center, and our design is perfect for guests on various work schedules.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Is breakfast included?</h3>
              <p className="text-gray-700">
                Yes! We offer a complimentary Element Rise breakfast featuring whole fruit, organic yogurt parfait station, assorted pastries, granola, and daily cook-to-order hot items. Specialty coffees are available all day.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">How close are you to major employers?</h3>
              <p className="text-gray-700">
                We're conveniently located in West End Nashville with walking distance to Vanderbilt University, close to HCA Healthcare Corporate Campus, and minutes from downtown Nashville and I-40.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Element Nashville Vanderbilt West End</h3>
              <p className="text-gray-400 mb-2">4 City Boulevard</p>
              <p className="text-gray-400 mb-4">Nashville, Tennessee 37209</p>
              <a href="tel:+16153208400" className="text-gray-300 hover:text-white transition-colors">
                (615) 320-8400
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.marriott.com/en-us/hotels/bnaew-element-nashville-vanderbilt-west-end/overview/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Book Now
                  </a>
                </li>
                <li>
                  <a href="https://www.marriott.com/en-us/hotels/bnaew-element-nashville-vanderbilt-west-end/rooms/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a href="https://business.marriott.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Business Access
                  </a>
                </li>
                <li>
                  <a href="https://www.marriott.com/loyalty.mi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Marriott Bonvoy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <p className="text-gray-400">
                Element by Marriott offers eco-conscious extended-stay accommodations designed for modern travelers who want to maintain their balance while on the road.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Element Nashville Vanderbilt West End. Part of Marriott International.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
