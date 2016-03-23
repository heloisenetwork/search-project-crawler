///<reference path="../../typings/jsdom/jsdom.d.ts"/>

module HtmlParser{

	export class CPLHtmlParser{
		private  jsparser = require('jsdom');
		private fs = require("fs");
		private jquery = this.fs.readFileSync("./js/jquery_1.12.1.js", "utf-8");
		private html: string; 
		
		/**
		The Constructor
		*/
		constructor(html: string){
			this.html = html;
		}	

		getContent(){
		this.jsparser.env({
			html: this.html, 
			src: [this.jquery] ,
			done: (error, dom) => {
				var $ = dom.$; 
					$.each($("#content li"), (index, value) => {
						console.log($(value).text());
					});
				}
			});

		}
	}
} 
