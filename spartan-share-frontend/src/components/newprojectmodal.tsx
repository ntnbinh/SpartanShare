import React from "react";

export default function NewProjectModal({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <div>
        <h2>New Project</h2>

        <form>
          <div>
            <label>Enter Title:</label>
            <input type="text" placeholder="Title"></input>
          </div>

          <div>
            <label>Enter Description:</label>
            <textarea placeholder="Description"></textarea>
          </div>

          <div>
            <label>Start and End Date:</label>
            <input type="date"></input>
            <input type="date"></input>
          </div>

          <div>
            <label>Skills Wanted:</label>
            <input type="text" placeholder="Skills"></input>
          </div>

          <div>
            <label>Graduate Level:</label>
            <select>
              <option>Undergrad/Grad</option>
              <option>Undergrad</option>
              <option>Graduate</option>
            </select>
          </div>

          <div>
            <label>Majors Wanted:</label>
            <select>
              <option>Computer Science</option>
              <option>Software Engr</option>
              <option>Computer Engr</option>
              <option>Mechanical Engr</option>
            </select>
          </div>

          <div>
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Post Project</button>
          </div>
        </form>
      </div>
    </div>
  )
}