import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            reqired:true,
        },
        description:{
            type:String,
            reqired:true,
        },
        address:{
            type:String,
            reqired:true,
        },
        regularPrice:{
            type:Number,
            reqired:true,
        },
        discountPrice:{
            type:Number,
            reqired:true,
        },
        bathrooms:{
            type:Number,
            reqired:true,
        },
        bedrooms:{
            type:Number,
            reqired:true,
        },
        furnished:{
            type:Boolean,
            reqired:true,
        },
        parking:{
            type:Boolean,
            reqired:true,
        },
        type:{
            type:String,
            reqired:true,
        },
        offer:{
            type:Boolean,
            reqired:true,
        },
        imageUrls:{
            type:Array,
            reqired:true,
        },
        userRef:{
            type:String,
            reqired:true,
        },},{timestamps:true}
        )

const Listing = mongoose.model("Listing",listingSchema);

export default Listing;