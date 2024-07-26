import { useState } from "react"

export const useFilter = (datalist, callback) => {
    const [query, setQuery] = useState('')
    // data.category.toLowerCase().includes(query)
    const filteredData = datalist.filter((data) => callback(data).toLowerCase().includes(query))
    // console.log(filteredData)

    return [filteredData, setQuery]

}

