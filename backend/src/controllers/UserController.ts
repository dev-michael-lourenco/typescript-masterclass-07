import { Request,Response } from 'express';
import EmailService from '../services/EmailService';

const users=[
    {name:'Michael',email:'kontempler@gmail.com'},
];

export default{
    async getUsers(req:Request,res:Response){
        return res.json(users);
    },
    async create(req:Request,res:Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to:{
                name:'Michael', 
                email:'kontempler@gmail.com'
            },
            message:{
                subject:'Assunto', 
                body:'Funcionou!'
            }
        });

        return res.send();

    }
};