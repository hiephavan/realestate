google.maps.__gjsload__('overlay', function(_){var fy=function(a){this.i=a},gy=function(){},hy=function(a){a.zh=a.zh||new gy;return a.zh},iy=function(a){this.Ka=new _.ui(function(){var b=a.zh;if(a.getPanes()){if(a.getProjection()){if(!b.Eg&&a.onAdd)a.onAdd();b.Eg=!0;a.draw()}}else{if(b.Eg)if(a.onRemove)a.onRemove();else a.remove();b.Eg=!1}},0)},jy=function(a,b){function c(){return _.vi(e.Ka)}var d=hy(a),e=d.jg;e||(e=d.jg=new iy(a));_.A(d.Ia||[],_.M.removeListener);var f=d.Pa=d.Pa||new _.qu,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",
g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Lj=d.Lj||new fy(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Ia=[_.M.addListener(a,"panes_changed",c),_.M.addListener(g,"zoom_changed",c),_.M.addListener(g,"offset_changed",c),_.M.addListener(b,"projection_changed",c),_.M.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.qf&&(_.mg(b,
"Ox"),_.Dn("Ox","-p",a))},oy=function(a){if(a){var b=a.getMap();if(ky(a)!==b&&b&&b instanceof _.qf){var c=b.__gm;c.overlayLayer?a.__gmop=new ly(b,a,c.overlayLayer):c.j.then(function(d){d=d.mb;var e=new my(b,d);d.lb(e);c.overlayLayer=e;ny(a);oy(a)})}}},ny=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,_.En("Ox","-p",b.i),b.i.unbindAll(),b.i.set("panes",null),b.i.set("projection",null),b.o.Zc(b),b.j&&(b.j=!1,b.i.onRemove?b.i.onRemove():b.i.remove()))}},ky=function(a){return(a=a.__gmop)?a.map:null},
ly=function(a,b,c){this.map=a;this.i=b;this.o=c;this.j=!1;_.mg(this.map,"Ox");_.Dn("Ox","-p",this.i);c.Sc(this)},py=function(a,b){a.i.get("projection")!=b&&(a.i.bindTo("panes",a.map.__gm),a.i.set("projection",b))},my=function(a,b){this.H=a;this.o=b;this.i=null;this.j=[]};_.z(fy,_.N);
fy.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.ae(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.i:null))};var qy={};_.z(iy,_.N);qy.Sc=function(a){if(a){var b=a.getMap();(hy(a).Aj||null)!==b&&(b&&jy(a,b),hy(a).Aj=b)}};qy.Zc=function(a){var b=hy(a),c=b.Pa;c&&c.unbindAll();(c=b.Lj)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Ia&&_.A(b.Ia,_.M.removeListener);b.Ia=null;b.jg&&(b.jg.Ka.Lb(),b.jg=null);_.En("Ox","-p",a);delete hy(a).Aj};var ry={};ly.prototype.draw=function(){this.j||(this.j=!0,this.i.onAdd&&this.i.onAdd());this.i.draw&&this.i.draw()};my.prototype.dispose=function(){};my.prototype.Nb=function(a,b,c,d,e,f,g,h){var k=this.i=this.i||new _.xp(this.H,this.o,function(){});k.Nb(a,b,c,d,e,f,g,h);a=_.p(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,py(b,k),b.draw()};my.prototype.Sc=function(a){this.j.push(a);this.i&&py(a,this.i);this.o.refresh()};my.prototype.Zc=function(a){_.db(this.j,a)};ry.Sc=oy;ry.Zc=ny;_.Xe("overlay",{ni:function(a){if(a){(0,qy.Zc)(a);(0,ry.Zc)(a);var b=a.getMap();b&&(b instanceof _.qf?(0,ry.Sc)(a):(0,qy.Sc)(a))}},preventMapHitsFrom:function(a){_.rq(a,{onClick:function(b){return _.Np(b.event)},Eb:function(b){return _.Kp(b)},Kd:function(b){return _.Lp(b)},Wb:function(b){return _.Lp(b)},Jb:function(b){return _.Mp(b)}}).de(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.af);a.addEventListener("contextmenu",_.af);a.addEventListener("dblclick",_.af);a.addEventListener("mousedown",
_.af);a.addEventListener("mousemove",_.af);a.addEventListener("MSPointerDown",_.af);a.addEventListener("pointerdown",_.af);a.addEventListener("touchstart",_.af);a.addEventListener("wheel",_.af)}});});
