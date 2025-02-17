//MTK MMI GDI functions
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand() {
return getRandomInt(0,32767);;
}

var ctx = document.getElementById("myCanvas").getContext("2d");

function gui_color (r,g,b)
{return 'rgb('+r+','+g+','+b+')';}

function gui_fill_rectangle(x1,y1,x2,y2,color)
{
 ctx.beginPath();
ctx.rect(x1,y1,x2-x1,y2-y1);
ctx.fillStyle=color;
ctx.fill();}

function gui_draw_vertical_line (y1, y2, x, color)
{ctx.beginPath();
ctx.moveTo(x, y1);
ctx.lineTo(x, y2);
ctx.strokeStyle = color;
ctx.stroke();}

function gui_draw_vertical_line (y1, y2, x, color)
{ctx.beginPath();
ctx.moveTo(x, y1);
ctx.lineTo(x, y2);
ctx.strokeStyle = color;
ctx.stroke();}

function gui_draw_horizontal_line (x1, x2, y, color)
{ctx.beginPath();
ctx.moveTo(x1, y);
ctx.lineTo(x2, y);
ctx.strokeStyle = color;
ctx.stroke();}

function gui_putpixel (x, y, color)
{ctx.beginPath();
ctx.rect(x,y,1,1);
ctx.fillStyle=color;
ctx.fill();}

function gui_show_image (x, y, i)
{image = new Image();
image.src = i;	
ctx.drawImage(image, x, y);}

function gui_set_clip (x1, y1, x2, y2)
{ctx.beginPath();
ctx.rect(x1,y1,x2-x1,y2-y1);
ctx.clip();}


function getWidth(i)
{image = new Image();
image.src = i;	
var width = image.width;
return width;}

function getHeight(i)
{image = new Image();
image.src = i;	
var height = image.height;
return height;}

function mmi_gfx_draw_gameover_screen(text_img_id, box_img_id, pic_img_id, score)
{
    var text_image_width = 0;
    var text_image_height = 0;
    var box_image_width = 0;
    var box_image_height = 0;
    var pic_image_width = 0;
    var pic_image_height = 0;
    var text_image_offset_y = 0;
    var box_image_offset_y = 0;
    var pic_image_offset_y = 0;
    var score_str_offset_y = 0;
    var score_str_offset_x = 0;
    var str_width = 0;
    var str_height = 0;
    var spacing = 0;

    /*----------------------------------------------------------------*/
    /* Code Body                                                      */
    /*----------------------------------------------------------------*/
    gui_fill_rectangle(0, 0, canvasWidth,canvasHeight, gui_color(255,255,255));

   text_image_height = getHeight(text_img_id);
   box_image_height = getHeight(box_img_id);
   pic_image_height = getHeight(pic_img_id);
   text_image_width = getWidth(text_img_id);
   box_image_width = getWidth(box_img_id);
   pic_image_width = getWidth(pic_img_id);



    spacing =
        (128 - (text_image_height + box_image_height + pic_image_height)) >> 2;

    text_image_offset_y = spacing;
    box_image_offset_y = text_image_offset_y + text_image_height + spacing;
    pic_image_offset_y = box_image_offset_y + box_image_height + spacing;

        gui_show_image((canvasWidth - text_image_width) >> 1, text_image_offset_y, text_img_id);
        gui_show_image((canvasWidth - box_image_width) >> 1, box_image_offset_y, box_img_id);
        gui_show_image((canvasWidth - pic_image_width) >> 1, pic_image_offset_y, pic_img_id);
		
	  ctx.font = '16px arial';
	  ctx.textAlign = 'center';
	  ctx.fillStyle=gui_color(0,0,0);
    ctx.fillText(score, (canvasWidth - box_image_width)*1.1, box_image_offset_y*1.45);

}
