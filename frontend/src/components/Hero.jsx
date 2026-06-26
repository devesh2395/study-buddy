export default function Hero() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=1548&auto=format&fit=crop"
                    />
                </div>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Welcome to Study Buddy
                        <br className="hidden lg:inline-block" />
                        Your AI Study Companion
                    </h1>

                    <p className="mb-8 leading-relaxed">
                        Upload your study material and let AI generate
                        personalized notes, quizzes, study plans and
                        answer all your questions through Teacher Mode.
                    </p>
                </div>
            </div>
        </section>
    );
}