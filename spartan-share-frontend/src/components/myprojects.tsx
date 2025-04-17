import React from "react";

const Projects = [
  {
    id: 1,
    title: "Example Project 1",
    majors: ["Computer Science", "Software Engr"],
    skills: ["Full stack"],
    duration: "6 months",
  },

  {
    id: 2,
    title: "Example Project 2",
    majors: ["Mechanical Engr", "Software Engr"],
    skills: ["C++", "C"],
    duration: "1 Year",
  },
];

export default function MyProjects() {
  return (
    <div className="">
      <h2 className="text-6xl font-bold text-blue-700 mb-3 text-center">My Projects</h2>
      <hr className="mb-6 border-blue-200"></hr>

      <div className="mb-10 flex justify-start">
        <div className="w-48 h-40 border border-gray-400 rounded-lg flex items-center justify-center 
                      text-gray-600 font-semibold text-xl hover:shadow cursor-pointer">
          + CREATE<br></br>
          NEW<br></br>
          PROJECT
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4">My Posted Projects:</h3>
      
      <div className="flex flex-wrap gap-6">
        {Projects.map((project) => (
          <div key={project.id}
          className="w-64 border border-gray-400 rounded shadow-sm">
            <div className="bg-blue-100 px-2 py-1 text-center font-bold">
              {project.title}
            </div>

            <div className="p-3 text-sm">
              <p><span className="font-semibold">Majors:</span> {project.majors.join(", ")}</p>
              <p><span className="font-semibold">Skills:</span> {project.skills.join(", ")}</p>
              <p><span className="font-semibold">Duration:</span> {project.duration}</p>
            </div>

            <div className="flex justify-between px-3 pb-3">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Delete Project</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}