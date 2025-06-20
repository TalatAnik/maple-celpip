import React from 'react'

// Import images
import testimonial1 from '../assets/images/testimonial1.jpg'
import testimonial2 from '../assets/images/testimonial2.jpg'
import testimonial3 from '../assets/images/testimonial3.jpg'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: '张伟',
      text: '“通过 Maple CELPIP 的课程，我成功通过了考试！老师非常专业，课程内容非常有帮助。课程中提供的模拟考试和详细的反馈让我清楚地知道自己的弱点，并且能够针对性地提高。”',
      image: testimonial1,
    },
    {
      name: '李娜',
      text: '“感谢 Maple CELPIP 的支持和指导！他们的个性化学习计划让我在短时间内取得了好成绩。老师们非常耐心，帮助我一步步提高语言能力。这里的学习氛围也非常好，让我充满信心。”',
      image: testimonial2,
    },
    {
      name: '王强',
      text: '“这里的学习资源非常丰富，老师也很耐心。我强烈推荐 Maple CELPIP 给所有需要通过考试的人。无论是课程内容还是课后练习，都非常贴近实际考试，帮助我快速掌握了考试技巧。”',
      image: testimonial3,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] tracking-widest underline decoration-2 underline-offset-20 mb-30 text-center">
          学员评价
        </h2>

        {/* Testimonials */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center text-center md:text-left gap-6"
            >
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-30 h-30 rounded-full shadow-md border-2 border-[var(--color-primary)] object-contain mb-4 md:mb-0 md:mr-6"
              />

              {/* Testimonial Text */}
              <div>
                <h3 className="text-lg font-bold text-black">{testimonial.name}</h3>
                <p className="text-black mt-2">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials