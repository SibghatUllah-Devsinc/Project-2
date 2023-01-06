const getAllComments=(id)=>{
  return `${process.env.REACT_APP_BASE_URL}posts/${id}/comments`
}

export default getAllComments