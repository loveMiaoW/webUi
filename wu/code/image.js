//ondragover事件回调函数
    function allowDrop(ev){
        //解禁当前元素为可放置被拖拽元素的区域
        ev.preventDefault();
    
    }
    //ondrop事件回调函数
    function fileDrop(e){
        //解禁当前元素为可放置被拖拽元素的区域
        e.preventDefault();
    
    
    
    //获取图片展示区域对象output
    var output = document.getElementById("output");
    //将图片展示区域的内容清空
    //output.innerHTML = " ";
    
    
    //获取从本地拖拽放置的文件对象数组files
    var files = e.dataTransfer.files;
    
    
    //使用for循环遍历同时被拖拽并放置到指定的区域的所有文件
    for(var i = 0,f;f = files[i];i++){
        //创建带有相框的图片
        //获取当前图片文件的URL来源
        var imgURL = window.webkitURL.createObjectURL(f);
        //创建图片对象img
        var img = document.createElement("img");
        //设置图片对象img的src属性为当前图片文件的URL地址
        img.setAttribute("src", imgURL);
        //设置图片的格式为宽度为330px
        img.setAttribute("width", "330");
        //设置图片格式为高度为270px
        img.setAttribute("height", "270");
        
        //设置相框对象photo
        var photo = document.createElement("div");
        //为相框对象添加class="photoframe",以加载相框背景图片
        photo.setAttribute("class", "photoframe");
        //将图片添加到相框对象中
        photo.appendChild(img);
        
        
        //创建图片对象2
        var img2 = document.createElement("img");
        //设置图片对象2的class="block"
        img2.setAttribute("class", "block");
        //将图片2也添加到相框元素中
        photo.appendChild(img2);
        
        
        //添加相框和图片效果
        output.appendChild(photo);
        
        
        //创建图片下方的状态信息栏
        //使用div元素创建状态信息栏status
        var status = document.createElement("div");
        //获取当前文件的最新修改日期
        var lastModified = f.lastModifiedDate;
        //修改当前文件的最新修改日期的描述格式
        var lastModifiedStr = lastModified ? lastModified.toLocaleDateString() + ' ' + lastModified.toLocaleTimeString():'n/a';
        //设置图片下方状态信息栏的描述内容
        status.innerHTML = '<strong>' + f.name + '</strong>(' + (f.type || 'n/a') + ')<br>大小:' + f.size + '字节<br>修改时间: ' + lastModifiedStr;
        
        
        //添加文件描述
        output.appendChild(status);
      }  
    }