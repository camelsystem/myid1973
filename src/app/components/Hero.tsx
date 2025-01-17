'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 스크롤 위치에 따른 이미지 크기 계산
  const getImageSize = () => {
    const baseSize = { width: 32, height: 32 } // 기본 크기를 32rem으로 설정
    const minSize = { width: baseSize.width * 0.5, height: baseSize.height * 0.5 } // 50% 크기
    const scrollThreshold = 300

    if (scrollY <= 0) return baseSize
    if (scrollY >= scrollThreshold) return minSize

    const scale = 1 - (scrollY / scrollThreshold)
    return {
      width: minSize.width + (baseSize.width - minSize.width) * scale,
      height: minSize.height + (baseSize.height - minSize.height) * scale
    }
  }

  const imageSize = getImageSize()

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-blue-50 dark:bg-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* 텍스트 섹션 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              안녕하세요!
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-200"
            >
              저는 웹 개발자 [이름]입니다
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              창의적인 솔루션을 만드는 것을 좋아합니다
            </motion.p>
          </motion.div>

          {/* 프로필 이미지 섹션 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              width: `${imageSize.width}rem`,
              height: `${imageSize.height}rem`,
              transition: 'all 0.3s ease-out'
            }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src="/profile.png"
                alt="Profile Image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}