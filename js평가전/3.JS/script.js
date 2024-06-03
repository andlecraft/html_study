class Shop{
    constructor(json){
        this.json = json
        this.objectList=[]
        this.objectSortData()
        this.drawObjectList()

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
                    <input type="checkbox" id="layer_popup" style="">
                    <label for="layer_popup">
                        자세히보기
                    </label>
                     <div id="layer_bg">
                        <div id="popup"> 
                        ${json.like}
                            <h2>
                                <label for="layer_popup">X</label>
                            </h2>
                        </div>
                    </div>
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