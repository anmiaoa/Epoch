var path=require('path');
var express =require('express');
var app=express();
<<<<<<< HEAD
var proxy=require('http-proxy-middleware');
=======

>>>>>>> cc326b3d8dbf808fce9dc090d35d649220926134
var viewsPath=path.join(__dirname,'views');
app.use('/',express.static(viewsPath));

var publicPath=path.join(__dirname,'public');
app.use('/public',express.static(publicPath));
<<<<<<< HEAD
/*app.use('/api',proxy({
	target:'http://guanjp.com:9805',
	changeOrigin:true,
	ws:true,
	cookieRewrite:true,
	pathRewrite:{
		'^/api':'/'
	}
}))*/
app.use('/api',proxy({
    target:'http://122.10.30.153:9901',
    pathRewrite:{
        '^/api':'/'
    }
}));
app.listen(16905,function(){
	console.log('duankou16905');
=======

app.listen(16905,function(){
	console.log('duankou9999');
>>>>>>> cc326b3d8dbf808fce9dc090d35d649220926134
});
module.exports=app;
