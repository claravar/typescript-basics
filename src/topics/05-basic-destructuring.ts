
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 26,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {
    song: anodherSong, 
    songDuration:duration, 
    details 
} = audioPlayer;

const {author} = details;

//console.log('Song: ', anodherSong);
//console.log('Duracion: ', duration);
//console.log('Author: ', author)


const [, , trunks = 'Not found']:string[] = ['Goku','Vegeta'];

console.log('Personaje 3: ', trunks);
export{}