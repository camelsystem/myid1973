export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-100 dark:bg-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="md:flex items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/your-photo.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <p className="text-gray-600 mb-4">
              [자기소개 내용을 작성하세요]
            </p>
            <p className="text-gray-600">
              [추가적인 경력이나 학력 등을 작성하세요]
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}