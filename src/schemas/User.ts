import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
    firstName?: string,
    lastName?: string,
    email?: string,
    fullName(): string
}
const UserSchema = new Schema<UserInterface>({
    firstName: String,
    lastName: String,
    email: String
},
{
    timestamps: true
});

UserSchema.methods.fullName = function ():string {
    return this.firstName + ' ' + this.lastName;
};

export default model<UserInterface>('User', UserSchema);
