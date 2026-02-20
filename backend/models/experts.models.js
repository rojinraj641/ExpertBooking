import mongoose, { mongo } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const expertSchema = new mongoose.Schema(
    {
        expertId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Experts",
            required: true
        },
        profilePic: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ['Software Development','Web Development','Mobile App Development','Devops & Cloud', 'Data Science & AI', 'CyberSecurity'],
            required: true
        },
        ratings: {
            type: Number,
            required: true
        },
        experience: {
            type: Number,
            required: true
        }
    },{timestamps: true}
)

expertSchema.plugin(mongooseAggregatePaginate);
export const Experts = mongoose.model("Experts",expertSchema);