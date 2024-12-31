
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ListItem } from "../interfaces/list-item.interface";

@Injectable({ providedIn: 'root' })
export class ListItemService {
    private readonly baseUrl: string = 'http://localhost:3333/api';

    constructor(private http: HttpClient) {}

    getAll(): Observable<ListItem[]> {
        return this.http.get<ListItem[]>(`${this.baseUrl}/list-items`);
    }

    create(listItem: ListItem): Observable<ListItem> {
        return this.http.post<ListItem>(`${this.baseUrl}/list-item`, listItem);
    }

    delete(id: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.baseUrl}/list-item/${id}`);
    }
} 