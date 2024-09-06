import { useState } from 'react';

const EditProjectForm = ({ projectData, onSave }) => {
   const [formData, setFormData] = useState({ ...projectData });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
   };

   return (
      <div className="container mt-5">
         <h2>Edit Project</h2>
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <label htmlFor="projectName" className="form-label">Project Name</label>
               <input
                  type="text"
                  className="form-control"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="mb-3">
               <label htmlFor="companyName" className="form-label">Company Name</label>
               <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="mb-3">
               <label htmlFor="spokePersonEmail" className="form-label">Spokesperson Email</label>
               <input
                  type="email"
                  className="form-control"
                  id="spokePersonEmail"
                  name="spokePersonEmail"
                  value={formData.spokePersonEmail}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="mb-3">
               <label htmlFor="spokePersonName" className="form-label">Spokesperson Name</label>
               <input
                  type="text"
                  className="form-control"
                  id="spokePersonName"
                  name="spokePersonName"
                  value={formData.spokePersonName}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="mb-3">
               <label htmlFor="spokePersonNumber" className="form-label">Spokesperson Number</label>
               <input
                  type="tel"
                  className="form-control"
                  id="spokePersonNumber"
                  name="spokePersonNumber"
                  value={formData.spokePersonNumber}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="mb-3">
               <label htmlFor="teamLead" className="form-label">Team Lead</label>
               <input
                  type="text"
                  className="form-control"
                  id="teamLead"
                  name="teamLead"
                  value={formData.teamLead}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="mb-3">
               <label htmlFor="description" className="form-label">Project Description</label>
               <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  required
               ></textarea>
            </div>
            <button type="submit" className="btn btn-success">Save</button>
         </form>
      </div>
   );
};

export default EditProjectForm;
