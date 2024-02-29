    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    });

    function mouseCircleElementHandler(xscale, yscale) {
        window.addEventListener("mousemove", function (dets) {
            document.querySelector("#mouseCircle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
          });
       }

       mouseCircleElementHandler(1,1)

       document.querySelector(".Right-side-box").addEventListener("mousemove",function(){
        mouseCircleElementHandler(2,2)
       })
       document.querySelector(".Right-side-box").addEventListener("mouseleave",function(){
        mouseCircleElementHandler(1,1)
       })
       
       function mouseCircleScale(){
        let xScale, yScale = 1;
        let xPre, yPre = 0;

        window.addEventListener("mousemove", function(dets){

            xScale = gsap.utils.clamp(1,2, dets.clientX - xPre)
            yScale = gsap.utils.clamp(1,2, dets.clientY - yPre)
        }) 
       }

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
        }page1Animations()

        document.querySelectorAll(".elem").forEach(function(elem) {
            let preloc = 0;
            let diffRoot = 0;
        
            elem.addEventListener("mousemove", function(dets) {
                let diff1 = dets.clientY - elem.getBoundingClientRect().top;
                diffRoot = dets.clientX - preloc;
                preloc = dets.clientX;
                mouseCircleElementHandler(8,8)
                let crsr = document.querySelector("#mouseCircle")
                crsr.innerHTML="View"
                crsr.style.mixBlendMode = "normal";
                crsr.style.opacity = .8 

                gsap.to(elem.querySelector("img"), {
                    opacity: 1,
                    ease: "power4",
                    smooth:true,
                    top: diff1 + "px",
                    left: dets.clientX -30+ "px",
                    rotation: gsap.utils.clamp(-20, 20, diffRoot * 0.7),
                });

                gsap.to(elem.querySelector("h1"), {
                    ease: "power4",
                    smooth:true,
                    x:10,
                    opacity:.3,
                    duration:1,
                 });
            });
        
            elem.addEventListener("mouseleave", function(dets) {
                mouseCircleElementHandler(1,1)
                let crsr = document.querySelector("#mouseCircle")
                crsr.innerHTML=""
                crsr.style.mixBlendMode = "difference";
                crsr.style.opacity = 1 
                imgTween = gsap.to(elem.querySelector("img"), {
                    rotation: 0, 
                    opacity: 0,
                    ease: "power3",
                    duration: 0.5,
                });

                gsap.to(elem.querySelector("h1"), {
                    ease: "power4",
                    smooth:true,
                    x:-10,
                    opacity:1,
                    duration:1
                 });

            });
        });
        