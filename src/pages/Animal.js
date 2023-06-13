import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const P = styled.p`
    font-size: ${props => props.fontSize || '20px'};
    margin: 10px;
`

function Animal() {
    const { id } = useParams()
    const [ countryData, setCountryData ] = useState()
    
    async function getDocument(countryId) {
        const docRef = doc(db, "animals", countryId)
        const docSnap = await getDoc(docRef)
        setCountryData(docSnap.data())
    }

    useEffect(() => {
        getDocument(id)
    }, [id])
    
    return (
        <Wrapper>
            {countryData !== undefined &&
            <Container>
                <P fontSize="30px">{id}</P>
                <P>Species: {countryData.species}</P>
                <P>Sexual: {countryData.sexual}</P>
                <P>Type: {countryData.type}</P>
            </Container>
            }
        </Wrapper>
    )
}

export default Animal