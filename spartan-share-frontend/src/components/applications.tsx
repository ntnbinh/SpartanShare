import React from "react";

// const postedProjects = [
//   {
//     id: 1,
//     title: "Example Project 1",
//     majors: ["Computer Science", "Software Engr"],
//     skills: ["Full stack"],
//     duration: "6 months",
//   },

//   {
//     id: 2,
//     title: "Example Project 2",
//     majors: ["Mechanical Engr", "Software Engr"],
//     skills: ["C++", "C"],
//     duration: "1 Year",
//   },
// ];

const appliedProjects = [
  {
    id: 3,
    title: "Example Project 3.14159",
    majors: ["Applied Math"],
    skills: ["Basic Algebra, Partial Differential Equations"],
    duration: "2 Years",
  },
]

export default function Applications() {
  return(
    <div>
      <h2 className="text-6xl font-bold text-blue-700 mb-3 text-center">Applications</h2>
      <hr className="mb-6 border border-blue-200"></hr>

      <div className="flex flex-wrap gap-10">
        {appliedProjects.map((project) => (
          <div key={project.id}
            className="w-64 border border-black shadow-sm">
            <div className="bg-sky-200 px-2 py-1 border-b border-black text-center font-bold">
              {project.title}
            </div>

            <div className="p-3 text-sm space-y-3">
              <div className="flex">
                <span className="font-semibold w-20 shrink-0">Majors:</span>
                <span className="whitespace-pre-wrap">{project.majors.join(", ")}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20 shrink-0">Skills:</span>
                <span className="whitespace-pre-wrap">{project.skills.join(", ")}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20 shrink-0">Duration:</span>
                <span className="whitespace-pre-wrap">{project.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}