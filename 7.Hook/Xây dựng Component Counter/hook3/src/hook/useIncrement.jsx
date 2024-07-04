import { useState } from 'react'

export default function useIncrement(addAmount) {
    const [count, setCount] = useState(addAmount);
    let increase = () => {
        setCount(count + addAmount)
    }
    return [count,increase]
}
