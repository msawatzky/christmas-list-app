import { ListItemDto } from "./list-item.model";
import { ListItem, IListItem } from "./list-item.schema";

export class ListItemService {

    static async getAll(): Promise<ListItemDto[]> {
        try {
            const listItems: IListItem[] | void = await ListItem.find();
            return (listItems || []).map((listItem: IListItem) => ({ 
                id: listItem.id, 
                name: listItem.name, 
                description: listItem.description, 
                imageUrl: listItem.imageUrl, 
                price: listItem.price, 
                store: listItem.store, 
                isClaimed: listItem.isClaimed, 
                claimedBy: listItem.claimedBy, 
                claimedAt: listItem.claimedAt 
            }));
        } catch (error) {
            console.error('Error fetching list items:', error);
            throw error;
        }
    }

    static async create(listItem: ListItemDto): Promise<ListItemDto> {
        const newListItem: IListItem | void = await ListItem.create(listItem).catch(console.log);
        if (newListItem) {
            return { id: newListItem?.id, name: newListItem?.name, description: newListItem?.description, imageUrl: newListItem?.imageUrl, price: newListItem?.price, store: newListItem?.store, isClaimed: newListItem?.isClaimed, claimedBy: newListItem?.claimedBy, claimedAt: newListItem?.claimedAt };
        }
        return null;
    }

    static async delete(id: string): Promise<boolean> {
        const deletedListItem: IListItem | void = await ListItem.findByIdAndDelete(id).catch(console.log);
        return !!deletedListItem;
    }
}