import React from 'react';


export default function ChooseFile() {
    const handleChange = (selectorFiles)=> {
        console.log(selectorFiles);
    }
    
    return (
        <>
            <form method='post' onChange={(e) => handleChange(e.target.files)}>
                <label for="chooseFile">Choose a file</label>
                <br />
                <input type='file' id='chooseFile' name='chooseFile' accept='image/*,.pdf' />
            </form>
        </>
    );
}