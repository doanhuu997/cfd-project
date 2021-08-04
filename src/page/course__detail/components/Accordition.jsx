import { useRef } from "react"

let $ =window.$
export default function Accordition({num,title,content}) {

   $(document).ready(function () {
    $('.accordion__title').click(function (e) { 
        e.preventDefault();
        $('.accordion .content ').not($(this).next()).slideUp();
        // $('.accroding .accroding_wrap .accroding_wrap-item .title .item ').not($(this).children()).removeClass('active');
        // $(this).children().toggleClass('active');
        $(this).next().slideDown();
    });
   });
    return (
        <>
            <div className="accordion">
                <div className="accordion__title" >
                    <div className="date"> Ngày {num}</div>
                    <h3>{title}</h3>
                </div>
                <div className="content">
                 {content}
              </div>
            </div>
        </>
    )
}