//<![CDATA[
    var boldWords;
    var boldList = "";
    var ellipsis = " ...";
    var dateEllipsis = " <b>...</b> ";
    
    var d = new Date();
    var month = new Array(12);
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var arr_title = [];
    var arr_desc = [];
    var arr_url = [];

    var todaysDate = month[d.getMonth()] + ' '  + d.getDate() + ', ' + d.getFullYear();
    
    function get(e){return document.getElementById(e);}
    function val(e){return document.getElementById(e).value;}
    function html(e){return document.getElementById(e).innerHTML;}
    function css(e){return document.getElementById(e).style;}
    function get2(e){return document.getElementsByClassName(e);}
    function val2(e){return document.getElementById(e).value;}

    function getMetaDescWidthTitle(inputText) {
        var id = "descCanvas";  
        var c = document.getElementById(id);
        var ctx = c.getContext("2d");    
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.font = "20px Arial";
        return Math.round(ctx.measureText(inputText).width);
    }


    function getMetaDescWidthDescription(inputText) {
        var id = "descCanvas";  
        var c = document.getElementById(id);
        var ctx = c.getContext("2d");    
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.font = "14px Arial";
        return Math.round(ctx.measureText(inputText).width);
    }

    function titleFunction(){
        var txt = document.getElementById("in_title").value; 
        var metaDescWidth = getMetaDescWidthTitle(txt);
        get('titlechar').innerHTML = 'Pixels: ' + metaDescWidth;
        get('out_title').innerHTML = txt;
        if (metaDescWidth > 450){
            var count_l = txt.length;
            arr_title.push(count_l);
            arr_title = [arr_title[0]]
            get('out_title').innerHTML = txt.substring(0, arr_title[0]) + "...";
        }
        
    
    }
    function snippetFunction(){
        var txt = document.getElementById("in_snippet").value; 
        var metaDescWidth = getMetaDescWidthDescription(txt);
        get('snippetchar').innerHTML = 'Pixels: ' + metaDescWidth;
        get('out_snippet').innerHTML = txt;
        if (metaDescWidth > 1000){
            var count_l = txt.length;
            arr_desc.push(count_l);
            arr_desc = [arr_desc[0]];
            get('out_snippet').innerHTML = txt.substring(0, arr_desc[0]) + "...";

        }
    }

    function urlFunction(){
        var txt = document.getElementById("in_url").value; 
        var metaDescWidth = getMetaDescWidthDescription(txt);
        get('urlchar').innerHTML = 'Pixels: ' + metaDescWidth;
        get('out_url').innerHTML = txt;
        if (metaDescWidth > 545){
            var count_l = txt.length;
            arr_url.push(count_l);
            arr_url = [arr_url[0]];
            get('out_url').innerHTML = txt.substring(0, arr_url[0]) + "...";
        }



    }


