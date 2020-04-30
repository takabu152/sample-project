import {ADD_OPERATION_LOG,DELETE_ALL_OPERATION_LOGS} from '../actions'

const operationLogs = (state = [],action) => {
    switch(action.type){
        case ADD_OPERATION_LOG:
            
            const operationLog = {
                description:action.description,
                operatedAt:action.operatedAt
            }

            return [operationLog, ...state]
        case DELETE_ALL_OPERATION_LOGS:
            //filterもmapと同じでstateの中の配列を展開して処理して配列を戻す
            return []
        
        default:
            return state
    }
}

export default operationLogs