var path=require('path');
var express =require('express');
var app=express();
var proxy=require('http-proxy-middleware');
var viewsPath=path.join(__dirname,'views');
app.use('/',express.static(viewsPath));

var publicPath=path.join(__dirname,'public');
app.use('/public',express.static(publicPath));
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
});
module.exports=app;
