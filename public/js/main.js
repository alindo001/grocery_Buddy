const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteItem)
})


async function deleteItem(){
    const itemId = this.parentNode.dataset.id
    try{
        const response = await fetch('food/deleteItem', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemIdFromJSFile': itemId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}







