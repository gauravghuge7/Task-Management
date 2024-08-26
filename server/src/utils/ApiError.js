

// Tthis page is using the error handling method



class ApiError extends Error {

   constructor(statusCode, message, data=null) {

      super(message);

      this.statusCode = statusCode;
      this.data = data;
      this.success = false;
      

      if(stack) {
         this.stack =  stack
      }
      else {
         Error.captureStackTrace(this, this.constructor);
      }

   }
}


export {
   ApiError
}