import {promises as fs} from 'fs';

function getRandomEntry<T>(data: T[]) {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

export default async function ParseJSON(){
    const file = await fs.readFile('/Work/Training/mars-rover/mars-rover/app/assets/photo.json', 'utf8');
    const data = JSON.parse(file);
    const arrayData = Array.from(data.photos)
    return getRandomEntry(arrayData);
}
