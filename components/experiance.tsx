const experiences = [
    {
      title: "Junior UX Designer",
      company: "WEBEX",
      date: "Jan 2007 - Feb 2009",
      color: "border-pink-400",
    },
    {
      title: "UX & UI Designer",
      company: "AUGMEDIX",
      date: "Mar 2009 - Aug 2014",
      color: "border-orange-400",
    },
    {
      title: "Senior UI Designer",
      company: "THEMEFISHER",
      date: "Sep 2014 - Present",
      color: "border-teal-400",
    },
  ];
  
  export default function Experience() {
    return (
      <section className="py-20 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-10">Experience</h2>
        <div className="flex flex-wrap justify-center gap-12 px-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center w-64 text-center">
              <div className={`w-16 h-16 border-8 ${exp.color} rounded-full flex items-center justify-center`}>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
              <p className="mt-4 text-gray-600">{exp.date}</p>
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-gray-500">{exp.company}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }