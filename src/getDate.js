
const getCreationDate = () => {
    const creationDate = new Date()
        const year = creationDate.getFullYear()
        let month = creationDate.getMonth() +1
        let day = creationDate.getDate()
        switch(month){
            case 1:
                month = 'January'; break;
            case 2:
                month = 'February'; break;
            case 12: 
                month = 'December'; break;
            case 3:
                month = 'March'; break;
            case 4:
                month = 'April'; break;
            case 5:
                month = 'May'; break;
            case 6:
                month = 'June'; break;
            case 7:
                month = 'July'; break;
            case 8:
                month = 'August'; break;
            case 9:
                month = 'September'; break;
            case 10:
                month = 'October'; break;
            case 11:
                month = 'November'; break;
        }
        day = (day < 10) ? `0${day}` : day
    return(`${month} ${day}, ${year}`)}

export default getCreationDate()