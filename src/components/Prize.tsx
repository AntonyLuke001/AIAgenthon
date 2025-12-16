import React from 'react'

interface PrizeCardData {
  position: string
  emoji: string
  amount: string
  description: string
}

interface SpecialAward {
  title: string
}

const Prize = () => {
  const mainPrizes: PrizeCardData[] = [
    {
      position: '1st Place',
      emoji: '🥇',
      amount: '₹2,00,000',
      description: 'Champion Team + Mentorship Opportunity'
    },
    {
      position: '2nd Place',
      emoji: '🥈',
      amount: '₹1,50,000',
      description: 'Runner-Up Team + Industry Recognition'
    },
    {
      position: '3rd Place',
      emoji: '🥉',
      amount: '₹1,00,000',
      description: 'Third Place Team + Certificate of Excellence'
    }
  ]

  const specialAwards: SpecialAward[] = [
    { title: 'Best Supply Chain Tech Agent' },
    { title: 'Best Civic Tech Agent' },
    { title: 'Best FinWellness Agent' },
    { title: 'Best DisasterTech Agent' },
    { title: 'Best Rookie Team' },
    { title: 'Best Innovation' }
  ]

  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-audiowide mb-4">
            Prizes & Recognition
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Compete for exciting rewards and gain recognition for your innovative AI solutions
          </p>
        </div>

       
       

        {/* Main Prizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {mainPrizes.map((prize, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20"
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 -z-10 blur" />
              
              <div className="text-center">
                {/* Emoji */}
                <div className="text-6xl mb-4">{prize.emoji}</div>
                
                {/* Position */}
                <h4 className="text-xl font-bold text-white mb-3">
                  {prize.position}
                </h4>
                
                {/* Amount */}
                <p className="text-3xl font-black bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent mb-3">
                  {prize.amount}
                </p>
                
                {/* Description */}
                <p className="text-sm text-neutral-400">
                  {prize.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Prize