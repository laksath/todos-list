import React from 'react'
import './footer.css'

export const Footer = () => {
    let footerStyle={
        position: "absolute",
        width: "100%",
        top: "140vh",
    }
    return (
        <div id="page-container">
            <div id="content-wrap">
            </div>
            <footer className='bg-dark text-light py-1' id="footer">
                <p className="text-center">Copyright &copy; MyTodoList</p>
            </footer>
        </div>
    )
}
