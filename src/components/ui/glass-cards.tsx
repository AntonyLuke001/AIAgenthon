import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';
import ShaderBackground from './shader-background';
import AuroraBackground from './animated-background';

gsap.registerPlugin(ScrollTrigger);

interface CardData {
    id: number;
    title: string;
    description: string;
    color: string;
}

interface CardProps {
    id: number;
    title: string;
    description: string;
    index: number;
    totalCards: number;
    color: string;
}

const Card: React.FC<CardProps> = ({ title, description, index, totalCards, color }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const container = containerRef.current;
        if (!card || !container) return;

        const targetScale = 1 - (totalCards - index) * 0.05;

        // Set initial state
        gsap.set(card, {
            scale: 1,
            transformOrigin: "center top"
        });

        // Create scroll trigger for stacking effect
        ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const scale = gsap.utils.interpolate(1, targetScale, progress);

                gsap.set(card, {
                    scale: Math.max(scale, targetScale),
                    transformOrigin: "center top"
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [index, totalCards]);

    return (
        <div
            ref={containerRef}
            className="px-4 md:px-8 lg:px-12"
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                top: 0
            }}
        >
            <div
                ref={cardRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '90%',
                    height: '600px',
                    borderRadius: '24px',
                    isolation: 'isolate',
                    top: `calc(-5vh + ${index * 25}px)`,
                    transformOrigin: 'top'
                }}
                className="card-content"
            >
                {/* Electric Border Effect */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '-4px',
                        borderRadius: '28px',
                        padding: '4px',
                        background: `
                            conic-gradient(
                                from 0deg,
                                transparent 0deg,
                                ${color} 40deg,
                                ${color.replace('0.8', '1')} 80deg,
                                ${color.replace('0.8', '0.7')} 120deg,
                                transparent 160deg,
                                ${color.replace('0.8', '0.5')} 200deg,
                                ${color.replace('0.8', '0.8')} 240deg,
                                transparent 280deg,
                                ${color.replace('0.8', '0.6')} 320deg,
                                transparent 360deg
                            )
                        `,
                        filter: 'blur(2px)',
                        opacity: 0.9,
                        zIndex: -1,
                        animation: 'borderRotate 8s linear infinite'
                    }}
                />

                {/* Outer Glow */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '-8px',
                        borderRadius: '32px',
                        background: `radial-gradient(circle at 50% 0%, ${color.replace('0.8', '0.4')}, transparent 70%)`,
                        filter: 'blur(20px)',
                        opacity: 0.6,
                        zIndex: -2
                    }}
                />

                {/* Main Card Content */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '3rem',
                    borderRadius: '24px',
                    background: 'rgba(10, 10, 15, 0.85)',
                    backdropFilter: 'blur(40px) saturate(150%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: `
                        0 20px 60px rgba(0, 0, 0, 0.8),
                        0 8px 16px rgba(0, 0, 0, 0.5),
                        inset 0 1px 0 rgba(255, 255, 255, 0.05),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.5),
                        0 0 60px ${color.replace('0.8', '0.08')}
                    `,
                    overflow: 'hidden'
                }}>
                    {/* Aurora Background for Card */}
                    <AuroraBackground />

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{
                            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                            fontWeight: '700',
                            marginBottom: '1.5rem',
                            color: 'white',
                            textShadow: `
                                0 4px 12px rgba(0, 0, 0, 0.5),
                                0 0 40px ${color.replace('0.8', '0.3')}
                            `,
                            letterSpacing: '-0.02em',
                            background: `linear-gradient(135deg, white 0%, ${color.replace('0.8', '1')} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {title}
                        </h2>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                            color: 'rgba(255, 255, 255, 0.95)',
                            lineHeight: '1.7',
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                            fontWeight: '400',
                            letterSpacing: '0.01em'
                        }}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface StackedCardsProps {
    title?: string;
    subtitle?: string;
    cards?: CardData[];
}

export const StackedCards: React.FC<StackedCardsProps> = ({ 
    title = "Problem Statements",
    subtitle = "Scroll to Explore 👇",
    cards = cardData
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main ref={containerRef} style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Shader Background */}
            <ShaderBackground />
            
            {/* Hero Section */}
            <section 
                className="px-4 md:px-8 lg:px-12"
                style={{
                    height: '70vh',
                    width: '100%',
                    display: 'grid',
                    placeContent: 'center',
                    position: 'relative',
                    color: '#ffffff',
                    zIndex: 1
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        linear-gradient(to right, rgba(79, 79, 79, 0.18) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(79, 79, 79, 0.18) 1px, transparent 1px)
                    `,
                    backgroundSize: '54px 54px',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
                }} />
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: '500',
                    textAlign: 'center',
                    lineHeight: '1.2',
                    padding: '0 2rem',
                    position: 'relative',
                    zIndex: 1,
                    background: 'linear-gradient(to right, #06b6d4, #a855f7, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    {title} <br /> {subtitle}
                </h1>
            </section>

            {/* Cards Section */}
            <section style={{
                color: '#ffffff',
                width: '100%',
                position: 'relative',
                zIndex: 1
            }}>
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        index={index}
                        totalCards={cards.length}
                        color={card.color}
                    />
                ))}
            </section>
        </main>
    );
};
