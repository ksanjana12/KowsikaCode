import React from "react";

 import ChatBot from "react-simple-chatbot";

const ChatBotContainer = () => {

    return(
    <ChatBot steps={[
        {
            id: '1',
            message: 'Welcome to our services.Please enter your name',
            trigger: 'Ask Name',
        },
        {
            id: 'Ask Name',
            user: true,
            trigger: '3'
        },

        {
            id: '3',
            message: 'Hi {previousValue}, Please select your issues ',
            trigger: 'issues'
        },

        {
            id: 'issues',
            options: [
                { value: 'account managment', label: 'Account Management', trigger: 'Account' },
                { value: 'network', label: 'Network Issue', trigger: 'Network issues' },
            ]
        },

        {
            id: 'Account',
            user: true,
            trigger: 'Account Management',
        },
        {
            id: 'Account Management',
            message: "To sign up for a Verizon account, you can visit our website  and follow the on-screen instructions.You can update your account information by logging into your Verizon account and navigating to the 'Profile' or 'Account Settings' section.",
            trigger: 'end-message',
        },
        {
            id: 'Network issues',
            user: true,
            trigger: 'Network Issues',
        },
        {
            id: 'Network Issues',
            message: "You can check network coverage in your area by using the 'Network Coverage' feature on the Verizon website.If you're experiencing network issues, try restarting your device, checking for any network outage alerts, or contacting Verizon customer support for assistance.",
            trigger: 'end-message',
        },
        {
            id: 'end-message',
            message: 'Thank you for  visting our website; we truly appreciate your interest and hope you found what you are looking for!',
            end: true,
        },
    ]}
    floating={true}
    /> 
  
    )

};
export default ChatBotContainer;
