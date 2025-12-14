import React from 'react'
import { StackedCards } from '@/components/ui/glass-cards'

const finTechCards = [
  {
    id: 1,
    title: "Personal Finance Management",
    description: "Build AI-powered tools to help individuals track expenses, create budgets, and achieve financial goals with intelligent insights and recommendations.",
    color: "rgba(5, 150, 105, 0.8)" // dark green-600
  },
  {
    id: 2,
    title: "Digital Payment Solutions",
    description: "Create secure and seamless payment platforms that enable fast, reliable transactions across multiple channels and currencies.",
    color: "rgba(37, 99, 235, 0.8)" // dark blue-600
  },
  {
    id: 3,
    title: "Financial Literacy & Education",
    description: "Develop interactive platforms that teach financial concepts, investment strategies, and money management skills to empower users.",
    color: "rgba(124, 58, 237, 0.8)" // dark purple-600
  }
];

const FinWellness = () => {
  return (
    <StackedCards 
      title="FinTech & Wellness"
      subtitle="Financial Innovation Challenges 💰"
      cards={finTechCards}
    />
  )
}

export default FinWellness