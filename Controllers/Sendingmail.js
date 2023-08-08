import nodemailer from "nodemailer";


export const SendBirthdaymail = (userEmail)=>{
    let config = {
        service : 'gmail',
        secure: true,
        auth : {
            user: process.env.EMAIL,
            pass:  process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let message = {
        from : process.env.EMAIL,
        to : userEmail,
        subject: "Happy Birthday bro",
        text: "Successfully Mail Send by Node JS", 
        html: "<b>Mail From Node Mail</b>",
    }
    try {
        transporter.sendMail(message)
    } catch (error) {
    }

}


