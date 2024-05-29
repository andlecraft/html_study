class Shop{
    constructor(data){
        this.data = data
        console.log(data)
    }

     
}
$.getJSON('/data.json', json => {
    new Shop(json.data)
})