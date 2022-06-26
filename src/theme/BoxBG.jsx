
export default function BoxBG({style, ...otherProps}){

    return(
            <div  className='BoxBG' style={{
                background: 'black',
                width: '100vw',
                flexDirection: 'column',
                marginTop: '0px',
                zIndex: '-20',
                position: 'absolute',
                ...style,
            }}{...otherProps}/>

    )
}
