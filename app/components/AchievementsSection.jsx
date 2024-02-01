"use client"

import React from 'react'
import dynamic from 'next/dynamic'


const AnimatedNumbers = dynamic(() => (import ("react-animated-numbers")), {ssr: false});

const achievements = [
  {
    metric: "Projects",
    value : "500",
    postfix: "+",
  },
  {
    prefix: "+",
    metric: "Users",
    value: "400",
   
  },
  {
    metric: "Awards",
    value: "10",
  },
  {
    metric: "Years",
    value: "2",
 
  }

]

const AchievementsSection = () => {
  return (
    <div className='pt-40  px-4 xl:gap-16 sm:pt-32 xl:px-16'>
      <div className='border border-[#33353f] rounded-md pt-8 pb-1 px-2 flex flex-row items-center justify-between flex-wrap'>

     
      {achievements.map((achievement, index) => (
        <div key={index} className='flex flex-col items-center justify-center mx-4'>

          <h2 className='text-white text-4xl font-bold flex flex-row items-center'>
            {achievement.prefix}
            <AnimatedNumbers 
            includeComma
            animateToNumber={parseInt(achievement.value)}
            locale='en-US'
            className='text-white text-4xl font-bold'
            configs={((_, index) => {
              return{
                mass :1,
                friction: 100,
                tensions :140 * (index + 1),

              }
            })}
            />
            {achievement.postfix}
            </h2>
          <p className='text-[#adb7be] text-base'>{achievement.metric}</p>

        </div>
      ))}
       </div>
    </div>
  )
}

export default AchievementsSection