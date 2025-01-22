import Divider from "../../reusables/Divider";
import AboutMeCard from "./AboutMePage.AboutMeCard";

function AboutMePage() {
    return (
        <div className="overflow-hidden">
            <section className="p-3 token-default-flex-col">
                <div className="token-default-title">About Me</div>
                <Divider />
                <div className="token-base-text">
                    I am a dedicated and self-driven Full-Stack Developer from Spain with a strong foundation in modern web development and software engineering principles. My
                    expertise spans a wide range of technologies, design paradigms, and best practices, making me a versatile and effective contributor to any development team.
                </div>
            </section>
            <section className="p-3 token-default-flex-col">
                <div className="token-default-title">Technical Knowledge</div>
                <Divider />
                <AboutMeCard
                    title="Backend Development"
                    description="Proficient in .NET Core (Web API, MVC), Node.js, and Django REST Framework. Skilled in applying Domain-Driven Design (DDD) principles, using domains and value objects to enforce business rules. Experienced with software architecture patterns, including layered architecture, repository patterns, and CQRS."
                    keywords={[".NET Core Web API", ".NET Core MVC", "Node.js", "Django", "Django Rest", "Domain Driven Design", "Design Patterns"]}
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
                    description="Developed and implemented comprehensive integration and unit tests to ensure reliability and maintainability using testing frameworks for C# such as xUnit and for ts/js such as Jest. Emphasize clean, maintainable code
                                that adheres to SOLID principles and industry best practices."
                    keywords={["Unit Testing", "Integration Testing", "xUnit", "Jest"]}
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
                    description="I am driven by a passion for continuous learning and a commitment to delivering high-quality solutions that align with business goals."
                    keywords={["Passion", "Continuously Learning", "Committed to High Quality"]}
                />
            </section>
        </div>
    );
}

export default AboutMePage;
