export default (state= [], action)=>{
    console.log(action)
    console.log(state)
      switch(action.type){
    
        case "GET":
            return state = action.payload
            case "CLASS":
              return state = action.payload
              case "DETAIL":
                return  [action.payload]
        default: 
            return state
      }
        
    }