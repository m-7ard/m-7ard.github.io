import AboutMeCard from "./AboutMePage.AboutMeCard";

function AboutMePage() {
    return (
        <div className="flex flex-col grow">
            <section className="p-6 flex flex-col gap-6">
                <div className="text-2xl font-bold">About Me</div>
                <div>
                    I am a dedicated and self-driven Full-Stack Developer from Spain with a strong foundation in modern web development and software engineering principles. My
                    expertise spans a wide range of technologies, design paradigms, and best practices, making me a versatile and effective contributor to any development team.
                </div>
            </section>
            <section className="p-6 flex flex-col gap-6">
                <div className="text-2xl font-bold">Technical Knowledge</div>
                <div className="flex flex-row gap-6 flex-wrap items-start">
                    <AboutMeCard
                        title="Backend Development"
                        description="Proficient in .NET Core (Web API, MVC), Node.js, and Django REST Framework. Experience building RESTful APIs and applications that fullfil real-world needs."
                        keywords={[".NET Core Web API", ".NET Core MVC", "Node.js", "Django", "Django Rest"]}
                    />
                    <AboutMeCard
                        title="Frontend Development"
                        description="Experienced in building dynamic user interfaces with frameworks such as React and Angular. Strong understanding of separation of concerns, such as isolating state
                                management from templates in React applications through the Presenter Controller pattern. Proficient in SCSS and Tailwind and capable of translating any design into functional user interfaces."
                        keywords={["React", "Angular", "Separation Of Concerns", "CSS", "SCSS", "Tailwind"]}
                    />
                    <AboutMeCard
                        title="Database Management"
                        description="Worked extensively with relational databases, including MSSQL, MySQL, and SQLite. Experienced in both raw SQL queries and ORM tools like Entity
                                Framework Core, enabling efficient and flexible database interaction."
                        keywords={["MSSQL", "MySql", "SQLite", "EF Core"]}
                    />
                    <AboutMeCard
                        title="Testing & Quality Assurance"
                        description="Developed and implemented comprehensive integration and unit tests to ensure reliability and maintainability using testing frameworks for C# such as xUnit and for Typescript / Javascript such as Jest. Experience in mocking dependencies through libraries such as Moq and adhering to IoC principles."
                        keywords={["Unit Testing", "Integration Testing", "Mocking", "xUnit", "Jest", "Moq"]}
                    />
                    <AboutMeCard
                        title="Architecture"
                        description="Designed & implemented applications using state-of-the-art methodologies such as Domain Driven Design (DDD), Hexagonal / Onion Architecture, SOLID principles, KISS, DRY. Implemented data patterns such as CQRS and repositories, dependency injection contains / service locators both and without external frameworks. Has also created common interfaces for common frontend issues, such as routers and loaders, and common interfaces for database cross-compatability."
                        keywords={["Domain Driven Design", "Onion Architecture", "Hexagonal Architecture", "SOLID", "CQRS", "Data Patterns", "Dependency Injection", "Common Interfaces"]}
                    />
                    <AboutMeCard
                        title="DevOps & Deployment"
                        description="Worked extensively with version control tools such as Git. Experience in containerizing applications using Docker for consistent and scalable deployment. Currently expanding my knowledge in cloud computing
                                by pursuing Azure certifications (AZ-900 and AZ-204)."
                        keywords={["Git", "Docker", "Containerization", "Azure", "Cloud"]}
                    />
                    <AboutMeCard
                        title="Educational Foundation"
                        description="Familiar with literature by Martin Fowler and Eric Evans, which has deepened my understanding of software architecture and development best
                                practices. Exposure to networking concepts through resources such as Jim Kurose's work, offering a holistic view of system integration."
                        keywords={["Software Architecture", "Networking"]}
                    />
                    <AboutMeCard
                        title="Goals and Aspirations"
                        description="Through my portfolio projects, I have explored the vast landscape of software development, gaining valuable insights into its challenges and
                                opportunities. My goal is to join a collaborative team where I can contribute to impactful projects, take on greater responsibilities, and continue
                                to expand my expertise in areas beyond programming, such as cloud computing and system architecture."
                        keywords={["Contribute to a Team", "Make an Impact", "Take on Greater Responsability"]}
                    />
                    <AboutMeCard
                        title="Bottom Line"
                        description="I am driven by a passion for continuous learning and a commitment to delivering high-quality solutions that align with business goals. Constantly seeking out new ideas to improve at my craft."
                        keywords={["Continuously Learning", "Growth Mindset", "Committed to High Quality", "Open to New and Diverse Ideas"]}
                    />
                </div>
            </section>
        </div>
    );
}

export default AboutMePage;
