import axios from 'axios'
const uri = 'http://localhost:5000/class'
export const Classadd =(quiz)=>{

    return( async (dispatch)=>{

            const  {data} = await axios.post(`${uri}`,quiz)
              
            dispatch({
                type: "ADD",
                payload : data
            })
    })
}
export const productget =()=>{
        return(async(dispatch)=>{
    
                const  {data} = await axios.get(`${uri}/product`)
                console.log(data)
                dispatch({
                    type: "GETPRODUCT",
                    payload : data
                })
        })
    }

export const searchaction = (search)=>{

    return ( async(dispatch)=>{

        try {
            const {data} = await axios.post(`${uri}/product/search`, {search})
         
            dispatch({
                type : "SEARCH",
                payload : data
            })  
        } catch (error) {
           console.log(error.message) 
        }
    })

  
    }
    export  const Detailaction = (id)=>{
        console.log("action" + id)
         return( async(dispatch)=>{
 
             try {
                 const {data} = await axios.post(`${uri}/product/${id}`, {id})
                 dispatch({
                     type: "DETAIL",
                     payload : data
                 })
             } catch (error) {
                 console.log(error.message)
             }
         })
 
      }