import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"

function Category() {
    const { categoryId } = useParams()
    const [ categoryItems, setCategoryItems ] = useState()
    
    async function getDocuments(categoryId) {
        const categoryRef = query(collection(db, categoryId))
        const queryCategory = await getDocs(categoryRef)
        setCategoryItems(queryCategory.docs)
    }

    useEffect(() => {
        getDocuments(categoryId)
    }, [categoryId])

    return (
        <div>
            <ul>
            {categoryItems && categoryItems.map((doc) => (
                <li>
                {doc.id}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Category