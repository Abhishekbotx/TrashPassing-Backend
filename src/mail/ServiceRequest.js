exports.newServiceRequest = (userName, userEmail, userPhone, userMessage) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>New Service Request</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
                text-align: left;
                padding-left:10px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href=""><img class="logo" src="https://res.cloudinary.com/dvtjm1ahg/image/upload/fl_preserve_transparency/v1718608414/Trashpassing_logo_jpg_gnsotp.jpg?_s=public-apps" alt="TrashPassing Logo"></a>
            <div class="message">New Service Request</div>
            <div class="body">
                <p>Hello Admin,</p>
                <p>A new service request has been submitted with the following details:</p>
                <p><span class="highlight">Name:</span> ${userName}</p>
                <p><span class="highlight">Email:</span> ${userEmail}</p>
                <p><span class="highlight">Phone Number:</span> ${userPhone}</p>
                <p><span class="highlight">Message:</span> ${userMessage}</p>
                <p>Please review and take appropriate action.</p>
            </div>
            <div class="support">If you have any questions or need further assistance, please feel free to reach out to us at <a href="mailto:support@trashpassing.com">support@trashpassing.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`;
};
