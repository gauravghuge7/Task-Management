import jwt from 'jsonwebtoken';

const verifyclient = async (req, res, next) => {

   try {

      const ClientAccessToken = req.cookies.ClientAccessToken;

      if(!ClientAccessToken) {
         return res.status(401).json({
            message: 'unauthorized employee '
         })
      }

      const decode = await jwt.verify(ClientAccessToken, process.env.CLIENT_ACCESS_SECRET_KEY);


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
   
   const {clientEmail} = req.user;
   
} 




*/