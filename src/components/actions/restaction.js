import axios from "axios"

export const restList=()=> async (dispatch)=>{
   const res=await axios.get('/restaurants.json')
   console.log(res);
}