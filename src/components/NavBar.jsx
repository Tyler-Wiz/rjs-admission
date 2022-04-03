import React from 'react'
import { NavData } from '../data/Data'
import styled from 'styled-components'

const Container = styled.div`
    padding: 2.5rem;
    display:flex ;
    align-items:center ;
    background-image:url() ;
`

const Left = styled.div`
    flex:1 ;
    width:100% ;

    img{
        width:4rem ;
        height:4rem ;
    }
`

const Right = styled.div`
    flex:1 ;
`

const List = styled.ul`
    display:flex ;
    justify-content:space-between ;
    list-style:none ;
    text-transform:uppercase ;
    font-weight:600;
`

const Item = styled.li`
    a{
        text-decoration:none ;
        font-size:.9rem ;
       color:black;
    }
`


export const NavBar = () => {
  return (
    <Container>
        <Left>
           <img src={process.env.PUBLIC_URL + '/Img/Phoenix.png'} alt=''/> 
        </Left>
        <Right>
            <List>
                {NavData.map((item, i) => (
                    <Item key={i}>
                            <a href="/">{item.name}</a>
                    </Item>
                ))}
            </List> 
        </Right>
    </Container>
  )
}
