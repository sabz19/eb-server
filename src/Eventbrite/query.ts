
import {environment} from '../Environment/environment';
import { URL } from 'url';
import { request } from '../Request';

const eventAPI = environment.eventbriteBase
const eventPath = `/v3/series/${environment.eventSeriesId}/events`

export async function fetchEBData(req: any){
    let url = new URL(eventAPI + eventPath);
    const query = `start_date.range_start=${req.query['start_date.range_start']}&start_date.range_end=${req.query['start_date.range_end']}`
    url.search = query;
    
    return await request(url,'EB');
}
let url = new URL(eventAPI);