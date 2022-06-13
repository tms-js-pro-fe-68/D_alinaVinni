
export default function BoxBG(props){

    return(
            <div  className='BoxBG' style={{
                background: 'black',
                // maxWidth: 'inherit',
                // minWidth: 'inherit',
                width: '100%',
                height: '2000px',
                marginTop: '0px',
                zIndex: '-20',
                position: 'absolute',
            }}>{props.children}</div> 

    )
}
