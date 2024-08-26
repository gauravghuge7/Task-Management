import jwt from 'jsonwebtoken';

const verifyEmployee = async (req, res, next) => {

   try {

      const EmployeeAccessToken = req.cookies.EmployeeAccessToken;

      if(!EmployeeAccessToken) {
         return res.status(401).json({
            message: 'unauthorized employee '
         })
      }

      const decode = await jwt.verify(EmployeeAccessToken, process.env.EMPLOYEE_ACCESS_SECRET_KEY);


      req.user = decode;


      next();

   } 
   catch (error) {
      console.log(error);
      return res.status(401).json({
         message: 'unauthorized employee '
      })
   }

}

/*


(req, res) => {
   
   const {employeeEmail} = req.user;
   
} 




*/