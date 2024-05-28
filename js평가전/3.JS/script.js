class Shop{
    
}
$.getJSON('/music_data.json', json => {
    new Shop(json.data)
})