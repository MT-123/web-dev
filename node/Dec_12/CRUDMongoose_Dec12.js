const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/zoo');//"zoo" is the db chosen

//create a schema
const catSchema = new mongoose.Schema({

    name: String,//first charactor is Uppercase for datatype
    
    //a more detailed way of schema
    age: {
        type: Number,
        min: 0
    },
    color: {
        type: String,
        required: false,
        default: 'black'//if the value is not given, black is adopted
    },
    gender: {
        type:String,
        enum:['M','F'],//the input must only be one of the value in the array
        default:'F'
    },
    personality:{//a nest structure
        isFriendly:{
            type:Boolean,
            default:false
        },
        isPicky:{
            type:Boolean,
            default:true
        }
    }
});

//create a model with the schema
const Cat = mongoose.model('Cat', catSchema);
//the collection name will be 'cats' by mongoose

//to make sure data have been written into the db prior to finding them, async is needed
async function asyncCRUD() {
    //Create
    //add a data to the collection
    const firstCat = new Cat({
        name: 'Hen',
        gender: 'M',
        age: 3
    });
    //save to db
    await firstCat.save();

    //add multiple data to db, no need to do .save() in this method
    await Cat.insertMany([
        {
            name: 'gigi',
            gender: 'F',
            age: 1
        },
        {
            name: 'fen',
            gender: 'F',
            age: 2
        }
    ]);

    //Read
    const data = await Cat.find({ age: { $gte: 2 } }).exec();//find and return the matched data
    console.log('===data matched===', data, '===data matched===');

    //Update
    const updateData = await Cat.findOneAndUpdate({ name: { $in: ['gigi'] } }, { age: 10 }, { new: true,runValidators:true });
    //option "new" is set to "true" for returning the modified data, otherwise the original data is returned
    //oppton "runValidators" is set to "true" for schema validation, the defalut is bypassing validation for update
    console.log('=====updated data=====', updateData, '=====updated data=====');

    //Delete
    const deleteMSG = await Cat.deleteOne({ gender: 'M' });
    console.log('=====deleted message=====', deleteMSG, '=====deleted message=====');
};

asyncCRUD();
