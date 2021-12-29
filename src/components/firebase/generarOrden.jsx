import { query, collection, writeBatch, where, documentId, getDocs, addDoc, Timestamp } from "firebase/firestore"
import Swal from "sweetalert2"
import { db } from '../../Firebase/config'



export const generarOrden = async (values, cart, totalPrice, clearCart) => {


    const orden = {
        buyer: {...values},
        items: cart,
        total: totalPrice(),
        date: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)

    const orderRef = collection(db, "orders")
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where(documentId(), "in", cart.map(el => el.id)))

    const outOfStock = []

    const productos = await getDocs(q)
   
    productos.docs.forEach(doc => {
        const itemToUpDate = cart.find((prod) => prod.id === doc.id)

        if (doc.data().stock >= itemToUpDate.cantidad) {
            batch.update(doc.ref, {
                stock: doc.data().stock - itemToUpDate.cantidad
            })
        }else {
            outOfStock.push(itemToUpDate)
        }
    })

    if (outOfStock.length === 0) {
        
        addDoc(orderRef, orden)
            .then((res) => {
                batch.commit()
                
                Swal.fire({
                    title: 'Orden realizada',
                    text: `Gracias por comprar con nosotros. Numero de compra: ${res.id}`,
                    icon: 'success',
                })
                clearCart()
            })        
       
    }else{
        Swal.fire({
            title: 'Error',
            icon: 'error',
            text: `No hay suficiente stock para los siguientes productos: ${outOfStock.map(el => el.name).join(', ')}`,
        })
    }
}