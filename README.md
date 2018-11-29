# jet-js-cli
### [theajack](https://www.theajack.com/)
#### [Jet.js](https://www.theajack.com/jet) 的脚手架工具，帮助您更便捷地使用Jet
#### [Jet.js](https://www.theajack.com/jet) Scaffolding tools to help you use Jet.js framework more easily
#### Jet 是一个轻量级、渐进式的 JS MVVM框架
#### Jet is a lightweight, progressive JS MVVM framework

#### 1.Installation
1.Use npm to install

<pre>
npm install jet-js-cli -g
</pre>

下载需要一点时间，请耐心等候

Download takes a little time, please be patient

（请使用 `-g` 全局安装，否则后续命令无法执行）

(Please use `-g` to install globally, otherwise subsequent commands cannot be executed)

#### 2.Use

选择一个您希望建立项目的目录，命令行运行以下命令：

Select a directory where you want to build the project, and run the following command from the command line:

<pre>
jet init projectName
</pre>

#### 3.Development

执行上述命令后会下载一个Jet的开发模板和相应开发环境，执行以下命令可以运行这个Jet示例程序：

After executing the above command, you will download a Jet development template and the corresponding development environment. You can run the Jet sample program by executing the following command:

<pre>
cd projectName
jet run
</pre>

详细Jet使用教程请参考 [Jet API](https://www.theajack.com/jet/)

For detailed Jet tutorials, please refer to [Jet API] (https://www.theajack.com/jet/)

#### 4.Package and use in production environment

##### 4.1 Packing Command

使用以下命令打包项目

<pre>jet build</pre>

打包完成后，会在根目录下生成一个`build`文件夹（如已有`build`文件夹，会将旧的打包文件覆盖），将build文件夹中的所有文件复制到您的生产环境中即可运行。

After the package is completed, a build folder will be generated in the root directory (such as the existing build folder, the old package file will be overwritten), and all the files in the build folder will be copied to your production environment to run.

生成`build`文件夹后，可以使用一下命令测试打包之后的项目能否正常工作。

After generating the `build` folder, you can use the following command to test whether the packaged project works properly.

<pre>
cd build
jet run
</pre>

实际上，您可以使用`jet run`命令在任一目录下启动一个http服务器，入口文件是`index.html`

In fact, you can use the `jet run` command to start an http server in any directory. The entry file is `index.html`

##### 4.2 Packing configuration

在根目录中的`build.config.json`文件中，有以下配置项

In the `build.config.json` file in the root directory, there are the following configuration items.

<pre>
...
"jetConfig": {
	"compressHtml": true,
	"compressCss": true,
	"compressJs": true,
	"buildJsWithBabel": false,
	"buildCssWithLess": false,
	"commonLess": false
},
...
</pre>

各项参数含义如下

The meaning of each parameter is as follows

|参数|默认值|描述|
|:--:|:--:|:--:|
|compressHtml|true|是否压缩html文件|
|compressCss|true|是否压缩css文件|
|compressJs|true|是否压缩js文件|
|buildJsWithBabel|false|是否将es6转为es5|
|buildCssWithLess|false|是否将less转为css|
|commonLess|false|是否将common.css文件作为less文件编译|

<br>

|Parameters|Defaults|Description|
|:--:|:--:|:--:|
|compressHtml|true|whether to compress html files|
|compressCss|true|Currently compress css files|
|compressJs|true|whether to compress js files|
|buildJsWithBabel|false| Whether to convert es6 to es5|
|buildCssWithLess|false|Whether to turn less to css|
|commonLess|false| Whether to compile the common.css file as a less file|

-备注1：若您在开发中使用es6或less，请引入相应的官方库，详细教程请参考 [Jet APi](https://www.jet-js.com).
-备注2：当设置了 buildJsWithBabel 或 buildCssWithLess 为true 时，compressHtml参数会强制使用true ，这是因为需要处理html文件中的js和css代码。

- Note 1: If you use es6 or less in development, please introduce the corresponding official library. For detailed tutorials, please refer to [Jet APi] (https://www.jet-js.com).
- Note 2: When buildJsWithBabel or buildCssWithLess is set to true, the compressHtml parameter forces true, which is due to the need to process the js and css code in the html file.
