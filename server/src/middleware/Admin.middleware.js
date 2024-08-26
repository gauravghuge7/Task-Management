import jwt from 'jsonwebtoken';

const verifyAdmin = async (req, res, next) => {

   try {

      const AdminaccessToken = req.cookies.AdminaccessToken;

      if(!AdminaccessToken) {
         return res.status(401).json({
            message: 'unauthorized employee '
         })
      }

      const decode = await jwt.verify(AdminAccessToken, process.env.ADMIN_ACCESS_SECRET_KEY);


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
   
   const {adminEmail} = req.user;
   
} 




*/