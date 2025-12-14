import React from 'react'
import { StackedCards } from '@/components/ui/glass-cards'

const supplyChainCards = [
  {
    id: 1,
    title: "Inventory Management & Tracking",
    description: "Develop intelligent systems for real-time inventory tracking, demand forecasting, and automated replenishment to optimize stock levels.",
    color: "rgba(5, 150, 105, 0.8)" // dark green-600
  },
  {
    id: 2,
    title: "Supply Chain Transparency",
    description: "Create blockchain-based solutions for end-to-end supply chain visibility, enabling traceability and authenticity verification of products.",
    color: "rgba(37, 99, 235, 0.8)" // dark blue-600
  },
  {
    id: 3,
    title: "Logistics Optimization",
    description: "Build AI-powered routing and scheduling systems that minimize delivery times, reduce costs, and improve overall supply chain efficiency.",
    color: "rgba(124, 58, 237, 0.8)" // dark purple-600
  }
];

const SupplyChain = () => {
  return (
    <StackedCards 
      title="Supply Chain Innovation"
      subtitle="Optimizing Global Networks 📦"
      cards={supplyChainCards}
    />
  )
}

export default SupplyChain