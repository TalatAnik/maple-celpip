import { FaChalkboardTeacher, FaUserGraduate, FaBook } from 'react-icons/fa'

const WhatWeOffer: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] tracking-widest underline decoration-2 underline-offset-20 mb-16 text-center">
          我们的服务
        </h2>

        {/* Subsections */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Subsection 1 */}
          <div className="flex-1 flex flex-col justify-between text-center bg-white shadow-md rounded-lg p-6">
            <div>
              <FaChalkboardTeacher className="text-[#4C5184] text-8xl mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">
                专业指导
              </h3>
              <p className="text-gray-600 mb-6">
                我们的专家团队为您提供个性化的学习计划，帮助您轻松通过CELPIP考试。
              </p>
            </div>
            <a
              href="#"
              className="text-blue-600 font-bold hover:underline mt-4"
            >
              了解更多
            </a>
          </div>

          {/* Subsection 2 */}
          <div className="flex-1 flex flex-col justify-between text-center bg-white shadow-md rounded-lg p-6">
            <div>
              <FaUserGraduate className="text-[#4C5184] text-8xl mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">
                成功案例
              </h3>
              <p className="text-gray-600 mb-6">
                成千上万的学生通过我们的课程实现了他们的梦想。
              </p>
            </div>
            <a
              href="#"
              className="text-blue-600 font-bold hover:underline mt-4"
            >
              了解更多
            </a>
          </div>

          {/* Subsection 3 */}
          <div className="flex-1 flex flex-col justify-between text-center bg-white shadow-md rounded-lg p-6">
            <div>
              <FaBook className="text-[#4C5184] text-8xl mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">
                丰富资源
              </h3>
              <p className="text-gray-600 mb-6">
                提供全面的学习资料和模拟考试，助您取得最佳成绩。
              </p>
            </div>
            <a
              href="#"
              className="text-blue-600 font-bold hover:underline mt-4"
            >
              了解更多
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer