function NewConversation({
  generatingResponse,
}: {
  generatingResponse: boolean;
}) {
  // const [generating, setGenerating] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log(generatingResponse);
  //   setGenerating(generating);
  // }, [generatingResponse, generating]);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-950 text-white px-4 py-12">
      {generatingResponse ? (
        <div className="mb-4 text-left animate-pulse bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
          RUbot is thinking! Our AI a are working to assist you with your
          queries....
        </div>
      ) : (
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-10">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Welcome to RUbot</h1>
            <p className="text-gray-300 text-lg">
              Start a conversation and get assistance from our swarm of
              intelligent AI agents.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 rounded-lg p-6 space-y-4 border border-gray-700">
              <h2 className="font-semibold text-xl">One-Stop Information</h2>
              <p className="text-gray-300 text-sm">
                Get details about university programs, courses, and campus life
                instantly, without browsing multiple sites.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4 border border-gray-700">
              <h2 className="font-semibold text-xl">Personalized Coursework</h2>
              <p className="text-gray-300 text-sm">
                Generate custom course plans based on your interests and
                academic history.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4 border border-gray-700">
              <h2 className="font-semibold text-xl">Stay on Track</h2>
              <p className="text-gray-300 text-sm">
                Connect with Canvas to monitor assignments, deadlines, and exam
                schedules from one interface.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-700" />

          {/* Example Prompts */}
          <div className="w-full space-y-6">
            <h2 className="text-2xl font-semibold text-center">Try Asking:</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-md border border-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                <p className="text-gray-300">
                  &quot;What are the prerequisite courses for the Masters in
                  IT&A program?&quot;
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-md border border-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                <p className="text-gray-300">
                  &quot;Show me a course plan focusing on Data Science
                  electives.&quot;
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-md border border-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                <p className="text-gray-300">
                  &quot;When is my next assignment due in the Business Analytics
                  course?&quot;
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-md border border-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                <p className="text-gray-300">
                  &quot;Can you help me find relevant courses for AI and Machine
                  Learning?&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewConversation;
