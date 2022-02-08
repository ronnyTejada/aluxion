import styles from '../styles/Card.module.css'
import Image from 'next/image'
import styled from 'styled-components';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'





const CardItem = styled.div`
    padding-left: 20px;
    color: white;
    
`
export const Subtitle= styled.p`
    position:relative;
    bottom: 15px;
    color:#8993A4;
    font-size:14px


`



const Card = (props) => {
    const router = useRouter()
    let t=false
   
    
    const saludo=()=>{
        t=true
        Swal.fire({
            
            html:`<div><h1>Hey Nacho</h1><p>¿Cuál es tu rumbo, aluxioner?</p></div><div><Link href="/posts/first-post"><button>casa</button></Link><button>aluxion</button></div>`,
            customClass:styles.mySwal,
            showConfirmButton: false,
    
        })
    
    }
   

    return (
        <CardItem onClick={()=>saludo()}>
            <Image src={props.aluxioner.img} alt="" width="197" height="210" />
            <p >{props.aluxioner.title}</p>
            <Subtitle >{props.aluxioner.position}</Subtitle>
        </CardItem>
    )
}

export default Card
