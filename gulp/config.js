/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */

var path = require('path');
var dest = path.resolve(__dirname, "./../build");
var src = path.resolve(__dirname, './../src');


module.exports = {

	less: {

		moduleMainSrc:src + "/module/main/index.less",
		moduleMainDest:dest + "/module/main/index.less",
		commonSrc: src + "/common/less/*.less",
		commonDest: dest + "/common/less/",		  //输出目录
		settings: {//编译less过程需要的配置，可以为空

		}

	}

}