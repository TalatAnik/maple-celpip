const team = [
  // Leadership
  {
    name: '李明',
    title: '创始人 & 首席讲师 / CELPIP官方考官',
    img: `${import.meta.env.BASE_URL}images/testimonial1.jpg`,
    bio: 'Maple CELPIP创始人，拥有10年以上英语教学经验，帮助数百名学生顺利通过CELPIP考试。擅长高分策略与个性化辅导。',
    level: 'leadership',
  },
  {
    name: '王芳',
    title: '教学校长 / 课程总监',
    img: `${import.meta.env.BASE_URL}images/testimonial2.jpg`,
    bio: '负责课程设计与师资培训，深谙CELPIP考试体系，致力于为学员打造高效、科学的学习路径。',
    level: 'leadership',
  },
  // Teachers
  {
    name: '陈强',
    title: '高级讲师',
    img: `${import.meta.env.BASE_URL}images/testimonial3.jpg`,
    bio: 'CELPIP官方认证讲师，擅长口语与写作提分，课堂氛围轻松，深受学员喜爱。',
    level: 'teachers',
  },
  {
    name: '赵丽',
    title: '讲师',
    img: `${import.meta.env.BASE_URL}images/testimonial1.jpg`,
    bio: '专注于听力与阅读教学，注重基础与技巧结合，帮助学员稳步提升。',
    level: 'teachers',
  },
  // Support
  {
    name: '王伟',
    title: '课程顾问',
    img: `${import.meta.env.BASE_URL}images/testimonial2.jpg`,
    bio: '为学员量身定制学习计划，耐心细致，提供全程学习支持。',
    level: 'support',
  },
  {
    name: '张伟',
    title: '技术支持',
    img: `${import.meta.env.BASE_URL}images/testimonial3.jpg`,
    bio: '负责平台技术维护，确保每一位学员顺利上课和练习。',
    level: 'support',
  },
];

const groups = [
  {
    label: '核心管理团队',
    level: 'leadership',
    desc: '我们的领导团队拥有丰富的CELPIP教学与管理经验，致力于为学员提供最优质的课程与服务。',
  },
  {
    label: '专业讲师团队',
    level: 'teachers',
    desc: '所有讲师均为CELPIP官方认证，教学风格多样，注重因材施教，助力学员高效提分。',
  },
  {
    label: '支持与服务团队',
    level: 'support',
    desc: '无论是课程咨询还是技术保障，我们的支持团队都将为您保驾护航。',
  },
];

const badgeMap = {
  leadership: '管理',
  teachers: '讲师',
  support: '支持',
};

const badgeColor = {
  leadership: 'bg-yellow-500',
  teachers: 'bg-blue-500',
  support: 'bg-green-500',
};

const heroImage = `${import.meta.env.BASE_URL}images/slider3.jpg`; // Make sure this image exists

const MeetTheTeam: React.FC = () => (
  <main className="bg-white">
    {/* Hero Section */}
    <section
      className="w-full h-[320px] md:h-[400px] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
        className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center"
        style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
      >
        团队介绍
      </h1>
    </section>

    <section className="max-w-screen-lg mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] text-center mb-4 tracking-widest underline decoration-2 underline-offset-8">
        团队介绍
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Maple CELPIP拥有一支专业、敬业、充满热情的团队。我们不仅有丰富的教学经验，更有对每一位学员负责的态度。无论您处于备考的哪个阶段，我们都将为您提供全方位的支持与指导。
      </p>
      {groups.map((group) => (
        <div key={group.level} className="mb-20">
          <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-2 text-center">{group.label}</h3>
          <p className="text-center text-gray-500 mb-8">{group.desc}</p>
          <div className="flex flex-wrap justify-center gap-8">
            {team.filter((m) => m.level === group.level).map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 transition-transform duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden max-w-xs w-full"
              >
                <div className="relative mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-38 h-38 object-cover rounded-full shadow border-4 border-[var(--color-primary)]"
                  />
                  <span className={`absolute bottom-0 right-0 left-0 ${badgeColor[member.level as keyof typeof badgeColor]} text-white text-xs px-2 py-0.5 rounded-full shadow -mb-2 -mr-2 text-center`}>
                    {badgeMap[member.level as keyof typeof badgeMap]}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[var(--color-primary)] mb-1">{member.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{member.title}</p>
                <p className="text-gray-700 text-center text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-10 text-center text-gray-500 text-base">
        <span className="inline-block bg-[var(--color-primary)] text-white px-4 py-2 rounded-full shadow">
          想加入我们？请发送简历至 <span className="underline">hr@maplecelpip.com</span>
        </span>
      </div>
    </section>
  </main>
);

export default MeetTheTeam;