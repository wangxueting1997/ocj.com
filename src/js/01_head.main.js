require.config({
    paths:{
        jquery:'./jquery.min' ,
        head:'./01_head'    
    }
});

require(['head'],function (head) {
    head.render();
  })
