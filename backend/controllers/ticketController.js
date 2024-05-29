const Ticket = require('../models/ticket');
const qrcode = require('qrcode');
const express = require('express');
const router = express.Router();

// Not checking for multiple tickets for same person at same slot  
// Not checking for valid name, phone number, dob and other details

const create_ticket = async (req, res) => {
 
        const { numberOfMembers, members } = req.body;

        if (!numberOfMembers || !members || members.length != numberOfMembers) {
            res.json({
                status: "Failed",
                message: "Invalid input fields!"
            });
        }
        else
        {

        // Array to store the created tickets

        const tickets = [];
        for (let member of members) 
        {

            // Generate QR code for the ticket details
            // const{ name, dateOfBirth }

            const ticketDetails = {
                name: member.name,
                dateOfBirth: member.dateOfBirth,
                gender: member.gender,
                phone: member.phone,
                date: member.date,
                slot: member.slot,
            };

            const { name, dateOfBirth, gender, phone, date, slot } = ticketDetails;

            function isValidName(name) {
                const nameRegex = /^[A-Za-z\s'-]+$/;
                return nameRegex.test(name);
            }
            
            function isValidPhone(phone) {
                const phoneRegex = /^[0-9]{10}$/;
                return phoneRegex.test(phone);
            }
            
            function isValidGender(gender) {
                const validGenders = ['male', 'female', 'other'];
                return validGenders.includes(gender);
            }
            
            // Check validity

            if (!isValidName(name)) 
            {
                res.json({
                    status: "Failed!",
                    message: `Name = ${name} is invalid`,
                    data: member
                });
                return;
            } 
            
            if (!isValidPhone(phone)) 
            {
                res.json({
                    status: "Failed!",
                    message: `Phone = ${phone} is invalid`,
                    data: member
                });
                return;
            } 
            
            if (!isValidGender(gender)) 
            {
                res.json({
                    status: "Failed!",
                    message: `Gender = ${gender} is invalid`,
                    data: member
                });
                return;
            }

            if(isNaN(new Date(dateOfBirth).getTime())){
                res.json({
                    status: "FAILED",
                    message: "Invald date of birth entered",
                    data: member
                });
                return;
            }

            if(isNaN(new Date(date).getTime())){
                res.json({
                    status: "FAILED",
                    message: "Invald Visiting Date entered",
                    data: member
                });
                return;
            }

            // Slot is not checked
            // Valid content 

            const qrCode = await qrcode.toDataURL(JSON.stringify(ticketDetails));
            
            // Create a ticket object with member details and QR code

            const newTicket = new Ticket({
                name: member.name,
                dateOfBirth: member.dateOfBirth,
                gender: member.gender,
                phone: member.phone,
                date: member.date,
                slot: member.slot,
                qr: qrCode
            });
            
            tickets.push(newTicket);

            // Save the ticket to the database
            newTicket.save().then(result =>{
                console.log('Ticket created:'); // may output the ticket details
            })
            .catch(err =>{
                console.log(err);
                res.json({
                    status : "FA",
                    message : " Error occuring while saving Ticket",
                    data: result
                })
            });
        }

        res.json({
            status: "SUCCESS!",
            message: "Tickets Created",
            data: tickets
        });
    }
}

module.exports = { 
  create_ticket
}

