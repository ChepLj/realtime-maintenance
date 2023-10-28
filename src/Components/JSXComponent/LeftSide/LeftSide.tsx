import './LeftSide.css'

export function LeftSide (){

    return <section className='LeftSide'>
        <div className='Container'>
            <span className='Title'>Access from Local</span>
            <div className='ButtonWrap'>Sever Local #1</div>
        </div>
        <div className='Container' >
            <span className='Title'>Access from Internet</span>
            <div className='ButtonWrap ButtonWrapDisable' >Sever Internet #1</div>
            <div className='ButtonWrap'>Sever Internet #2</div>
        </div>
    </section>
}