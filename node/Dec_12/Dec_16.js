const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tour');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['urban', 'natural']
    },
    tag: {
        type: [String]
    },
    isWished: {
        type: Boolean,
        required: true,
        default: true
    }
})

//methods works on single instance
tourSchema.methods.addTag = function (tag) {
    //use typical function expression due to 'this.' is used
    this.tag += tag;
    return this.save();
    //return a promise
};

//static works on the model
tourSchema.statics.clearWished= function () {
    return this.updateMany({},{$set: {isWished:false}});
    //return a promise
}



// the methods should be added before it's used by the model
const TourList = mongoose.model('TourList', tourSchema);


new TourList({
    name: 'Taipei 101',
    country: 'Taiwan',
    category: 'urban'
}).save();

TourList.insertMany([{
    name: 'Jade Mt.',
    country: 'Taiwan',
    category: 'natural'
},
{
    name: 'Fuji Mt.',
    country: 'Japan',
    category: 'natural'
}]);


async function main (){
    const SG = new TourList({ name: 'East Pearl', country: 'China' });
    await SG.save();
    let data = await TourList.find({}).exec();
    console.log(`===original data here===\n`,data);

    await SG.addTag('new!!!!');
    let data2 = await TourList.find({}).exec();
    console.log(`=== add new tag to East Pearl===\n`,data2);

    await TourList.clearWished();
    let data3 = await TourList.find({}).exec();
    console.log(`===set isWished to false===\n`,data3);
}

main();
