import Image from 'next/image';

import chatExample1 from '../../public/assets/chat-example-1.png';
import chatExample2 from '../../public/assets/chat-example-2.png';
import chatExample3 from '../../public/assets/chat-example-3.png';
import chatExample4 from '../../public/assets/chat-example-4.png';

function HomePage() {
  return (
    <div className="h-full w-full bg-gray-900 text-white">
      <div className="px-8 md:px-20 py-10 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your AI-Powered Academic Assistant
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
            Discover. Plan. Succeed.
          </p>
        </section>

        {/* Features Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
            <Image
              height={500}
              width={500}
              src={chatExample1}
              alt="Chat Example"
              className="w-full md:w-1/2 object-contain rounded-lg shadow-lg"
            />
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold">
                Find Everything in One Place
              </h2>
              <p className="text-gray-300 text-xl">
                Skip the endless web searches. Our chatbot serves as a central
                hub for all your university info—from campus details to course
                summaries—just ask away.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12 space-y-8 md:space-y-0">
            <Image
              height={500}
              width={500}
              src={chatExample2}
              alt="Chat Example"
              className="w-full md:w-1/2 object-contain rounded-lg shadow-lg"
            />
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold">
                Personalized Course Planning
              </h2>
              <p className="text-gray-300 text-xl">
                Design a course plan that suits your interests and experience.
                Let the chatbot shape your semester for academic success.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
            <Image
              height={500}
              width={500}
              src={chatExample3}
              alt="Chat Example"
              className="w-full md:w-1/2 object-contain rounded-lg shadow-lg"
            />
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold">
                Stay On Track With Your Classes
              </h2>
              <p className="text-gray-300 text-xl">
                Connect with your Canvas account. Ask about ongoing assignments,
                deadlines, or upcoming exams right from the chatbot.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12 space-y-8 md:space-y-0">
            <Image
              height={500}
              width={500}
              src={chatExample4}
              alt="Chat Example"
              className="w-full md:w-1/2 object-contain rounded-lg shadow-lg"
            />
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold">
                Seamless Course Registration Info
              </h2>
              <p className="text-gray-300 text-xl">
                Instantly find class schedules, professor details, and
                registration info—no more jumping between tabs.
              </p>
            </div>
          </div>
        </section>

        {/* Tagline / Final Note */}
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-semibold">
            Empower Your Academic Journey
          </h2>
          <p className="text-gray-300 text-xl">
            Let our AI chatbot be your guide, mentor, and planner. Embrace
            smarter learning, one question at a time.
          </p>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
