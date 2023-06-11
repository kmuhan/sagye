import { NavLink, useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"

function Animal() {
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
                <NavLink
                to={`/${categoryId}/${doc.id}`}>
                {doc.id}
                </NavLink>
                </li> 
            ))}
            </ul>
        </div>
    )
}

export default Animal