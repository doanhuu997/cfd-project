import React, { useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {

    useLayoutEffect(() => {
        document.getElementById('header').style.display = 'none'
        document.getElementById('footer').style.display = 'none'

        return () => {
            document.getElementById('header').style.display = 'block'
            document.getElementById('footer').style.display = 'block'
        }
    }, [])
    return (
        <main className="notfound" id="main">
            <div className="container">
                <section>
                    <h2 className="main-title">404</h2>
                    <p>Không tìm thấy trang</p>
                    <Link to="/cfd-project" className="btn main round">Trang chủ</Link>
                </section>
            </div>
        </main>
    )
}