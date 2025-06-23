import React from 'react'
import { FaCheck } from 'react-icons/fa'

const WhyChooseUs: React.FC = () => {
  const imagePath = `${import.meta.env.BASE_URL}images/why-choose-us.jpg`

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] tracking-widest underline decoration-2 underline-offset-20 mb-30 text-center">
          为什么选择我们
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={imagePath}
              alt="Why Choose Us"
              className="w-3/4 md:w-2/3 rounded-lg shadow-md"
            />
          </div>

          {/* Right Column: Text with Checkmarks */}
          <div className="flex-1">
            {/* Sub-title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              我们的优势
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-lg text-gray-700">
                <FaCheck className="text-[#9576F3] mr-3" />
                官方CELPIP考官授课
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FaCheck className="text-[#9576F3] mr-3" />
                个性化学习计划
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FaCheck className="text-[#9576F3] mr-3" />
                丰富的学习资源
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FaCheck className="text-[#9576F3] mr-3" />
                高效通过考试的策略
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FaCheck className="text-[#9576F3] mr-3" />
                成千上万的成功案例
              </li>
            </ul>

            {/* Learn More Button */}
            <button className="btn-primary">了解更多</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs