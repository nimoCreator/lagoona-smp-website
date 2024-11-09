export function displayAgo(lastlogin) {
    const now = Date.now();
    let diff = (now / 1000) - lastlogin;
    if (diff < 60) return "Less than a Minute ago";
    else if (diff < 120) return "1 Minute ago";
    else if (diff < 3600) return `${Math.floor(diff / 60)} Minutes ago`;
    else if (diff < 7200) return "1 Hour ago";
    else if (diff < 86400) return `${Math.floor(diff / 3600)} Hours ago`;
    else if (diff < 172800) return "1 Day ago";
    else if (diff < 2592000) return `${Math.floor(diff / 86400)} Days ago`;
    else if (diff < 5184000) return "1 Month ago";
    else if (diff < 31104000) return `${Math.floor(diff / 2592000)} Months ago`;
    else return "Over a Year Ago [RIP]";
}  

import { apiPath } from './consts.js';

export function getLocalStorage() {
    const ls = localStorage.getItem('[Lagoona]');
    return ls ? JSON.parse(ls) : {};
}

export async function fetchPlayersData() {
    console.log('PlayerList: Fetching data...');
    try {
        const response = await fetch(`${apiPath}playersList.php`, {
            method: 'GET',
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'success') {
            let database = data.players;

            const ls = getLocalStorage();
            ls.playerData = database;
            localStorage.setItem('[Lagoona]', JSON.stringify(ls));

        } else {
            console.error('Error fetching:', data.message);
        }
    } catch (error) {
        console.error('Error:', error, 'Error message:', error.message,);
    }
}