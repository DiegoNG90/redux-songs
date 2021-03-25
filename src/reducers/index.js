//Create the 2 reducres: Song list reducer and selected song reducer
import {combineReducers} from 'redux';

//Returns an STATIC list (array) of songs (objects). It doesn't have any actions as parameters because we don't want to add or remove songs; only display STATIC list.
const songsReducer = () => {
    return [
        {title: "Stairway to heaven", duration: "7:28"},
        {title: "Shake it out", duration: "4:08"},
        {title: "Smells like teen spirit", duration: "3:55"},
        {title: "Da funk", duration: "4:47"}
    ]
}

// Will allow user to select a specific song from the list once they click "select" button. selectedSong is defaulted to null to indicate that when the app is first starts up we are not going to have any selected song.
const selectedSongReducer = (selectedSong = null, action) => {
    //This if is preventive: we actually don't have any other action.type different from "SONG_SELECTED". But it's more "hygenic" this way.
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }else{
        return selectedSong;
    }
}

//We will combine both reducers and export the combination (combineReducers). Take notice that we change the names to the key in order to make them shorter and more meaningful.

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})