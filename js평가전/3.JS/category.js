class Categorys {
    constructor(json) {
        this.json = json
        this.categoryList = ['ALL']
        this.type = "all"
        this.categorySortData()
        this.drawCategoryList()
        this.addEvent()

    }

    addEvent(){
        $('#select').change(e => {
            // console.log(e.target.value);
            this.type = e.target.value
            this.sortData()
        });
    }

   

    
    categorySortData() {
        this.json.forEach(data => {
            if (!this.categoryList.includes(data.category)) {
                this.categoryList.push(data.category)
            }
        })
    }

    sortData() {
        let printData = ""
        if (this.type == "all") {
            printData = this.json
        } else {
            printData = this.json.filter(e => e.category == this.categoryList)
        }

        this.drawList(printData)
    }

    // 1.클릭한 셀렉트 바의 옵션의 값을 가지고 오기
    // 2.그 값을 json에 있는 카테고리와 비교해서 오브젝트 찾아서 다른 배열에 넣기
    // 3. 받아온 배열 그려주기


    drawCategoryList() {
        $('#select').html('')
        this.categoryList.forEach(json => {
            $('#select').append(`
                <option value="${json}">${json}</option>
            `)
        })
    }
}

$.getJSON('/3.JS/data.json', json => {
    new Categorys(json)
})