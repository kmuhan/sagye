import { NavLink, useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledNavLink = styled(NavLink)`
    margin: 10px;
    font-size: 30px;
    transition: 0.5s;
    
    &:hover {
        background-color: gray;
    }
`

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
        <Wrapper>
            {categoryItems && categoryItems.map((doc) => (
                <StyledNavLink
                    to={`/${categoryId}/${doc.id}`}
                    key={doc.id}
                >
                    {doc.id}
                </StyledNavLink>
            ))}
        </Wrapper>
    )
}

export default Category