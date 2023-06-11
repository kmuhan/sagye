import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import styled from 'styled-components'

const Wrapper = styled.div`

`

function Country() {
    const { id } = useParams()
    const [ countryData, setCountryData ] = useState()
    
    async function getDocument(countryId) {
        const docRef = doc(db, "country", countryId)
        const docSnap = await getDoc(docRef)
        setCountryData(docSnap.data())
    }

    useEffect(() => {
        getDocument(id)
    }, [id])
    
    return (
        <div>
            {countryData !== undefined &&
            <>
                <div>{id}</div>
                <div>{countryData.language}</div>
            </>
            }
        </div>
    )
}

export default Country