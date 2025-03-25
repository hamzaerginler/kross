import React from "react";
import "../styles/templates/homepage.css"; // CSS dosyasını import ediyoruz

const SkillsCopy = () => {
    const skills = [
        { name: "Web Design", percentage: 90, color: "bg-orange-700", waveColor: "rgba(255, 165, 0, 0.4)" },
        { name: "Logo Design", percentage: 60, color: "bg-purple-700", waveColor: "rgba(128, 0, 128, 0.4)" },
        { name: "After Effects", percentage: 80, color: "bg-blue-700", waveColor: "rgba(0, 0, 255, 0.4)" },
        { name: "Web App", percentage: 70, color: "bg-red-700", waveColor: "rgba(255, 0, 0, 0.4)" },
    ];

    return (
        <section className="py-20 bg-white text-black text-center">
            <h2 className="text-4xl font-bold mb-10">Skills</h2>
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="w-64 h-32 shadow-lg rounded-lg flex flex-col justify-end p-4 relative overflow-hidden"
                    >
                        <div
                            className={`progress-wrapper ${skill.color} brightness-95 contrast-150`}
                            style={{
                                height: `${skill.percentage}%`,
                                minHeight: "50px", // Yüksekliği artırdık
                            }}
                        >
                            <div
                                className="wave"
                                style={{
                                    backgroundColor: skill.waveColor, // Dalga rengi beceriye göre
                                }}
                            ></div>
                        </div>
                        <p className="text-lg font-semibold mt-2 relative z-30">
                            {skill.name} ({skill.percentage}%)
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsCopy;
