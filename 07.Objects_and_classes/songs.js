function Songs(array){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList
            this.name = name;
            this.time = time;
        }
    }
    const numberOfSongs = array.shift();
    const searchedTypeList = array.pop();
    array.forEach(currentSong => {
        songAsArray = currentSong.split(", ")
        songAsArray.forEach(songElements => {
            songElementsAsArray = songElements.split("_")
            if (songElementsAsArray[0] === searchedTypeList || searchedTypeList === "all") {
                console.log(songElementsAsArray[1])
            }
        });
    });
}
Songs([2,

    'like_Replay_3:15',
    
    'ban_Photoshop_3:48',
    
    'all'])