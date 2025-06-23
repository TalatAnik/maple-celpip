const heroImage = `${import.meta.env.BASE_URL}images/why-choose-hero.jpg`
const feature2 = `${import.meta.env.BASE_URL}images/feature2.jpg`
const feature1 = `${import.meta.env.BASE_URL}images/feature1.png`
const feature1b = `${import.meta.env.BASE_URL}images/feature1b.png`
const feature3 = `${import.meta.env.BASE_URL}images/testimonial1.jpg`

const WhyChooseUsPage: React.FC = () => (
  <div className="bg-white">

    {/* Hero Section */}
    <section
      className="w-full h-[400px] md:h-[400px] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(0px)', // fallback if backdrop not supported
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(149, 109, 81, 0.4)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 1,
        }}
      />
      <h1
        className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
      >
        为什么选择我们
      </h1>
    </section>

    {/* Main Content */}
    <main className="flex-grow">
      {/* Section Title and Description */}
      <section className="max-w-3xl mx-auto px-4 py-20 my-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] tracking-widest underline decoration-2 underline-offset-20 mb-16 text-center"
          style={{ letterSpacing: '0.15em' }}>
          是什么让我们与众不同
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          <span className="block mt-2 text-gray-600 text-base md:text-lg">
            我们是一家位于多伦多的专业CELPIP（加拿大英语水平考试）备考机构，专注于帮助准备加拿大移民或入籍申请的学生顺利通过官方英语考试。
          </span>
        </p>
        <p className="text-gray-700 text-base md:text-lg">
          <span className="block mt-2 text-gray-600 text-base md:text-lg">
            我们所有老师均为官方认证CELPIP讲师，其中包括两位3级认证讲师（最高CELPIP教学资质）及参与真实考试评分的预备考官。
          </span>
        </p>
      </section>

      {/* Feature 1 */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-1 mb-32 px-4 py-20 my-20">
        {/* Left: Semi-circle image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={feature1}
            alt="Feature 1"
            className="w-90 h-auto object-contain"
          />
        </div>
        {/* Right: Text, button, and semi-circle image below */}
        <div className="flex-1 flex flex-col items-start justify-between h-full">
          <div className="w-80 max-w-sm">
            <h3 className="text-3xl font-extrabold text-[#9B7B5A] mb-2">
              保证通过或无限次重修
            </h3>
            <p className="text-gray-700 mb-6">
              如果您未能通过CELPIP考试，我们将为您提供无限次课程访问和全程支持，直到您顺利通过，确保您的投资无风险。
            </p>
            <button className="btn-primary shadow-md mb-6">了解更多</button>
          </div>
          <img
            src={feature1b}
            alt="Retake Support"
            className="w-50 h-auto object-contain mt-12"
          />
        </div>
      </section>

      {/* Feature 2 */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-2 mb-16 px-4 relative py-20 my-20">
        {/* Image: Large, behind the text box */}
        <div className="flex-1 flex justify-center relative z-0 md:order-1 order-1 md:-mr-32">
          <img
            src={feature2}
            alt="高效、针对性学习"
            className="w-60 h-60 md:w-120 md:h-120 object-cover rounded-full shadow-lg"
            style={{
              borderRadius: '50%',
              zIndex: 0,
            }}
          />
        </div>
        {/* Text box: Overlapping the image, with shadow and white background */}
        <div
          className="flex-1 flex flex-col items-center md:items-start bg-white shadow-2xl z-10 p-6 md:p-8 mx-0 md:ml-[-120px] md:min-w-[320px] md:max-w-[420px] md:order-2 order-2"
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          <h3 className="text-3xl font-extrabold text-[#9B7B5A] mb-2">高效、针对性学习</h3>
          <p className="text-gray-700 mb-6">
            聚焦高频考试场景与核心词汇，剔除无关内容。由CELPIP认证讲师主讲互动直播课，严格按照官方评分标准教学。
          </p>
          <p className="text-gray-700 mb-6">
            针对个人弱项定制学习计划，强化优势，实现高效提升。
          </p>
          <button className="btn-primary shadow-md">了解更多</button>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16 px-4 relative py-20 my-20">
        {/* Image: Large, left side */}
        <div className="flex-1 flex justify-center relative z-0 md:order-1 order-1 md:-ml-32">
          <img
            src={feature3}
            alt="全方位支持与资源"
            className="w-60 h-60 md:w-120 md:h-120 object-cover rounded-full shadow-lg"
            style={{
              borderRadius: '50%',
              zIndex: 0,
            }}
          />
        </div>
        {/* Text box: Overlapping the image, with shadow and white background */}
        <div
          className="flex-1 flex flex-col items-center md:items-start bg-white shadow-2xl z-10 p-6 md:p-8 mx-0 md:mr-[-120px] md:min-w-[320px] md:max-w-[420px] md:order-2 order-2"
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          <h3 className="text-3xl font-extrabold text-[#9B7B5A] mb-2">全方位支持与资源</h3>
          <p className="text-gray-700 mb-6">
            高效的客户服务，个性化一对一辅导，详细作业反馈。最新CELPIP资料、词汇自建库和全真模拟考试，助您真实体验考试环境。
          </p>
          <p className="text-gray-700 mb-6">
            结构化进度跟踪与持续提升，助力每一位学员实现目标。
          </p>
          <button className="btn-primary shadow-md">了解更多</button>
        </div>
      </section>
    </main>

  </div>
)

export default WhyChooseUsPage