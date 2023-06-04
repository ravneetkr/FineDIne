const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://Ravneet:Ravneet2001@cluster0.rcmqa37.mongodb.net/FineDineMern?retryWrites=true&w=majority'
const mongoURI = 'mongodb://Ravneet:Ravneet2001@ac-0zbpo07-shard-00-00.rcmqa37.mongodb.net:27017,ac-0zbpo07-shard-00-01.rcmqa37.mongodb.net:27017,ac-0zbpo07-shard-00-02.rcmqa37.mongodb.net:27017/FineDineMern?ssl=true&replicaSet=atlas-q6fr7h-shard-0&authSource=admin&retryWrites=true&w=majority'
// const mongoDB =async() =>{
//     await mongoose.connect(mongoURI, {useNewUrlParser: true}
//      )
//      .then (() => {
//         console.log('Connected to MongoDB');
           
//         const fetched_data = mongoose.connection.db.collection("food_items");
//         console.log(fetched_data)
//         const arr =  fetched_data.find({}).toArray()
//         console.log(arr)
//         fetched_data.find({}).toArray(function(err , data){
//            if(err) console.error(err);  
//            else console.log(data);
//         })
      

//       })
//       .catch((error) => {
//         console.log('Error connecting to MongoDB:', error.message);
      
     
//     }
//       );
// }

const mongoDB = async () => {
   await mongoose.connect(mongoURI).then(() =>console.log('connected to mongoDB')).catch(()=>console.log('failed to connect'))
   const fetch_data = mongoose.connection.db.collection("food_items").find({})
   const results = await fetch_data.toArray();
   const foodCategory =await mongoose.connection.db.collection("foodCategory").find({})
   const food = await foodCategory.toArray();
        if (results.length > 0) {
             global.food_items =[]
             global.foodCategory =[]
        
           results.forEach((result, i) => {
              global.food_items.push(result)
              
              
          })
          food.forEach((result, i) => {
            global.foodCategory.push(result)
            
            
        })
          
          
          

       } else {
    
           console.log(`No listings found`);
     }
       
    } 





   //    if (results.length > 0) {
//        global.food_items =[

//        ]
//        results.forEach((result, i) => {
//          global.food_items.push(result);

          
//        })
//    } else {

//        console.log(`No listings found`);
//    }
   
// }
module.exports = mongoDB;
