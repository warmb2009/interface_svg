

function addJigui(g, length, title)
{
    var title_width = 240;                                                  
    var title_height = 30;                                                  
    var u_width = title_width * 8 / 10;                                     
    var u_height = u_width / 443 * 43.5;   
    var title_color = 'dimgray';
    var object_x = 0, object_y = 0;
    
    // 机柜名称部分
    g.append('rect').attr('width', title_width / 10 - 2)
	.attr('height', title_height)
	.attr('fill', title_color)
	.attr('x', object_x)
	.attr('y', object_y); //左边小格
    g.append('rect').attr('width', title_width / 10 * 8)
	.attr('height', title_height)
	.attr('fill', title_color)
	.attr('x', title_width / 10 + object_x)
	.attr('y', object_y);
    g.append('rect').attr('width', title_width / 10 - 2)
	.attr('height', title_height)
	.attr('fill', title_color)
	.attr('x', 9 * title_width / 10 + 2 + object_x)
	.attr('y', object_y);
    
    var text = g.append('text').text(title)
	.attr('fill', 'white')
	.attr('x', title_width / 2)
	.attr('y', title_height / 2)
	.attr('text-anchor', 'middle')
	.attr('font-size', title_height / 2 + 'px')
	.attr('dy', 8);

    //画背景, 在背景之上画出1U的机位
    var rack_height = length * u_height;
    var rack_width = title_width;
    g.append('rect').attr('width', rack_width).attr('height', rack_height)
	.attr('x', object_x)
	.attr('y', object_y + title_height)
	.attr('fill', 'DarkSlateGray');
    
    for(var i = 0; i < length; i ++)
    {
	var cur_y = u_height * i + title_height;
	var cur_x = title_width / 10;

	
	g.append('rect').attr('width', u_width)
	    .attr('height', u_height)
	    .attr('stroke', 'black')
	    .attr('stroke-width', '1')
	    .attr('x', cur_x)
	    .attr('y', cur_y)
	    .attr('fill', 'gray');
	
	g.append('text').text(length - i)
	    .attr('fill', 'white')
	    .attr('x', title_width / 2)
	    .attr('y', cur_y + u_height / 2 ) 
	    .attr('text-anchor', 'middle')
	    .attr('font-size', u_height + 'px')
	    .attr('dy', 8);
    }
    
}
