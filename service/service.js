import nodemailer from "nodemailer";

const sendMail = async (email,subject,text)=>{
 try {
     //create transporter 
     console.log("Create transport")
       const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
        },
      });

        await transporter.sendMail({
        from:process.env.USER,
  			to: email,
		    subject: subject,
        text: `Password recreate here link below ${text}`
        });
        console.log("Password reset Email sent successfully");
        } catch (error) {
        console.log("Email not sent",error);
	      return error;    
      }
 }
  export {sendMail}