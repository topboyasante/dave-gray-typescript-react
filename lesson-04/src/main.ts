//Type Aliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

interface Guitarist {
    name:string,
    active?:boolean,
    albums:stringOrNumberArray
}
