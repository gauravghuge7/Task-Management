import { useState , useRef} from 'react';
import JoditEditor from 'jodit-react';



  



const CreateProjectForm = ({ clientId, clientName}) => {
   const [formData, setFormData] = useState({
      projectName: '',
      companyName: '',
      spokePersonEmail: '',
      spokePersonName: '',
      spokePersonNumber: '',
      description: '',
   });

   const editor = useRef(null);
   const [content, setContent] = useState('');
   const config = {
      readonly: false,
      placeholder: 'Start typing your description...',
  };


   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted:', formData);
   };

   return (
      <div className="container mt-5">
         
         <header className='flex gap-10'> 

            <h2>Create Project</h2>

            <h2> {clientName}</h2>

         </header>

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
                  <label htmlFor="description" className="form-label">Project Description</label>
                
                                   
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        onChange={newContent => setContent(newContent)}

                                    /> 
                           
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </div>
   );
};

export default CreateProjectForm;
