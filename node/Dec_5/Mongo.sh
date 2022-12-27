#this is a note

#to get into mongo shell
#at terminal
mongosh


#to create or go to a db
use aTestDB

#show database
show dbs

#show collections in the current db
show collections

#insert a document to a collection
#switch to the db before insertion
db.collectionName.insert({name:'Paul',age:31})
# if there is no such a collection, it will create one

#if insert multiple documents, the input has to be array
db.collectionName.insert([
{name:'Danny',age:25},
{name:'Frank',age:17}])

#show all documents in the  collection
db.collectionName.find()

#update a document
#only the first matching document will be updated
db.cats.updateOne(
{age:2},
#first argu is the matching criterion
{$set:{age:20,color:'chocolate'}})
#second argu is the updating content

#all the matching documents will be updated
db.cats.updateMany(
{age:2},
{$set:{age:20,color:'chocolate'}})

#delete a document
db.cats.deleteOne({age:20})
#delete the first one
db.cats.deleteMany({age:1})
#delete all matching

db.cats.deleteMany({color:'chocolate',age:20})
#delete all documents with color and age matched

db.cats.deleteMany({})
#delete all documents

