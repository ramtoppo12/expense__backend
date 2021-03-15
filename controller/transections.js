//desc Get all transections
//@route Get /api/v1/transections
//access to Public

const Transections = require('../models/transections');

exports.getTransections = async (req,res,next) =>{
    try {
        const transection = await Transections.find();

        return res.status(200).json({
            sucess:true,
            count:transection.length,
            data:transection
        })
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            error:'Server error'
        })
    }
}
exports.addTransections = async (req,res,next) =>{
    try {
        const {text,amount} = req.body;

    const transection = await Transections.create(req.body);

    return res.status(201).json({
        sucess:true,
        data:transection
    })
    } catch (error) {
        if(error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(val=>val.message);

            return res.status(400).json({
                sucess:false,
                error:messages
            })
        }else{
            return res.status(500).json({
            sucess:false,
            error:'Server error'
        })
        }
    }
}
exports.deleteTransections = async (req,res,next) =>{
try {
    const transection = await Transections.findById(req.params.id);
    if(!transection){
        return res.status(404).json({
            sucess:false,
            error:"No transection found"
        })
    }

    await transection.remove();

    return res.status(200).json({
        sucess:true,
        data:{}
    })
} catch (error) {
    if(error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(val=>val.message);

            return res.status(400).json({
                sucess:false,
                error:messages
            })
        }else{
            return res.status(500).json({
            sucess:false,
            error:'Server error'
        })
        }
}

}