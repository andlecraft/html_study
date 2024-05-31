class Shop{
    constructor(json){
        this.json = json
        this.objectList=[]
        this.objectSortData()
        this.drawObjectList()

        // console.log(json)


    }

    objectSortData(){
        this.json.forEach(json=>{
            this.objectList.push(json)
            console.log(json)
        })
    }
    drawObjectList(){
        this.objectList.forEach(json=>{
            $('.objects').append(`
            <div class="object">
            <div class="img">

            </div>
            <div class="texts">
                <p class="title">${json.product_name}</p>
                <p class="price">💵${json.price}</p>
                <div class="bottom">
                    <p class="date">${json.create_date}</p>
                <p class="like">${json.like}♡</p>
                </div>
            </div>
        </div>
            `)
        })
    }

     
}
$.getJSON('/3.JS/data.json', json => {
    new Shop(json)
})