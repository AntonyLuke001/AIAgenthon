import React from 'react'
import { StackedCards } from '@/components/ui/glass-cards'

const disasterTechCards = [
  {
    id: 1,
    title: "Early Warning Systems",
    description: "Develop AI-powered prediction models and alert systems that detect natural disasters early and notify communities to enable timely evacuation.",
    color: "rgba(5, 150, 105, 0.8)" // dark green-600
  },
  {
    id: 2,
    title: "Emergency Response Coordination",
    description: "Create platforms that coordinate rescue operations, resource allocation, and communication between emergency services during disasters.",
    color: "rgba(37, 99, 235, 0.8)" // dark blue-600
  },
  {
    id: 3,
    title: "Post-Disaster Recovery",
    description: "Build solutions for damage assessment, resource distribution, and community rebuilding efforts to accelerate recovery after disasters.",
    color: "rgba(124, 58, 237, 0.8)" // dark purple-600
  }
];

const DisasterTech = () => {
  return (
    <StackedCards 
      title="DisasterTech Solutions"
      subtitle="Building Resilient Communities 🚨"
      cards={disasterTechCards}
    />
  )
}

export default DisasterTech