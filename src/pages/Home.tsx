import React from 'react'
import Slider from '../components/Slider'
import WhatWeOffer from '../components/WhatWeOffer'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'

const images = [
  {
    src: '/images/slider1.jpg',
    title: '自信掌握CELPIP考试',
    description:
      '我们是多伦多为数不多的培训机构之一，由官方CELPIP考官直接授课，倡导“考官授课，高效通过”的价值主张。',
    cta: '开始',
  },
  {
    src: '/images/slider2.jpg',
    title: '个性化学习',
    description: '量身定制的策略帮助您成功。',
    cta: '了解更多',
  },
  {
    src: '/images/slider3.jpg',
    title: '成功的证明',
    description: '成千上万的学生实现了他们的梦想。',
    cta: '立即加入',
  },
  {
    src: '/images/slider4.jpg',
    title: '通往成功的道路',
    description: '让我们在每一步都为您提供指导。',
    cta: '联系我们',
  },
]

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-100vh bg-white">
      <main className="flex-grow">
        <Slider images={images} />
        <WhatWeOffer />
        <WhyChooseUs />
        <Testimonials />
      </main>
    </div>
  )
}

export default Home