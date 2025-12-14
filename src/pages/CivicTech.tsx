import React from 'react'
import { StackedCards } from '@/components/ui/glass-cards'

const civicTechCards = [
  {
    id: 1,
    title: "Citizen Engagement Platforms",
    description: "Create digital platforms that enable citizens to participate in governance, voice concerns, and collaborate with local authorities on community issues.",
    color: "rgba(5, 150, 105, 0.8)" // dark green-600
  },
  {
    id: 2,
    title: "Public Service Accessibility",
    description: "Develop solutions that make government services more accessible, transparent, and efficient for all citizens, especially underserved communities.",
    color: "rgba(37, 99, 235, 0.8)" // dark blue-600
  },
  {
    id: 3,
    title: "Open Data & Transparency",
    description: "Build tools that leverage open government data to increase transparency, enable informed decision-making, and promote accountability.",
    color: "rgba(124, 58, 237, 0.8)" // dark purple-600
  }
];

const CivicTech = () => {
  return (
    <StackedCards 
      title="CivicTech Solutions"
      subtitle="Empowering Communities 🏛️"
      cards={civicTechCards}
    />
  )
}

export default CivicTech