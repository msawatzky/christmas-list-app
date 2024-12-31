import { model, Schema, Model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export interface IListItem extends Document {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  store: string;
  isClaimed: boolean;
  claimedBy: string;
  claimedAt: Date;
}

const ListItemSchema: Schema = new Schema({
  iid: { 
    type: String, 
    default: uuidv4,  // This will auto-generate a UUID if none is provided
    unique: true 
  },
  name: { type: String, required: true },
  description: { type: String, required: false },        
  imageUrl: { type: String, required: false },
  price: { type: Number, required: false },
  store: { type: String, required: false },
  isClaimed: { type: Boolean, required: false },
  claimedBy: { type: String, required: false },
  claimedAt: { type: Date, required: false },
});

export const ListItem: Model<IListItem> = model<IListItem>('ListItem', ListItemSchema);