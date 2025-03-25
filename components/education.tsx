



  
  export default function Education() {
    const educationData = [
      {
        year: "2006",
        degree: "Masters in UX Design",
        school: "Massachusetts Institute of Technology",
      },
      {
        year: "2004",
        degree: "Honours in Fine Arts",
        school: "Harvard University",
      },
      {
        year: "2000",
        degree: "Higher Secondary Certificate",
        school: "Cardiff School",
      },
      {
        year: "1998",
        degree: "Secondary School Certificate",
        school: "Cardiff School",
      },
    ];
    return (
      <section className="py-20 bg-white text-black text-center ">
        <h2 className="text-4xl font-bold mb-10">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 background-image: url('/krosscreative/public/images/backgrounds/education-bg.jpg')">
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full mb-4">
                🎓
              </div>
              <p className="text-gray-600">{edu.year}</p>
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-gray-500">{edu.school}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }