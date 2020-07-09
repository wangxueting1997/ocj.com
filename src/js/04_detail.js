let baseUrl ="http://localhost/h5-2003/ocj.com.cn";
define(['jquery'],function ($) {
    return {
        deRender:function(){
            let deid = location.search.split('=')[1];            
            console.log(deid);    
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getde.php`,
                data:{id : deid},
                dataType: "json",
                success: function (res) {
                    console.log(res);
                    let temp = '';
                    let temp2 ='';
                    let temp3 = '';
                    let temp4 ='';
                    // let res = JSON.parse(res);                
                    // console.log(res[0].img);
                    console.log(res[0].detail);
                    let pic = JSON.parse(res[0].img);    
                    console.log(pic[0].src);
                    // images/01_head/01_r5
                    temp +=`
                        <div class="de_lt">
                            <div class="s_img">
                                <img src="${baseUrl}/src/${pic[0].src}.jpg" alt="">
                            </div>
                            <div class="big_img">
                                <img src="${baseUrl}/src/${pic[0].src}.jpg" alt="">
                            </div>
                            <ul class="deList">
                                <li><img src="${baseUrl}/src/${pic[1].src}.jpg" alt=""></li>
                                <li><img src="${baseUrl}/src/${pic[2].src}.jpg" alt=""></li>
                                <li><img src="${baseUrl}/src/${pic[3].src}.jpg" alt=""></li>
                            </ul>
                        </div>
                    `;
                    $('.de_lt').html(temp);   
                    
                    temp2 +=`                       
                            <img src="../images/04_h1.png" alt="">
                            <span>TV商品</span>
                            <b>${res[0].detail}</b>                        
                    `;
                    $('.tit').html(temp2);
                    
                    temp3 +=`                       
                            <dt>商品价格</dt>
                            <dd>￥${res[0].price}</dd>
                    `;
                    $('.goodsPrice').html(temp3);

                    temp4 +=`
                    <div class="img_box">
                        <img src="${baseUrl}/src/${pic[0].src}.jpg" alt="">
                        <img src="${baseUrl}/src/${pic[0].src}.jpg" alt="">
                        <img src="${baseUrl}/src/${pic[0].src}.jpg" alt="">
                        <img src="${baseUrl}/src/${pic[0].src}.jpg" alt="">
                        <img src="${baseUrl}/src/${pic[0].src}.jpg" alt="">
                    </div>
                    `;
                    $('.img_box').html(temp4);
                }
            });
        }       
    }

  })
