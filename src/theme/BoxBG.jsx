
import CircleTheme from './CirclesLight'
import styled from '@emotion/styled'

export default function BoxBG(){
    const BoxBG = styled.div`
    background: black;
    width: 100%;
    margin-top:0px;
    z-index: -20;
    `
    const ContentConteiner = styled.div`
    z-index: 0`

    return(
            <BoxBG className='BoxBG'>
                <CircleTheme>
                    <ContentConteiner className='ContentConteiner'>
                        
                    </ContentConteiner>
                </CircleTheme>
            </BoxBG>
    )
}
