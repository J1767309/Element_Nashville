import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const DiscountWheel = ({ onClose }) => {
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [hasSpun, setHasSpun] = useState(false)
  const [email, setEmail] = useState('')
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [prize, setPrize] = useState(null)
  const [showCongrats, setShowCongrats] = useState(false)

  // Prize segments with brand colors
  const prizes = [
    { text: '10% Off', color: '#006B7D', textColor: '#ffffff' },
    { text: '5% Off', color: '#FF6B35', textColor: '#ffffff' },
    { text: '15% Off', color: '#00A0B0', textColor: '#ffffff' },
    { text: 'Free Parking', color: '#FFB84D', textColor: '#000000' },
    { text: '20% Off', color: '#006B7D', textColor: '#ffffff' },
    { text: '7% Off', color: '#FF6B35', textColor: '#ffffff' },
    { text: '10% Off', color: '#00A0B0', textColor: '#ffffff' },
    { text: 'Free Breakfast', color: '#FFB84D', textColor: '#000000' },
  ]

  const spinWheel = () => {
    if (isSpinning || hasSpun) return

    setIsSpinning(true)

    // Random number of full rotations (5-7) plus random segment
    const minRotation = 5 * 360
    const extraRotation = Math.random() * 360
    const totalRotation = rotation + minRotation + extraRotation

    setRotation(totalRotation)

    // Calculate which prize was won
    setTimeout(() => {
      const normalizedRotation = (360 - (totalRotation % 360)) % 360
      const segmentAngle = 360 / prizes.length
      const prizeIndex = Math.floor(normalizedRotation / segmentAngle)

      setPrize(prizes[prizeIndex])
      setIsSpinning(false)
      setHasSpun(true)
      setShowEmailForm(true)
    }, 4000)
  }

  const handleSubmitEmail = (e) => {
    e.preventDefault()
    if (email) {
      setShowCongrats(true)
    }
  }

  const handleClose = () => {
    // Save to localStorage so it doesn't show again
    localStorage.setItem('discountWheelShown', 'true')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-in fade-in duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!showCongrats ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#006B7D' }}>
                Spin to Win!
              </h2>
              <p className="text-gray-600">
                Try your luck for an exclusive discount on your extended stay!
              </p>
            </div>

            {/* Wheel Container */}
            <div className="relative w-80 h-80 mx-auto mb-6">
              {/* Arrow Pointer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                <div
                  className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px]"
                  style={{ borderTopColor: '#006B7D' }}
                />
              </div>

              {/* Wheel */}
              <div className="relative w-full h-full">
                <svg
                  className="w-full h-full"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
                  }}
                  viewBox="0 0 200 200"
                >
                  {prizes.map((prize, index) => {
                    const angle = (360 / prizes.length) * index
                    const nextAngle = (360 / prizes.length) * (index + 1)

                    const startRad = (angle - 90) * Math.PI / 180
                    const endRad = (nextAngle - 90) * Math.PI / 180

                    const x1 = 100 + 100 * Math.cos(startRad)
                    const y1 = 100 + 100 * Math.sin(startRad)
                    const x2 = 100 + 100 * Math.cos(endRad)
                    const y2 = 100 + 100 * Math.sin(endRad)

                    const largeArc = nextAngle - angle > 180 ? 1 : 0

                    const pathData = `M 100 100 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`

                    // Calculate text position
                    const textAngle = (angle + nextAngle) / 2
                    const textRad = (textAngle - 90) * Math.PI / 180
                    const textX = 100 + 65 * Math.cos(textRad)
                    const textY = 100 + 65 * Math.sin(textRad)

                    return (
                      <g key={index}>
                        <path
                          d={pathData}
                          fill={prize.color}
                          stroke="white"
                          strokeWidth="2"
                        />
                        <text
                          x={textX}
                          y={textY}
                          fill={prize.textColor}
                          fontSize="14"
                          fontWeight="bold"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                        >
                          {prize.text}
                        </text>
                      </g>
                    )
                  })}

                  {/* Center circle */}
                  <circle cx="100" cy="100" r="20" fill="white" stroke="#006B7D" strokeWidth="3" />
                </svg>
              </div>
            </div>

            {/* Email Form or Spin Button */}
            {showEmailForm ? (
              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Enter your email to claim your prize:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{ borderColor: '#006B7D', focusRing: '#006B7D' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg font-bold text-white transition-all hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#006B7D' }}
                >
                  Claim My Prize!
                </button>
              </form>
            ) : (
              <button
                onClick={spinWheel}
                disabled={isSpinning || hasSpun}
                className="w-full px-8 py-4 rounded-lg font-bold text-xl text-white transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#006B7D' }}
              >
                {isSpinning ? 'Spinning...' : 'SPIN THE WHEEL'}
              </button>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Congratulations!
            </h2>
            <div
              className="text-5xl font-bold mb-4 p-6 rounded-xl"
              style={{ backgroundColor: prize?.color, color: prize?.textColor }}
            >
              {prize?.text}
            </div>
            <p className="text-gray-700 mb-2">
              Your discount has been sent to:
            </p>
            <p className="text-lg font-semibold mb-6" style={{ color: '#006B7D' }}>
              {email}
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Use code <span className="font-bold">SPIN{prize?.text.replace(/[^0-9]/g, '')}</span> when booking your extended stay!
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-lg font-bold text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#006B7D' }}
            >
              Start Booking
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// Modal wrapper component
const DiscountWheelModal = () => {
  const [showWheel, setShowWheel] = useState(false)

  useEffect(() => {
    // Check if user has already seen the wheel
    const hasSeenWheel = localStorage.getItem('discountWheelShown')

    if (!hasSeenWheel) {
      // Show wheel after 3 seconds
      const timer = setTimeout(() => {
        setShowWheel(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!showWheel) return null

  return <DiscountWheel onClose={() => setShowWheel(false)} />
}

export default DiscountWheelModal
