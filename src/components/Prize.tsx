import React from 'react'
import SkewCards from './ui/gradient-card-showcase'

interface CardData {
  title: string
  desc: string
  gradientFrom: string
  gradientTo: string
  emoji?: string
  amount?: string
}

const Prize = () => {
  const mainPrizes: CardData[] = [
    {
      title: 'FIRST PRIZE',
      emoji: '🏆',
      amount: '15,000',
      desc: 'Champion Team + Mentorship Opportunity + Industry Recognition',
      gradientFrom: '#ffbc00',
      gradientTo: '#ff0058',
    },
    {
      title: 'SECOND PRIZE',
      emoji: '🥈',
      amount: '10,000',
      desc: 'Runner-Up Team + Certificate of Excellence + Networking Opportunities',
      gradientFrom: '#03a9f4',
      gradientTo: '#ff0058',
    },
    {
      title: 'THIRD PRIZE',
      emoji: '🥉',
      amount: '5,000',
      desc: 'Third Place Team + Recognition Certificate + Access to Resources',
      gradientFrom: '#4dff03',
      gradientTo: '#00d0ff',
    }
  ]

  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-audiowide mb-4">
            Prizes & Recognition
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Compete for exciting rewards and gain recognition for your innovative AI solutions
          </p>
        </div>

        {/* Gradient Card Showcase */}
        <SkewCards cards={mainPrizes} />
      </div>
    </section>
  )
}

export default Prize