let baseUrl ="http://localhost/h5-2003/ocj.com.cn";
define(['jquery'],function ($) {
    return {
        render:function () {
        $.ajax({
            type: "get",
            url: `${baseUrl}/interface/getall.php`,
            dataType: "json",
            success: function (res) {
                console.log(res);
                let temp = '';
                res.forEach((elm) => {
                    // console.log(elm.img);
                    let pic = JSON.parse(elm.img);
                    // console.log(pic[0].src);
                    // console.log(elm.id);
                    temp += `
                        <li class="tui_one">
                            <img src="${baseUrl}/src/${pic[0].src}.jpg" alt="">
                            <div>
                                <a href="${baseUrl}/src/html/04_detail.html?id=${elm.id}">${elm.detail}</a>
                            </div>
                            <i>￥${elm.price}</i>
                        </li>                        
                    `;
                });
                $('.Render').html(temp);
                // console.log($('li.tui_one>img'));
                // $('li.tui_one>img').on('click',function(){
                //     location.href=`${baseUrl}/src/html/04_detail.html`
                // })
            }
        });

        },
        
        lunbo:function(){
            
        }

    }

  })
