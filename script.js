   
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        
    });

    function mouseCircleScale(){
        var xScale = 1;
        var yScale = 1;

        var xPre = 0;
        var yPre = 0;

        window.addEventListener("mousemove", function(dets){
           clearTimeout(timeOut);

            xScale = gsap.utils.clamp(.8,2, dets.clientX - xPre)
            yScale = gsap.utils.clamp(.8,2, dets.clientY - yPre)

            xPre = dets.clientX;
            yPre = dets.clientY;

            mouseCircleElementHandler(xScale, yScale);

            var timeOut = setTimeout(function(){
                document.querySelector("#mouseCircle")
                  .style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
            },100)
        });
    }

    function mouseCircleElementHandler(xscale, yscale) {
        window.addEventListener("mousemove", function (dets) {
            document.querySelector("#mouseCircle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
          });
       }
       
    //    mouseCircleElementHandler(1,1)
       mouseCircleScale()

        function page1Animations() {
            var t1 = gsap.timeline();

            t1.from("#nav", {
                y: '-10',
                opacity: 0,
                duration: 1,
                ease: "Expo.easeInOut",
            })
            .to(".boundingelem",{
                y:'0',
                duration:1.5,
                ease: "Expo.easeInout",
                stagger:.2,
                delay:-1,
            })
            .from("#herofooter",{
                y:"-10",
                opacity: 0,
                duration:1.5,
                ease: "Expo.easeInout",
                delay:-1,
            })
        }

    page1Animations()
