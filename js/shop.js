

function render_row(template, data, groupsize, div) {
    var groupcount = data.length / groupsize;
    for (var i = 0; i < groupcount; i++) {
        var subarray = data.slice(i * groupsize, groupsize);
        var html = template(data);
        $(div).append(html);
    }
}

function render(url, data, groupsize, div) {
    $.get(url, function (template) {
        var template = Handlebars.compile(template);
        render_row(template, data, groupsize, div);
    });
}