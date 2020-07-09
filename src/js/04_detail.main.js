require.config({
    paths:{
        jquery:'./jquery.min' ,
        detail:'./04_detail'    
    }
});

require(['detail'],function (detail) {
    detail.deRender();
  })
