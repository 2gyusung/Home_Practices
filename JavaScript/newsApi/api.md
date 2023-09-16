const callAPI = async() =>{
    let url = new URL(`url주소`)
    let header = new Headers({헤더내용}) // 이건 필요한 경우만
    let response = await fetch(url,{headers:header})
    let data = await response.json()
}