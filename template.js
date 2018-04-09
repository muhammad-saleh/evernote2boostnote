module.exports = {
    template: `<img style="width:0;height:0;opacity:0" id="stPathImg" src=":storage" onerror="(function(){window.stPath = window.stPathImg.src.split(':storage')[0];
window.stPath = window.stPath.split('/images')[0] + '/imports/';
pg.src = window.stPath + pg.dataset.src;
})()" />
<iframe id="pg" frameborder="0" frameborder="0" style="position: relative; height: 95%; width: 100%;" data-src="{{FILEURL}}"></iframe>
<div style="width:0;height:0;opacity:0;position:absolute;top:-10000px;left:-10000px;">{{FILECONTENT}}</div>`
}