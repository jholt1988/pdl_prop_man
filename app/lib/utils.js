import { textMarshal } from "text-marshal"

export function makeEnum (arr){
    let obj = Object.create(null)
    for(let value of arr){
        obj[value] = value
    }
    return Object.freeze(obj)
}


export const STATUS = makeEnum(["IDLE", 'LOADING', 'SUCCESS', 'FAILED'])

export const formatTelephoneInput = (input) =>{
  const data =  textMarshal({
        input: input,
        template:"(xxx)-xxx-xxxx"

    })

    return data.marshaltext
}


export const formatSSNInput = (input) => {
    const data = textMarshal({
        input: input,
        template:"510-98-2284"
    })

    return data.marshaltext
}


