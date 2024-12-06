function AboutPage() {
  return (
    <div className="h-full w-full bg-gray-900 text-white">
      <div className="px-8 md:px-20 py-10 space-y-16">
        {/* Page Heading */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            About This Project
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A technical dive into the architecture, concepts, and inspiration
            driving our AI-enabled campus guide.
          </p>
        </section>

        {/* Description Section */}
        <section className="space-y-8 flex justify-center">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-5xl w-full text-center">
            <h2 className="text-3xl font-semibold mb-4">Description</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Developed as a final project submission for the{' '}
              <strong>Advanced Database </strong>
              Course in the{' '}
              <strong>
                Master’s of Information Technology and Analytics{' '}
              </strong>{' '}
              program at Rutgers Business School, this project merges modern
              database strategies, cloud infrastructure, and microservice
              architectures.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4 text-lg">
              At its core, it harnesses the power of cutting-edge Large Language
              Model (LLM) AI agents to create an integrated, user-friendly
              platform. The result? A singular, dynamic interface that
              consolidates university information, and streamlines course
              registration data. It exemplifies how emerging technologies can be
              artfully combined to enhance the academic experience.
            </p>
          </div>
        </section>

        {/* Motivation Section */}
        <section className="space-y-8 flex justify-center">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-5xl w-full text-center">
            <h2 className="text-3xl font-semibold mb-4">Motivation</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              As a prospective graduate student, wading through university
              websites, program PDFs, and scattered resources felt like a
              never-ending obstacle course. Why couldn’t there be a single
              platform that distilled key information, allowing effortless
              exploration? That question shaped the genesis of this project.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4 text-lg">
              Once on campus, the challenge shifted to managing complex
              schedules, varied coursework, and looming assignment deadlines
              hidden behind multiple Canvas tabs. This realization inspired the
              integration of AI agents capable of reading and interpreting data
              from Canvas, ensuring students stay informed about their academic
              responsibilities. Ultimately, this project was born from a desire
              to simplify academic life, centralize critical information, and
              introduce conversational intelligence into the heart of the
              learning experience.
            </p>
          </div>
        </section>

        {/* Technical Section */}
        <section className="space-y-8 ">
          <h2 className="text-4xl font-semibold text-center">
            Technical Overview
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-5xl mx-auto text-xl">
            The application’s architecture is designed as a network of
            specialized services that seamlessly integrate to deliver a unified
            user experience. Here’s an overview of the key components and
            technologies used:
          </p>

          <div className="max-w-5xl mx-auto space-y-12 text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <hr className="border-gray-700 border-2" />
              <h3 className="text-2xl font-bold">Microservice Architecture</h3>
              <p className="max-w-4xl mx-auto text-lg">
                The project is segmented into independent but interconnected
                services—Frontend (Next.js), Auth, Chat, and GenAI—each focusing
                on specific functionalities. This modularity ensures
                scalability, maintainability, and easier iterative improvements.
              </p>
            </div>

            <div className="space-y-4">
              <hr className="border-gray-800" />
              <h3 className="text-2xl font-bold">
                Frontend (Next.js + TypeScript)
              </h3>
              <p className="max-w-4xl mx-auto text-lg">
                A React-based interface that not only renders a dynamic user
                experience but also acts as an API gateway, routing requests to
                backend services. TypeScript adds type safety for reliable and
                maintainable code.
              </p>
            </div>

            <div className="space-y-4">
              <hr className="border-gray-800" />
              <h3 className="text-2xl font-bold">
                Auth Service (ExpressJS + MongoDB)
              </h3>
              <p className="max-w-4xl mx-auto text-lg">
                Handles user registration, authentication, and JWT token
                management. User profiles are securely stored in MongoDB,
                ensuring quick lookups and scalability.
              </p>
            </div>

            <div className="space-y-4">
              <hr className="border-gray-800" />
              <h3 className="text-2xl font-bold">
                Chat Service (ExpressJS + PostgreSQL)
              </h3>
              <p className="max-w-4xl mx-auto text-lg">
                Orchestrates conversations, stores messages in a relational
                schema, and interacts with the GenAI service. It tracks user
                queries, logs AI responses, and maintains a comprehensive chat
                history for each user.
              </p>
            </div>

            <div className="space-y-4">
              <hr className="border-gray-800" />
              <h3 className="text-2xl font-bold">
                GenAI Service (Python + Agentic AI Workflow)
              </h3>
              <p className="max-w-4xl mx-auto text-lg">
                Employs advanced LLM capabilities for retrieving information
                from university resources, calling external APIs (e.g., Canvas),
                and providing context-aware responses. This internal service is
                accessible only through the Chat service, ensuring a secure and
                managed pipeline.
              </p>
            </div>
            <div className="space-y-4">
              <hr className="border-gray-800" />
              <h3 className="text-2xl font-bold">
                Vector Database (MongoDB Atlas)
              </h3>
              <p className="max-w-4xl mx-auto text-lg">
                Leveraging MongoDB Atlas as a vector database allows the system
                to store vector embeddings of course syllabi and other academic
                materials. By performing vector searches against these
                embeddings, the GenAI service can rapidly surface the most
                relevant information, ensuring more accurate and contextually
                rich responses to student queries.
              </p>
            </div>

            <hr className="border-gray-700 border-2" />
          </div>
        </section>

        {/* More Info Section */}
        <section className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Explore the Code</h3>
          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto">
            Dive deeper into the technical details, code structure, and
            implementation nuances by visiting the GitHub repository.
          </p>
          <a
            href="https://github.com/adwait-kalsekar/rubot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md font-medium"
          >
            View on GitHub
          </a>
        </section>
      </div>
    </div>
  );
}
export default AboutPage;
