(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,A){},26:function(e,t,A){},46:function(e,t,A){"use strict";A.r(t);var a=A(1),s=A.n(a),i=A(16),n=A.n(i),c=(A(25),A(18)),o=(A(6),A(26),A(0)),l=function(e){var t=e.activeTab,A=e.onTabChange,a=function(e){return"nav-item ".concat(t===e?"active":"")};return Object(o.jsx)("div",{className:"App-nav",children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:a("about"),children:Object(o.jsx)("button",{onClick:function(){return A("about")},className:"btn nav-link",children:Object(o.jsx)("h6",{children:"About me"})})}),Object(o.jsx)("li",{className:a("portfolio"),children:Object(o.jsx)("button",{onClick:function(){return A("portfolio")},className:"btn nav-link",children:Object(o.jsx)("h6",{children:"Portfolio"})})}),Object(o.jsx)("li",{className:a("contact"),children:Object(o.jsx)("button",{onClick:function(){return A("contact")},className:"btn nav-link",children:Object(o.jsx)("h6",{children:"Contact"})})})]})})})},g=A(3),r=A(4),h=(A(7),function(){return Object(a.useEffect)((function(){var e=document.getElementById("Name-canvas"),t=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight-9300;var A=[],a={x:null,y:null,radius:40};window.addEventListener("mousemove",(function(e){a.x=e.x,a.y=e.y})),t.fillStyle="black",window.innerWidth<500?(e.height=200,t.font="".concat(18,"px Helvetica"),t.fillText("Ethan",5,30),t.fillText("Carlsson",25,60)):(t.font="".concat(window.innerWidth/100+16,"px Helvetica"),t.fillText("Ethan Carlsson",25,40));var s=t.getImageData(0,0,225,60),i=function(){function e(t,A){Object(g.a)(this,e),this.x=t,this.y=A,this.size=1.5,this.baseX=this.x,this.baseY=this.y,this.density=30*Math.random()+1}return Object(r.a)(e,[{key:"draw",value:function(){t.fillStyle="black",t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.closePath(),t.fill()}},{key:"update",value:function(){var e=a.x-this.x,t=a.y-this.y,A=Math.sqrt(e*e+t*t),s=e/A,i=t/A,n=a.radius,c=(n-A)/n,o=s*c*this.density,l=i*c*this.density;if(A<a.radius)this.x-=o,this.y-=l;else{if(this.x!==this.baseX){var g=this.x-this.baseX;this.x-=g/10}if(this.y!==this.baseY){var r=this.y-this.baseY;this.y-=r/10}}}}]),e}();!function(){A=[];for(var e=0,t=s.height;e<t;e++)for(var a=0,n=s.width;a<n;a++)if(s.data[4*e*s.width+4*a+3]>128){var c=a+0,o=e+0;A.push(new i(3*c,3*o))}}(),function a(){t.clearRect(0,0,e.width,e.height);for(var s=0;s<A.length;s++)A[s].draw(),A[s].update();requestAnimationFrame(a)}()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("canvas",{id:"Name-canvas",className:"Name-canvas"})})}),d=A.p+"static/media/snakeElephant.18cfb39d.jpg",m=A.p+"static/media/worksheet.77995a3c.jpg",j=A.p+"static/media/treeDisputeHelper.2c73d57a.jpg",b=(A.p,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD8UlEQVRoge2YTWhcVRSAv3MnaSY/SqlSNEVTartppBZN8Ye2aYwTNUh3jQqCKEoWbqKWtO6yakmoNOBWFF0EaSsFu3CKiROjRUu7aaOpolQ0hEhpQQ1pJpP37nExVUnnzcx7uS9DC/NtZjj3/N775t1zBqpUqXJbI/G4UeHg6HaD6VLlMYEtQDPQCPjANYEZFc4ZOOklvx5nYMDGEdm9gP2j20xCRoDWsCaKnlYv8RLvdlx1DZ9wsh441WD8Nd8BD0QxE2SzEd2lqU0fMj6uLikYF+OahcZdwIaV2KrweE12Z5dLfHAsQOW/5Ges0VaLbQEmw9pbeMIlPrgWYPXO/DdJc/ipKQZTv6NyPLwDucMlPkCNq4M8+gzvjG4lJ/OI7ovHZzhiKoANxsoPsXmLgNMjdCvgtGd2qHMYGC6lY/rH+hCOltLRibo+dJlOFmQStYdlT+5kSf/h060oSdAdiHyqE8nXSimWPoGDmc1GdT/oTmAj+dagkgiqR3Us+YV0Zn8LUih6Aon+L/catRdAe8m3CZVO/l+aSNBbbDG4gLfHWlR0BGhYrazySLiGTvT5YkuBBZhafYtK7Ljqrzc+y8XapJnGe4IWgk9ApdspsXD8aa137EYa28pqG+/hQHGBpC+zlojd5QqYN8gLHHn6ip5pWg8aZsO2BAkLC0h624lt0FmGRWUa5X1recgbfPI0AL43DDSVtRZZFyQueI0mMPdGbNB/EuSQr94oQ6lZkFDmqhi+qjuC6ouholitDxIXFKCq6yIcwIi9vvgq73UvhjXQM03r8XJ7mDD9iD4S1g7Ra0HiggJEyWqI/BUyWm9eZrDb028amvH9A8Be4D5KTXreEvkNijqImdkgadBNHFjpTVhV+wYDnZ5matvwvTTIXREziobxLwSKbxb4Yn4u50uUswylLmmGJAlzYtWThwXql6aCFgrfQpev/gjMl/Kmwvd567oulJYYEixHWtpYClooLOB4j69wtozDfIHKRufUyuNh7aFii4E3saDHQrk2q96OeyC90rF0vngKAVj0E2Bm1dIqTRa4BPoRxrZJe/aDUsrB88Bg6i85MPa6wmdFdcozLO2Lb67QNjRFHwF/sPNzC50KGeD6aieyUpx6noBZNirOp3SrzsShqWQBM4i2grkfuBiX00oWkJbduSlpX5hG9ERcTt3+S1OZi9CUPauZNQ9Sm/gb3/b8b++GWwFivyVM65qnGSOT+Mvm+Gmn+Dg+QrI7NwUS7tYuZA5NnHKJD3H8Bhqzr4B+HNHqMshz0jH/h2v42GZfHa/dAWYfwqMILSh3A3Ugc6heQfgF9BwmkWZ24bz04McVu0qVKrcx/wCMzkVJG0VvSgAAAABJRU5ErkJggg=="),w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABz0lEQVRoge3YP2sUQRjH8Y9nFFOcFoIRjxRGLCysLEKCVmIpAW0klY2NpLC09D0INunEwjYvQgVBsBSVSCAICgH/IBoIp8WccEhmb27v1tnAfGGaYXaf3/f2dp7dpVAoFHJyqMFz/06smbpuXzrJcVpKEchNEcjNTO4AJtwJD/wVKAK5qXsPdHAV13EJ53Acs9jB2zHONVEnrsMNfBgUrjP+JXXdxHSwPkHw7AKPphA+m8AV9A+ywPOKQu+xhmWcx0WstEmgJ/7rv0Q3clxrBG5XFFmuOO6/CKQ0svnI/A5epBZqihSBucj8toa2u3FIEYh16ybfp5NJEfgame9pgUSKwLvI/EksTjFLY1wQ3yme4VjkuNZso/C6otAroXGdGqw9KjS0VgncrCg0PHaxN2JNFgF4nCgxamQTOIKHUxaYiazZa0LgLyvC/34aAmciaz6nhqnzSrkxGIu4hiUsCB37hPDg9x0/8Auf8BGbgvgwS5EayQK52bD/FXiaM1Qql8Uf0+9mzJXEaWyJ38C9fNFGcxZvxG/yJ/miVXMYd/BFPPw34RtTK7kvdOpY+D5uZUuXyBweCG9zw+F/YjVjrrHp4p7wCXJd6COFQqEGfwALB2NOjVeypgAAAABJRU5ErkJggg==",u="data:image/png;base64,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",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD4klEQVRoge2ZT2gUVxzHP292N0GjqdEEGo0Xe7KCB61eKthDKEoPJRbxoN68tyAUCu2xRw96klyDpW3AYKvYQoQILYgXT1pBrAdB2ahJzJ/9O++9HjbZzJvsvPdmd9Ji2S8s7Ps7v+983+/PzEAXXXTxTkPYBl+cYhlN379lTAKWd0+xPWkwsC7VFDM3Jz2sNlgJaJjN1pb0EA4b8o7FHSswPJJ+TbkEC3ON/1p0oAD/kQJK+dtgJ+Bgv1lQMtp4B30gqoDLBiuBwMF+sxAlEDhOgdWJsbAXfQP0XnnqtmZgwD3n+/1QfNxsyqx8wBYBdGUJtHYb54OVN0Yz6gM66MAHlI29DKFW9jHPDq2hNG9eN6KADDpQYM8Uc0A98drlRR8T7SgvgArX91SN3yrqI5PMt1q2Blci0y/hlYbdrS++CDvebzar3xxGzz4z56RMZPEcIMB6Tl2JDG2rh+IK9Hk4rAMxAs4o6CSAxQ/iR0hs2+mxnR1pIhD4ELDF4VL2BIws7KGAKw+gG+ew9VhMgcKFqxQuXDUnufLAzGW4/lWzaYTQLBQIbHchiyhUeWs002RhyNgH2kI5mUAmClgzYSmjPBCBTFGJQoc+EN4ZJ7wzbt8gngfOT8CRc+vtGIGoAtZKYBVOBWQ944p0a8yp40cookCvow4CDwX2LjL7cgBFC7K5D49TuDjVbMtHd6lfGrNvuIFAogJ6cJDXLvucCogZQmhdj+hls1v0D7q2sxKI5YA3Yjy5DluDTxSChLOol+eMttg5QnDwU0S+Z+PkXA8c+Az6h83+ynogSPMsvAbnEVpFEdgf79QrMQJb36Pnyx/RKwuoB7eQ96/DcAEOnYGDYxvvPhgKyJR1EHgSSIxE1RKEVcj3Gt2ibwe5Y2fJHTtrz8S1FZDrpySqgNB+CngdocBSkco/fkCX3iYNJ6O8APcnjC6jjPB8I+KtQNJYfeIiXPua4IMjBB99Tu7oKUT/UOvJpXl4eBMeTMJfv4OsGcOb5wOuu6Ek6sk91JN7hD992ySTPzoGvRoe3ko0OraN/zXTELBl41ZWNMn8/B3swXhktC5NWQeBJ4GcoKjaeQEhQ1DuadCogcJI1M/JDBUQgln7k2l7qNegWoFKpfHfgMpQAb1EMYvPHEpBrQqVcsNwZVOn6kfA+2gXv2CflIwiGAVOQPJXkyh2DTWMrVagbi8Mymj+1ILpQPHr8A0e+ezvTSCK56fZEig+DhSjGkaBw+3sA/yNYFpopvOS34Z+YSntBm0RiCOFOm3dZRsyIRDF89Nsydf5BDhJwEkAFLeB22GBmb2TZPA+sosuuvjf4B/mVKFnqGo6YQAAAABJRU5ErkJggg==",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAESUlEQVRoge1Zy4scRRz+qmd2XovLzm5WMPEB7mKyh5wSLyoYyYiPg0SQHOLR/AMBIbko3qJeglcJhKDgQfEiJj42RBCXXHIREgKBXLKRzGzceWzP9HZPVf08TLJTXTtdVTPTSQzMB3Poqu7q36++7/eoHmCCCSZ4osFMk97JSz6A6UdkSxJ8+cXhp5ImPcvD1ZSNGQVGG4wOMFAtXVuGByMYbciaJiVQNWrMxYClfcM/5LdAd//p2cDGYoA9HgYE79tAZhX8L2OAuOxfeGMwAJj199CgMABpVoFNQo8nC6kSsjBgDGLBRM2jwT6+NF/A6vFlqy3lctl6z8I3d1EP+7JhnIMe2CDGYAAy2fv6lrAa5gIC0IpkfEwq11mzCswOZJK9rwccREmz7mhFEkJfR42BrXAMBk4f3gDQHTTFJaEVjs9CI9Ksl7L366GLM2/VTc8bYwBgBFxaB7B70OziV39bDdQL2dJMFjeOPr193dTkE9t9oNazIRm2NAqkXAvmCvFXNsK4fSRiDlnfbXWAUu6H5vOaAxoDTGGAyN4JWB1gKTMwn493V7oDw9QAwBoDAIbohz6vPIvjBxZiY7Y6oEsIXEkMUo7PAIZgwNd30wHNrl4DlCB2YMBBQu4M+N3h02pLT6MKA8zSBwEpx8AoDDTChxwD3NAP6Th7dR1nr67HxvQ6cP5QGR8uFbevd2Yhsd0HceGlEAOSUs1CZS0LNSO9DigxMJVJIQuVpmoIpMQAZ5d3FfDnR/2O9FotwOvnbhiXK+cMdYBIbSMI90r3bObZGfjsDQ5gYD+yqdFfnLIvN6sVshgDUkDpEP/F1wcH9mEq3MSdcDLbjOJZZ1cpizcXZ5DL7Fw25zG8+1wBz5Tic2orTSK2nlP2cyhkAIFVGWjH6cWPJIgAdl/WM/kMvvtgEY0tgQs3m/jx+gZye/I4uljEkRcKKOd3OqZ2o0z0DzLkmP2cHEj6PiQkocMlpjXpzBYyOLZ/Dsf2zxkrcZsTulKRkFoDiNVcjhuuEkrcje+vbaA5wumsEUl8e7MTH1QzkCfTYwAGPX78622c/H0NL++exnt7Z/H+8iwWpqcG3lsPJX6+HeKHWwF+WwsRSS2FSrUPcusAHCWEqolOIQlX1nxcWfPxyeU7284cWS6DShIXDEbHoErIoQo7O9DrSN0OwKozn16+A7a0F9y1wxjie9ADOMWAoNG+D3FJ7sZzDtbtp32RSZMBT9RA437m1UAEikKwtg+0fVC0FSe5200vBsBFFRnXeDdAcCAIQO1NoOMDQpqE6eSA+7aeWnkxA69CRBUAbwNI/Nckhj3PA502WMcHhaHpzoDA/mKMViSjn3C6ct1l+dF0cWK1mM13XpWSVRhDhYADI60D3ALRCvPYipD5X/Dla5vDLpCOsN3ZGWmXTUg5MgGcWC1mcsEhAt5B7wcAFxlwUUTFP3DmlSD1d04wwQRPLv4DT7jzTbs1mf8AAAAASUVORK5CYII=",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEo0lEQVRoge1ZzW8bRRT/vbG9sWtC63y0uB9QhRsRrVAOJeVAK+VALyAO9ELhwrkSfwAHzv032l6CAgKiigsoRFSViiIuhA+BQCEKwU7dxLits/bOPA5mP8bZ3ZlNLEol/06e2Z037+1vfvPmjYEhhhjiiQaZXti8Mf0AQPk/8CUNzeqV1SNxD4TF4NqAnckOxlrSI4sAqD5IX/YFwh9Jj/KmsQyuGdeZAeUT7cxjvId5uDsFv5kYgJEBATwWBpQXfjYC1pPe+99qgKXG+/4ZAPjxMBAJQImDaIBRS9tsi1NvojzzQaqNgjNimgaPVl6HbK2G80YZ8A7EgEhlgApPm01YgIrPBb8ZWgBe9dTkn0njjAEwp2uAnKfsPDRAlE6GDX39b9DFJS9xnMmwYs/AwGGzdxYQxVPhnJ6dgAELDZx496f7f92c7gIoxD0XzqjewQqNhXMAq6ArLg/kKudx6Oz1oE3FkIHo+iem1ACMDBCBAWwlvuDoGlDdluZ8EnhX39pF6dnQRnQHSsnCgAUDvdlQA+F43CNR6NNAt2VlUrXX0Vp6Pn66KAOUnMQAu0QGUHI2Fv0MuH9bmUwDRzWg0hmwDSB5J+rbRtmSgTToDKRrwG4JKa6D4rNZ/xIqHDuH8bdW9D5TImOJ1vILAPd2y6gGHMcZAANCxDJAhTIg7L5BGrizFTjPCgAHATTHLq80U12zmkHFn4coP5gkpnbDRKsdIVIKGR9WAbCI1wA5gzlGsBsGoLyIS4YtFLDUAAuuk9yrAdn8BY2PZozj+xOZc/oqRk6/H7SjDMDyGO3DigEHcqA1gRipam12N4PfUQGnFTKBLZsJJ56p1gGY06slaETPicpN0IAFA1ZLiC4ueZs3prcBjO8xcOFjYGQsaMuvL4N302sgUewLILKEbAuZwJbphQjiveru6G0n9vpGA+1ZQgkMpBQyPrIEEKsD3r2vdziVVCNUOALKHQrHy0fgfz9ClkLGR4YsxPW4izzubmu9YuptcPEouHEX3I7GLJA7/BIKx97Qx0cEnKWQ8ZEhAFHrfaM+uNtakypnQJUzPedav4Eb36J4sor82KsgZ4+E9PWfoZDxYR0AE9cpxn90dmI6e6DRKdDoFAoTE8l23Y3wd4ZCxoe9BhJqY966A964Bbj3rE0BAFQX3vY36NYXw64MhYwPawYEcZ05RgMPfof8/lqvUaqCjp6HmJwFKmdBQq9C2WtCbt+G1/gK3r0vwZ5eO2QpZDIHAOaa8Ta+vQleW4BcWwDyZdD4DMTky+h0y/Dqn0Du3AVYxptXgOpGFoShkMkcAFG+zha1bgDvIbi2DFlbhptwucuS4LkCsp2DdHPaHmEqZHzYi1hSLVPWSIDyCF47B9nO6V+8D6ZCxkemm/PazRenJNQcMc0B/BqAUeMgAMXxDmQ7B88V/WedKBSA78C0COL56pXVH2xs7/vqf31+tuR0d15RSsyBMAfAfK7eizaDbgvGYg5yfvKdHzfNQ3Qc9L+LABnYaQC4BeLP87vyi8n3fj7QLcDAAohifX62lO80LwDiEsCXAEgAnyrgs+O/rt6hDwd3NB9iiCGecPwD8wXLM1nL4PYAAAAASUVORK5CYII=",O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC8UlEQVRoge2YT0gUURzHv2/cSdl1W6PdEjcsyoJCLNBMTYoicBFNkqBLl4rQjirUIahLSEHszdKITkZ0KcGEtUNUqGWaHaItQROMDcM/qOvqSuu+LonYzNt132veXOZzm/m9+b7vd+bNvDcPsLCwsDATkqxBXVmghoA2UIoiEDhkmAJFBMAA0qi/raeyM1HThAHqygK3AXrtv5pLEQLa3NpXeZ1dZ1BXFqgBaIcxtlKDUKW69V3FC72awrwItME4S6lBSbyRVWMGoEChMXa4KGIVmAEAZBpghBcnq2ATUW3t9SVtQ+MUi+EYZqeiGAvO4dPrCQT7p0CpSM9rCAXYCEQhcLhUOFwqvHucKK/egdBIGO13vmAsOCusn2gIGYY3z4mme8UoPJktrGVKAACwqQou3ChA9i6xV82QIVR/NLDuOMNhw8HybTjXuB/2THWtc1XBibO5eHI3yN2XlCcQjcTQ3/0TT/1fNbUDxW4hbalD6HPvpOZcljtdSFNqgM06ZqNLK0Ka0gLYVAW1V/Zpzv8aj4jpCl3NoOL87nXHzi2bkF/qQfZO7Wq8rysk1JchAc7o3Gk9hj9Ooz8gFsC0eeBz7yRarg5hJSa2pjAtQH6pGxdvFiDLkyGkY1oAohAcOrYdTS3FyLDzj2QpMzEAuLam44gvB6cv74VNXbtvHq8dx2tz0d3+nasvaU9gbnoZLx+PofPhiKZWdIp/USd9CL3X+ep4cuzcetIDEKKzj5B0c4eN9AAlvhzNubmpZW49w//IVnG501Hi86LqUp6mNjw0w61rSICN/CuvEo9TvHk2zt2XafPAKl2PRhAaDXNfL20I/cvSQgzP7w/jbccPIR0pASgFFsO/MT+zjNBoGN8GpjH4agLRSExYWyiA3owrm0TvwII0F8mZZxXYASgGDbHCB9MLO0Aa9RtihQMKwvTCDNDWU9lJQJuNsZQStx70+bpYxaSrkPrS7qq/+/OHIW/HegHABwriT2TewsLCwnz+AA/Twv7KzxMPAAAAAElFTkSuQmCC",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADPUlEQVRoge2YTUwTQRiG39ltKaW1/KQhgrQhBikaCY0cjEZCMNGDHjSaGGNC9ObBi9ELhhg96MlEIycvHiAxUetBL4IHf6PRHowQQ6VgMIUaEUqBNpQWtrseQMmmMtvObLsx9jnOznzzvjPfdKYfUKQIF0SrQ/fJ1y5RIbcAHASwKf+SAABxRcEzWVAuXL/fPknrSDWwJn4QQJWu8rInmiaKl2ZCoI1eW3mjxANAlSCTm7QOVANYTRtDIYSuQctAoXKehoP20cQa1WQW4G5Sx47PLWMmnNAcW+2ywV5hVrXNz6QQnVrKXUfOI9aw2kw43d2savv06ice3xmljjNbBJy53AybQ23g7pUhJgNaKbQhCuO41v01GeK/Dc9jIhhjisdsgAWLVUTbkTpVmywrGOgbZ47JbkDJfQ/ajrpgryhRtb1/+h1ToUVmGQXbgZp6O/YeVq/+dDiBFw9CXHGZD3GuG+Btr0boy4Kqrb9vHNKKzCoBAIeBXOnvZc9zGgU9xPkgLzsgigQ1W+1we8rhrLWiwmmB1W5GMiEhuShhcjSGwTfTSMRXuOfS1YCz1opj5zzwtFahtGzj0Dt2O9F+3A3f7RF8HZrjmpP9IvvLIXY1OtDSVk0V/5vSMhNOnN+OcqeFVQIAg8+AxSpiV8dmrhh5OQPLqTRCgQVMjMYw+2MJ85EUCAHqGhw4cKoeJvP6urkbqY9NTXQzEIum8PndDMYG5zARXEBaysyx8Fgc27yVaGip/NNmKzdn9MsFLgPJhITgxyiGP6wKl9Pat5ssq/sIoubfcirMBpKLEm6c9XPfpLwwG5BlJWM1jeCfv4mLBoyG2QAhQIlF1FMLExwGCDov7URJqbEmuFLI3eRAZ5exJrjPgNEmdDnERprQ7VfI3eTAnkNb9AqXNboZCPgjePuEWsrPC7oYCPgjeNQzgnQWjzm94X5OB/wR+HpGsnqJ5gOuHTBaPMBV2FKYxPf3juOlb70aJy0bVNhSFEBhWHmWEjoNrRSK6zobG9S6O9WAAjzXV0vuEEIGaN/pBmShCwBf5YkHglkiShdpXagGrvn2BdNEaQHgg8ZW6kyMEPJQENPeq/c6wgWct8j/xy9hNwDPC0oCnwAAAABJRU5ErkJggg==",B=[{id:1,name:"Your Online Worksheets",link:"https://worksheetsonline.herokuapp.com/",technologies:[b,w,u,p,v,x,O,D],summary:"\n        A web app I built to help deliver online classes and homework. The user copies and pastes an already existing fill in the blank style worksheet and transforms the blanks into text inputs. \n        ",img:m,github:""},{id:2,name:"Tree Dispute Helper",link:"http://www.treedisputehelper.com/",technologies:[b,w,u,p,v,x,O,D,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABfElEQVRoge2YMU7DMBSGv9eysLIjMdNjsDIhBYmhVwC1AyvtAUgljkCRKsjKNTqWCSRGDgEyQxKgtDhJk2c3yJ/kwUp+2X/0nv0rEAgEAoEaiItFzDX7CCcIfQy7CAmGOxnyXFenZsDE7NHhGEMfOPpjrTmGKe/cyyVvm+g6WgZc4aaEJhwAZ9kAmAEzGfBaV6dXQhNeMDzS5VYumK99J6aHEGGIZEhvI52iAfNjugASGTDOnl0BEaSbBpBB+jGr6na0DPyil41xNh81pWt9EwcDvtE0MCJtwiIWLNd2JZ36PWBuOOSDCMPp11EZs0B4oEsi5zzV0a0Y0MwtGqRnr6PckuuapPVNvFpCirlFg/z6dpNbht8RoGkDTnJLrmuSdVlILbdo0PomDgZ8kxtwkluqba0cS6eCdm5RN1CEr7xjo9DANuQdG61v4mol5Cnv2CguoS3IOzbKGPCed2xU/S/kJe/YaH0TBwO+KWPAe96xUfrE8Jl3AoHAP+YT5JgG4RArFWQAAAAASUVORK5CYII="],summary:"\n        A web app designed to assist self represented litigants in Tree Disputes. The user fills out the web form and the program writes on a word document to indicate which areas on the legal form they will need to complete, simulating the early stages of a legal interview.\n        ",img:j,github:"https://github.com/ethancarlsson/tree_disputes_form"},{id:3,name:"Psycopg2-connection",link:"https://pypi.org/project/psycopg2-connection/",technologies:[b],summary:"\n        A python package I created as part of a larger project to abstract away connections to postgres. The idea is to create the feeling that you can write SQL code directly into python without having to worry about opening and closing connections.\n        ",img:d,github:"https://github.com/ethancarlsson/psycopg2-connection"}],E=function(){return Object(o.jsx)(o.Fragment,{children:B.map((function(e,t){return Object(o.jsx)("div",{className:"card mb-3",children:Object(o.jsxs)("div",{className:"row no-gutters",children:[Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)("a",{href:e.link,children:Object(o.jsx)("img",{className:"card-img",src:e.img,alt:e.name})})}),Object(o.jsx)("div",{className:"col-md-8",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:e.name}),e.technologies.map((function(e,t){return Object(o.jsx)("img",{src:e,alt:"technology icon",style:{height:"24px",width:"24px"}},t)})),Object(o.jsx)("p",{className:"card-text",children:e.summary}),Object(o.jsxs)("p",{children:["Github: ",Object(o.jsx)("a",{href:e.github,children:e.github})]})]})})]})},t)}))})},C=A(20),S=A(19),N=A(17),Q=A.n(N),f=function(e){Object(C.a)(A,e);var t=Object(S.a)(A);function A(e){var a;return Object(g.a)(this,A),(a=t.call(this,e)).state={name:"",email:"",message:""},a}return Object(r.a)(A,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"form-group",children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST",children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name"}),Object(o.jsx)("input",{required:!0,type:"text",className:"form-control",value:this.state.name,onChange:this.onNameChange.bind(this)})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(o.jsx)("input",{required:!0,type:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message"}),Object(o.jsx)("textarea",{required:!0,className:"form-control",rows:"5",value:this.state.message,onChange:this.onMessageChange.bind(this)})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),Q()({method:"POST",url:"https://ethan-carlsson-api.herokuapp.com/contact/",data:this.state}).then((function(e){e.data?(alert("Message Sent."),t.resetForm()):alert("Message failed to send.")}))}}]),A}(s.a.Component),k=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md",children:[Object(o.jsx)("h2",{children:"I'm a web developer currently based in Barcelona  "}),Object(o.jsx)("p",{children:"I spend most of my time in the back-end solving problems with python, but I have a design streak and I'm always interested in making a great user experience with web technologies."})]}),Object(o.jsxs)("div",{className:"col-md",children:[Object(o.jsx)("h2",{children:"Technologies"}),Object(o.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(o.jsxs)("li",{class:"list-group-item",children:[Object(o.jsx)("img",{src:b,style:{height:"24px",width:"24px"},alt:"python"})," Python"]}),Object(o.jsxs)("li",{class:"list-group-item",children:[Object(o.jsx)("img",{src:u,style:{height:"24px",width:"24px"},alt:"postgres"})," SQL"]}),Object(o.jsxs)("li",{class:"list-group-item",children:[Object(o.jsx)("img",{src:w,style:{height:"24px",width:"24px"},alt:"Django"})," Django"]}),Object(o.jsxs)("li",{class:"list-group-item",children:[Object(o.jsx)("img",{src:x,style:{height:"24px",width:"24px"},alt:"JavaScript"})," JavaScript"]}),Object(o.jsxs)("li",{class:"list-group-item",children:[Object(o.jsx)("img",{src:p,style:{height:"24px",width:"24px"},alt:"HTML"})," HTML"]}),Object(o.jsxs)("li",{class:"list-group-item",children:[Object(o.jsx)("img",{src:v,style:{height:"24px",width:"24px"},alt:"css"})," css"]}),Object(o.jsxs)("li",{class:"list-group-item",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",style:{height:"24px",width:"24px"},alt:"React"})," React"]})]})]})]})})},P=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("footer",{className:"text-muted",style:{padding:"25px"},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("p",{className:"float-right",children:[Object(o.jsx)("img",{href:"https://www.linkedin.com/in/ethan-m-carlsson-/",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC80lEQVRoge2YS0hUURjHf+femXF8jFjYg8KIzLFIqaywhUGLKKLCrW2CKFoUEUlg0aooHy2koDZFtLSgIOgBtcgoN70hNdAIQiEkKMOZdNS597S4FYwzZ6YzeWcK7m9z4Xzf+e7/z3fOuQ/w8PDwyCciY0ZLfyOCoyDXA8XuSwLgO/ACSScdNXfSJaY3cLyvHWiZRWH6CNFK26qTyrByYkt/I0LedkWULkLuoq32bqqQoZ7EUdcE6WKLZlVIbQC5zg0tWSFYrwr50kwrSTlqWzA94VwNE/yFztVdQqpAmg6kwLYIh2I8OVhN9Fw9Tw9VU1USc8zkCT0D0xNc3R1m0/IyigMmDZVlXGkKOx3JE9odWFuR2M11S0L/UQcMkzfDkYShV0ORXOwBJXoG/IXs6xqk58M3vk9ZPH4/yv7rg85GzhPpTqFkDJPBSJBNlwZyfQop0TMQiySudysO1s8lFAwlx39hmFBQDPFJZ45tgSFAmOALgOnnT17L/t6AHUdeaEgaFkd6MsYX+8c5tm0RW1fMZVl5IZNxm95PUW68/syVZ1+ZNIuy6qSegSxZvSDAw8NrmB8K/B4L+g0aKstoqCxj78YIOy6/Y2S6CITmuTLbYlNx60BtgviZ1FWE6NoTRkxFtWvnxEBleeZTanPVHLaHS7SfKTkxYEvJ+e5htlx8S9O1dzwaGE2Z11Q3D6wprdo52QOn7n/kdPcX8BWAjHOzb4B7+8NsWzk3Ia9+aalzSvn/vHZOOnCxZwT8QWeDGiaWr4izD4aS8haWBkDaWrVdNyAlfB23SDjnDYPekVhSbqjA50zQwHUDQkDyQ0rwbSKuyP3HDLiNZyDfeAbyjWcg3/z3BtSfQcf7kp8osTH1F1ewNHNcp9ZM2mtSak33Mhdl5t+5VIV14tnmwpgqkG4JvdS5g8sotagNSDpdkZINUiq1qA101NxBiFZXBOkgOENH7T11OBMnendii2YEG1D9sZ59osBzpOxMJ97Dw8Mj//wAX47WWv18EiQAAAAASUVORK5CYII=",style:{height:"24px",width:"24px"},alt:"LinkedIn Icon"}),Object(o.jsx)("img",{href:"https://www.linkedin.com/in/ethan-m-carlsson-/",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADIUlEQVRoge2ZS0hVQRjHfz7rSkYvKLhhmqteCyuSMAIToZ0Ld0WLSIwiCDKIqCBolURPotqWEbTTddDGMivoSRC9iLDoYWVkQVm3xZxDh3Hu+WbOnaNQ9w8fwp2Z////nTNnZr4Riiji/0aJR66FQCOwHGgA5gMzgArgMzAMPAbuAleA+0DOo34iVAMdwHWUGZd4CRwEshPuGvVUu4ARS7Nx8R04DsyeKPPNwCMPxvV4C7Snbb4T+JmC+WicQ71hrygHzqRsPBp9QKXPBM5OoPkweoEyH+Z3T4L5MI4Uar4V+JWHfCtQH/y9l8DcE2AXsARoi+nXltT81EAkH3Gd1r8dtZJIxr+iFoPSyNhsTP8h1IbojAOCkYxhTA1qc2oJTGWCyAJrgf3ASsO4SkGr29X8TGBUIPW5SkgJjAJzTQNLTT8Cm4AqQTTRa82DWUJ7FbDFhdDmo2xxtpkf6yz0nmJ5+FxsQfYOv4ewbMAp6S7VB5qm0CoLwR2o1cEXhoBtFv1abchOEf8U7uC3jghRAgwK2j36INMbaBCEzgdkvpEDLgh9FtkQPcdxHnqE9P29sSH5JJBM9+06gmpBe1QfYJpCvwWRNKaPLcadTk0JfBNIavx4MaJWaH+v/2BKQJpn663tuEPiHpeACT3Ez8MXmA9yhaIKdVMRp92nDzK9gduCUC1wtBCneXAMeXr22xAtQ97Sc6irkPKEZqMoB05Yajbakkp7QRiDQFMB5tcAtyy1PuDwwKRiRo8B1Fmm3oK7HtgO3HDUOGxrHmAO6j4zSrARddB7GCPSZcHd7Wg8B4wBC1wSANhrINqAOvq+NrT1WvKW8fdi1zakM5IRGeCVRvQMdWpsAn5obS4FToeD+Y/AvCQJEJga0whXBG3NwAPUzt2PXIJGUeeQQGdS8yH0i63LhRKi7j5tzF/EU+0R1gBh7PTAKZm/CkzxoAOoHfukJjAA7EOVl4cScMaZv4a62vGOPeS/anRF3Irj7cmbsBr18fpO4AtqaqZRb49DBWqfGMZPApeYpP+VZYDNwM0EY0eA06RbY6eKaZNtoIgi/gX8AWjxX6lOgHeJAAAAAElFTkSuQmCC",style:{height:"24px",width:"24px"},alt:"Github Icon"})]}),Object(o.jsx)("p",{children:"If you're interested in my work you can contact me at ethanmcarlsson[at]gmail.com."})]})})})},R=function(e){switch(e.tab){default:case"portfolio":return Object(o.jsx)(E,{});case"about":return Object(o.jsx)(k,{});case"contact":return Object(o.jsx)(f,{})}};var I=function(){var e=Object(a.useState)("portfolio"),t=Object(c.a)(e,2),A=t[0],s=t[1];return Object(o.jsxs)("div",{className:"All-font",children:[Object(o.jsx)(h,{}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(l,{activeTab:A,onTabChange:s})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(R,{tab:A})}),Object(o.jsx)(P,{})]})},G=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,47)).then((function(t){var A=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;A(e),a(e),s(e),i(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root")),G()},6:function(e,t,A){},7:function(e,t,A){}},[[46,1,2]]]);
//# sourceMappingURL=main.7e4664e6.chunk.js.map