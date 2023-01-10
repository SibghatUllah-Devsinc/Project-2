
const getItem=(input)=>{
 return localStorage.getItem(input)
}

const setItem = (input,data)=>{
  return localStorage.setItem(input, JSON.stringify(data))
}

export {getItem,setItem}