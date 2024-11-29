const express = require('express');
const router = express.Router();
//
const members = require('../models/members');
const services = require('../models/services');
const requests  = require('../models/requests');

router.get('/allservices',async(req,res)=>{
    try {
        const data = await services.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send('failed to retreieve data');
    } 
});

router.get('/service/:type',async(req,res)=>{
    try {
        const type1 = req.params.type;
        const data  = await services.find({type:type1});
        res.send(data);
    } catch (error) {
        console.log('error occured ',error);
    }
});

router.post('/service/:type/form',async(req,res)=>{
    try {
        const newService = new services(req.body);
        await newService.save();
        res.send({message:`data saved suuceefully ${newService}`});
    } catch (error) {
        console.log(error);
    }
});

router.post('/member',async(req,res)=>{
    try {
        const newMember = new members(req.body);
        await newMember.save();
        res.send({message:"data saved successfully"});
        
    } catch (error) {
        console.log(error);
    }
});
const calculateEMI = (principal, annualRate, tenure) => {
    const monthlyRate = annualRate / (12 * 100); // Convert annual rate to monthly and percentage to decimal
    const months = tenure; // Tenure in months
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    return emi.toFixed(2); // Return EMI rounded to two decimal places
};

// to calc emi 
router.post('/calc',async(req,res)=>{
    try {
        //const type1 = req.params.type;
        const{amount,tenure,type} = req.body;
        const rate = 50;
        const emi = calculateEMI(amount,rate,tenure);
        res.send(({monthlyEmi: emi }));
    } catch (error) {
        console.log(error);
    }
});

// update passwd by mob number 

router.put('/updatePasswd',async(req,res)=>{
    try {
        const{mob,password}= await req.body;
        await members.findOneAndUpdate({mobile:mob},{passwd:password},{new:true});
        res.send(' data updated ');
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;