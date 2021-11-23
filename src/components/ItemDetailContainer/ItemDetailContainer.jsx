import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    
    const API_URL = 'https://localhost:3000/stock/item'
    const [item, setItem] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setItem(data)
                setLoading(false)
                console.log(data)
            })
    }, []) 

    return (
            <div>
                {
                    loading 
                    ? <div>Cargando...</div>
                    : <ItemDetail item={item} />
                }
            </div>
            )
}

export default ItemDetailContainer