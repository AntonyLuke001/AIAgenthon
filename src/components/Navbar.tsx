import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Eshwar from "@/assets/Eshwar logo.png"
import Thiran from "@/assets/ThiranLogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Theme', href: '#theme' },
    { name: 'PS', href: '#ps' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQs', href: '#faqs' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 h-20 transition-all  duration-300  shadow-white ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-2xl border-b border-teal-500/50 shadow-lg shadow-teal-500/10' 
          : 'bg-transparent backdrop-blur-sm border-b border-teal-500/20'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={Eshwar} alt="Eshwar" className='w-42 h-16' />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a 
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-teal-400 font-medium relative group transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>
        <div>
          <img src={Thiran} alt="Thiran" className='h-14' />
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 border-t border-teal-500/20 backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navItems.map((item) => (
                <motion.a 
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-teal-400 font-medium py-2 border-b border-white/10 hover:border-teal-400/50 transition-all"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a 
                href="#register"
                className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-center mt-4 hover:shadow-teal-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar