import styles from '../styles/Results.module.css'
import styled from 'styled-components';

const CardItem = styled.div`
    width: 95%;
    height: 106px;
    background-color:white;
    display:flex;
    margin-left:10px;
    margin-bottom:10px;
`

const BusInfo = () => {

    return (
        <CardItem>
            <h1>222</h1>
            <div>
                <p>Plaza Lima</p>
                <p>Hortaleza</p>
            </div>
        </CardItem>
    )

}


export default BusInfo