export interface ListItem {
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