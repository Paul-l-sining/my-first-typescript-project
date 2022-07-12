import axios from "axios";
import Reminder from '../modules/reminder';


class ReminderService {

    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })

    async getReminders(){
        const response = await this.http.get<Reminder[]>('/todos');
        return response.data;
    }

    async addReminders(title: string){
        const response = await this.http.post<Reminder>('/todos', {title: title});
        return response.data;
    }

    async deleteReminders(id: number){
        const response = await this.http.delete<Reminder>('/todos/' + id );
        return response.data;
    }

}


export default new ReminderService();