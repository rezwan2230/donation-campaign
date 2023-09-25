
const previousLocalStorage =()=>{
    const previousStore = localStorage.getItem('donation')
    if(previousStore){
        return JSON.parse(previousStore)
    }
    return []
}


const saveLocalStorage = (currentDonation)=>{
    const currentStore = previousLocalStorage()
    currentStore.push(currentDonation)
    localStorage.setItem('donation', JSON.stringify(currentStore))
}

export {saveLocalStorage, previousLocalStorage}